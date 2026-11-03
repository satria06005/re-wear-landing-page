const fs = require('fs');
const https = require('https');
const querystring = require('querystring');

const html = fs.readFileSync('c:/Users/testdev/.gemini/antigravity-ide/scratch/re-wear-landing-page/index.html', 'utf8');
const postData = querystring.stringify({ html });

const req = https.request({
  hostname: 'validator.schema.org',
  port: 443,
  path: '/validate',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(postData)
  }
}, (res) => {
  let body = '';
  res.on('data', c => body += c);
  res.on('end', () => {
    const clean = body.replace(/^\)\]\}'\n/, '');
    const parsed = JSON.parse(clean);
    console.log('Total Errors:', parsed.totalNumErrors);
    console.log('Total Warnings:', parsed.totalNumWarnings);
    console.log('Detected Types:', parsed.tripleGroups.map(g => g.type));
    for (const group of parsed.tripleGroups) {
      console.log(`- ${group.type}: ${group.numErrors} errors, ${group.numWarnings} warnings`);
    }
  });
});
req.write(postData);
req.end();

