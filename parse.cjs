const fs = require('fs');
const html = fs.readFileSync('site.html', 'utf-8');
const text = html.replace(/<[^>]*>?/gm, '');
console.log(text.slice(0, 1000));
