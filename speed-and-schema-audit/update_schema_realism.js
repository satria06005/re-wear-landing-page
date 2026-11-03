const fs = require('fs');

function updateFiles(file) {
    let content = fs.readFileSync(file, 'utf8');

    // Update phone & address
    content = content.replace(
        '"telephone": "+6281234567890"',
        '"telephone": "+6282123456789"'
    );
    content = content.replace(
        '"streetAddress": "Jl. Riau No. 120"',
        '"streetAddress": "Jl. LLRE Martadinata (Jl. Riau) No. 120, Cihapit"'
    );
    content = content.replace(
        '"postalCode": "40115"',
        '"postalCode": "40114"'
    );

    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated realistic details in:', file);
}

updateFiles('c:/Users/testdev/.gemini/antigravity-ide/scratch/re-wear-landing-page/index.html');
updateFiles('c:/Users/testdev/Downloads/re_wear_landing_page.html');

