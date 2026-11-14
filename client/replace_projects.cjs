const fs = require('fs');
let content = fs.readFileSync('src/pages/Home.jsx', 'utf8');

if (!content.includes('import Projects')) {
  content = content.replace(
    /import \{ Link \} from 'react-router-dom';/,
    "import { Link } from 'react-router-dom';\nimport Projects from '../components/Projects';"
  );
}

const regex = /<section id="projects"[\s\S]*?<\/section>/;
content = content.replace(regex, '<Projects />');

fs.writeFileSync('src/pages/Home.jsx', content);
console.log('Replaced Projects Section');
