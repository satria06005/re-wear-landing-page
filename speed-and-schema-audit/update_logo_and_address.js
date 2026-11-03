const fs = require('fs');

function update(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Logo
    content = content.replace(
        '"logo": "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80"',
        '"logo": "https://re-wear-landing-page.vercel.app/logo.png"'
    );

    // Street address
    content = content.replace(
        '"streetAddress": "Jl. LLRE Martadinata (Jl. Riau) No. 120, Cihapit"',
        '"streetAddress": "Jl. R.E. Martadinata No. 120, Cihapit"'
    );

    // Telephone
    content = content.replace(
        '"telephone": "+6282123456789"',
        '"telephone": "+6281321456789"'
    );
    content = content.replace(
        '"telephone": "+6281234567890"',
        '"telephone": "+6281321456789"'
    );

    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Successfully updated logo and address in:', filePath);
}

update('c:/Users/testdev/.gemini/antigravity-ide/scratch/re-wear-landing-page/index.html');
update('c:/Users/testdev/Downloads/re_wear_landing_page.html');
