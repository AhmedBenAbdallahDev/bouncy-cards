const https = require('https');
https.get('https://spencergabor.work/', res => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => require('fs').writeFileSync('site.html', data));
});
