const API = 'http://localhost:5005';

let pass = true;
const check = (label, cond, extra) => {
  if (!cond) pass = false;
  console.log(`${cond ? 'PASS' : 'FAIL'}  ${label}${extra ? '  ' + extra : ''}`);
};

const post = async (body, headers = {}) => {
  const res = await fetch(`${API}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Origin: 'http://localhost:5173', ...headers },
    body: JSON.stringify(body),
  });
  let data = {};
  try { data = await res.json(); } catch {}
  return { status: res.status, data };
};

const valid = {
  name: 'Priya Sharma',
  email: 'priya@company.com',
  subject: 'Data Analyst role',
  message: 'We have an opening for a data analyst. Are you interested?',
};

(async () => {
  // health
  const health = await fetch(`${API}/api/health`).then((r) => r.json());
  check('health endpoint responds', health.ok === true, JSON.stringify(health));
  check('SMTP reported as unconfigured (no .env yet)', health.smtpConfigured === false);

  // happy path
  const ok = await post(valid);
  check('valid submission accepted (SMTP missing -> 503)', ok.status === 503, `status=${ok.status} ${JSON.stringify(ok.data)}`);
  check('503 message does not leak internals', !JSON.stringify(ok.data).match(/smtp|password|env/i), JSON.stringify(ok.data));

  // validation
  const bad1 = await post({ ...valid, email: 'not-an-email' });
  check('rejects invalid email', bad1.status === 400, `status=${bad1.status}`);

  const bad2 = await post({ ...valid, message: 'short' });
  check('rejects too-short message', bad2.status === 400, `status=${bad2.status}`);

  const bad3 = await post({ ...valid, name: 'a' });
  check('rejects too-short name', bad3.status === 400, `status=${bad3.status}`);

  const bad4 = await post({ ...valid, message: 'x'.repeat(6000) });
  check('rejects over-long message', bad4.status === 400, `status=${bad4.status}`);

  const bad5 = await post({ email: 'a@b.co', subject: 'hi', message: 'this is long enough' });
  check('rejects missing name', bad5.status === 400, `status=${bad5.status}`);

  // honeypot: should look like success
  const honeypot = await post({ ...valid, website: 'http://spam.example' });
  check('honeypot returns fake success', honeypot.status === 200 && honeypot.data.ok === true, JSON.stringify(honeypot.data));

  // CORS
  const disallowed = await post(valid, { Origin: 'https://evil.example' });
  check('blocks disallowed origin', disallowed.status === 403, `status=${disallowed.status}`);

  const allowed = await post(valid, { Origin: 'http://localhost:5174' });
  check('allows configured origin', allowed.status !== 403, `status=${allowed.status}`);

  // body size cap
  const big = await post({ ...valid, message: 'y'.repeat(20000) });
  check('rejects oversized body (16kb cap)', big.status === 413 || big.status === 400, `status=${big.status}`);

  // rate limit (limit is 5, but honeypot short-circuits before... no, rateLimit runs first)
  const results = [];
  for (let i = 0; i < 8; i++) results.push((await post(valid)).status);
  check('rate limit kicks in', results.includes(429), JSON.stringify(results));

  // after limit, honeypot still gated by limit (rateLimit is first middleware)
  const hpAfter = await post({ ...valid, website: 'x' });
  check('rate limit applies to honeypot path too', hpAfter.status === 429, `status=${hpAfter.status}`);

  console.log('\n==== ' + (pass ? 'ALL CHECKS PASSED' : 'FAILURES PRESENT') + ' ====');
})();
