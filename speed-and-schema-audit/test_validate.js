const https = require('https');
const querystring = require('querystring');

const schemaHtml = `<!DOCTYPE html>
<html lang="id">
<head>
    <title>Test Schema</title>
    <!-- Schema.org JSON-LD: Organization -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://re-wear-landing-page.vercel.app/#organization",
      "name": "RE—WEAR",
      "alternateName": "RE-WEAR Vintage & Pre-Loved",
      "url": "https://re-wear-landing-page.vercel.app/",
      "logo": "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80",
      "description": "Kurasi pakaian vintage dan pre-loved pilihan berkualitas, higienis uap panas 120°C, dan 100% original.",
      "email": "halo@re-wear.id",
      "telephone": "+6281234567890",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Jl. Riau No. 120",
        "addressLocality": "Bandung",
        "addressRegion": "Jawa Barat",
        "postalCode": "40115",
        "addressCountry": "ID"
      },
      "sameAs": [
        "https://www.instagram.com/rewear.catalog",
        "https://www.tiktok.com/@rewear.id"
      ]
    }
    </script>

    <!-- Schema.org JSON-LD: Product -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "@id": "https://re-wear-landing-page.vercel.app/#product-carhartt-detroit",
      "name": "Jaket Kanvas Tebal Carhartt Detroit Vintage",
      "image": [
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=75&fm=webp",
        "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=800&q=75&fm=webp",
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=75&fm=webp"
      ],
      "description": "Jaket kanvas Carhartt Detroit original kurasi RE—WEAR. Heavyweight cotton duck canvas, zipper YKK original, bersih higienis uap 120°C.",
      "sku": "RW-CRT-001",
      "mpn": "CRT-DET-1998",
      "brand": {
        "@type": "Brand",
        "name": "Carhartt"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://re-wear-landing-page.vercel.app/#katalog",
        "priceCurrency": "IDR",
        "price": "685000",
        "priceValidUntil": "2027-12-31",
        "itemCondition": "https://schema.org/UsedCondition",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "RE—WEAR"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "28"
      }
    }
    </script>
</head>
<body><h1>Test</h1></body>
</html>`;

const postData = querystring.stringify({ html: schemaHtml });

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
  res.on('data', chunk => body += chunk);
  res.on('end', () => {
    const clean = body.replace(/^\)\]\}'\n/, '');
    const parsed = JSON.parse(clean);
    console.log('--- VALIDATION RESULT ---');
    console.log('Total Errors:', parsed.totalNumErrors);
    console.log('Total Warnings:', parsed.totalNumWarnings);
    console.log('Detected Types:', parsed.tripleGroups.map(g => g.type));
    for (const group of parsed.tripleGroups) {
      console.log(`- ${group.type}: ${group.numErrors} errors, ${group.numWarnings} warnings`);
    }
  });
});

req.on('error', (e) => console.error(e));
req.write(postData);
req.end();

