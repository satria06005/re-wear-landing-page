const fs = require('fs');

function optimizeHtml(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // 1. Head Preconnect, Preload, and Schema Org/Product
    const headOld = `    <!-- Schema.org JSON-LD Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "ClothingStore",
      "name": "RE—WEAR",
      "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&amp;fit=crop&amp;w=1200&amp;q=80",
      "description": "Toko kurasi pakaian vintage dan pre-loved pilihan. Dicuci bersih dengan uap panas 120°C, diukur manual sentimeter demi sentimeter, dan dijamin 100% original.",
      "url": "https://re-wear-landing-page.vercel.app/",
      "telephone": "+6281234567890",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bandung",
        "addressCountry": "ID"
      }
    }
    </script>

    <!-- Google Fonts: Plus Jakarta Sans (Sangat mudah dibaca oleh semua usia, aperture terbuka, kontras tajam) -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">

    <!-- Phosphor Icons -->
    <script src="https://unpkg.com/@phosphor-icons/web"></script>`;

    const headNew = `    <!-- Preconnect & DNS-Prefetch for Speed Optimization -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://images.unsplash.com" crossorigin>
    <link rel="dns-prefetch" href="https://images.unsplash.com">
    <link rel="preconnect" href="https://unpkg.com" crossorigin>
    <link rel="dns-prefetch" href="https://unpkg.com">

    <!-- Preload Critical Hero Image (LCP Speed Optimization - WebP) -->
    <link rel="preload" as="image" href="https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&amp;fit=crop&amp;w=800&amp;q=75&amp;fm=webp" fetchpriority="high">

    <!-- Schema.org JSON-LD Structured Data: Organization -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://re-wear-landing-page.vercel.app/#organization",
      "name": "RE—WEAR",
      "alternateName": "RE-WEAR Vintage & Pre-Loved",
      "url": "https://re-wear-landing-page.vercel.app/",
      "logo": "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80",
      "description": "Platform kurasi pakaian vintage dan pre-loved pilihan berkualitas tinggi di Bandung. Dicuci bersih uap panas 120°C dan bergaransi originalitas.",
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

    <!-- Schema.org JSON-LD Structured Data: Product -->
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

    <!-- Google Fonts: Plus Jakarta Sans -->
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">

    <!-- Phosphor Icons (Deferred for Speed Optimization) -->
    <script src="https://unpkg.com/@phosphor-icons/web" defer></script>`;

    // Normalize newlines for replacement
    const norm = (s) => s.replace(/\r\n/g, '\n');
    content = norm(content).replace(norm(headOld), norm(headNew));

    // 2. Hero Feature Image
    const heroOld = `<img id="hero-feature-img" \n                             src="https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1200&q=80" \n                             alt="Jaket Kanvas Tebal Carhartt Detroit" \n                             class="img-reveal-target w-full h-full object-cover">`;
    const heroNew = `<img id="hero-feature-img" \n                             src="https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=75&fm=webp" \n                             alt="Jaket Kanvas Tebal Carhartt Detroit" \n                             width="800" height="600"\n                             fetchpriority="high"\n                             decoding="async"\n                             class="img-reveal-target w-full h-full object-cover">`;
    content = content.replace(norm(heroOld), norm(heroNew));

    // 3. Hero Angle Buttons data-img
    content = content.replace(
        'data-img="https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1200&q=80"',
        'data-img="https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=75&fm=webp"'
    );
    content = content.replace(
        'data-img="https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=1200&q=80"',
        'data-img="https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=800&q=75&fm=webp"'
    );
    content = content.replace(
        'data-img="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=80"',
        'data-img="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=75&fm=webp"'
    );

    // 4. Catalog Products (1-6)
    const catalogImages = [
        {
            oldSrc: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1000&q=80',
            newSrc: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=75&fm=webp',
            alt: 'Jaket Carhartt Detroit Hijau Lumut'
        },
        {
            oldSrc: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=1000&q=80',
            newSrc: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=600&q=75&fm=webp',
            alt: 'Jaket Bomber Issey Miyake Hijau Zaitun'
        },
        {
            oldSrc: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1000&q=80',
            newSrc: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=75&fm=webp',
            alt: 'Jaket Bulu Hangat Patagonia Retro-X'
        },
        {
            oldSrc: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=1000&q=80',
            newSrc: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=600&q=75&fm=webp',
            alt: 'Jaket Jeans Levi\'s Asli Biru Klasik'
        },
        {
            oldSrc: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1000&q=80',
            newSrc: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=75&fm=webp',
            alt: 'Mantel Panjang Bahan Wol Hangat'
        },
        {
            oldSrc: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80',
            newSrc: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=75&fm=webp',
            alt: 'Jaket Kulit Asli Schott Tebal & Lembut'
        }
    ];

    for (const item of catalogImages) {
        const oldPattern = `<img src="${item.oldSrc}" \n                             alt="${item.alt}" \n                             loading="lazy"\n                             class="img-reveal-target w-full h-full object-cover">`;
        const newPattern = `<img src="${item.newSrc}" \n                             alt="${item.alt}" \n                             width="600" height="450"\n                             loading="lazy" decoding="async"\n                             class="img-reveal-target w-full h-full object-cover">`;
        content = content.replace(norm(oldPattern), norm(newPattern));
    }

    // 5. Studio & Farhan Avatar
    const studioOld = `<img src="https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1000&q=80" \n                         alt="Suasana Studio RE-WEAR di Cipete Jakarta Selatan" \n                         loading="lazy"\n                         class="img-reveal-target w-full h-full object-cover">`;
    const studioNew = `<img src="https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=75&fm=webp" \n                         alt="Suasana Studio RE-WEAR di Cipete Jakarta Selatan" \n                         width="800" height="1000"\n                         loading="lazy" decoding="async"\n                         class="img-reveal-target w-full h-full object-cover">`;
    content = content.replace(norm(studioOld), norm(studioNew));

    const avatarOld = `<img src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=200&q=80" alt="Farhan - Kurator Pakaian" class="w-full h-full object-cover">`;
    const avatarNew = `<img src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=120&q=75&fm=webp" alt="Farhan - Kurator Pakaian" width="48" height="48" loading="lazy" decoding="async" class="w-full h-full object-cover">`;
    content = content.replace(norm(avatarOld), norm(avatarNew));

    // 6. Macro Modal Img
    const modalOld = `<img id="macro-modal-img" \n                             src="https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1200&q=80" \n                             alt="Detail Bahan Pakaian" \n                             class="w-full h-full object-cover">`;
    const modalNew = `<img id="macro-modal-img" \n                             src="https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=75&fm=webp" \n                             alt="Detail Bahan Pakaian" \n                             width="900" height="675"\n                             loading="lazy" decoding="async"\n                             class="w-full h-full object-cover">`;
    content = content.replace(norm(modalOld), norm(modalNew));

    // 7. macroGarments data URLs
    content = content.split('&fit=crop&w=1200&q=80').join('&fit=crop&w=900&q=75&fm=webp');

    // Restore CRLF
    content = content.replace(/\n/g, '\r\n');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Successfully optimized:', filePath);
}

optimizeHtml('c:/Users/testdev/.gemini/antigravity-ide/scratch/re-wear-landing-page/index.html');
optimizeHtml('c:/Users/testdev/Downloads/re_wear_landing_page.html');
