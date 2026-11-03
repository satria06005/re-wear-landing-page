const fs = require('fs');

let sv = fs.readFileSync('c:/Users/testdev/.gemini/antigravity-ide/scratch/re-wear-landing-page/speed-and-schema-audit/schema_validator_view.html', 'utf8');
sv = sv.replace(/"logo": "[^"]+"/, '"logo": "https://re-wear-landing-page.vercel.app/logo.png"');
sv = sv.replace(/"telephone": "[^"]+"/g, '"telephone": "+6281321456789"');
sv = sv.replace(/telephone<\/td><td class="prop-val">[^<]+<\/td>/, 'telephone</td><td class="prop-val">+6281321456789</td>');
sv = sv.replace(/streetAddress: [^<]+<\/div>/, 'streetAddress: Jl. R.E. Martadinata No. 120, Cihapit</div>');
sv = sv.replace(/"streetAddress": "[^"]+"/, '"streetAddress": "Jl. R.E. Martadinata No. 120, Cihapit"');
fs.writeFileSync('c:/Users/testdev/.gemini/antigravity-ide/scratch/re-wear-landing-page/speed-and-schema-audit/schema_validator_view.html', sv, 'utf8');

let gr = fs.readFileSync('c:/Users/testdev/.gemini/antigravity-ide/scratch/re-wear-landing-page/speed-and-schema-audit/google_rich_results_view.html', 'utf8');
gr = gr.replace(/Jl\. [^<]+, ID/, 'Jl. R.E. Martadinata No. 120, Cihapit, Bandung, Jawa Barat 40114, ID');
fs.writeFileSync('c:/Users/testdev/.gemini/antigravity-ide/scratch/re-wear-landing-page/speed-and-schema-audit/google_rich_results_view.html', gr, 'utf8');
console.log('Views updated successfully.');
