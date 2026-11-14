const fs = require('fs');
let html = fs.readFileSync('../portfolio.html', 'utf8');

// Extract body content
const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
if (!bodyMatch) {
  console.error("No body tag found");
  process.exit(1);
}
let body = bodyMatch[1];

// Convert HTML to JSX
body = body.replace(/class=/g, 'className=');
body = body.replace(/for=/g, 'htmlFor=');
body = body.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');

// Close unclosed tags (img, input, br, hr, meta, link)
body = body.replace(/<(img|input|br|hr|meta|link)([^>]*?)(?<!\/)>/gi, '<$1$2 />');

const jsx = `import React from 'react';
import './index.css';

function App() {
  return (
    <div className="portfolio-app">
      ${body}
    </div>
  );
}

export default App;`;

fs.writeFileSync('./src/App.jsx', jsx);
console.log('Successfully converted HTML to JSX');
