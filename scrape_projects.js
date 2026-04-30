import puppeteer from 'puppeteer';
import fs from 'fs';

const pagesToScrape = [
  { category: 'commercial', url: 'https://www.mac-mep.ae/projects' },
  { category: 'villas', url: 'https://www.mac-mep.ae/copy-of-fitout-division' },
  { category: 'fitout', url: 'https://www.mac-mep.ae/copy-of-projects' }
];

(async () => {
  const browser = await puppeteer.launch();
  const allProjects = {};

  for (const pageInfo of pagesToScrape) {
    const page = await browser.newPage();
    await page.goto(pageInfo.url, { waitUntil: 'networkidle2' });

    // Scroll down to load all lazy images
    await page.evaluate(async () => {
      await new Promise((resolve) => {
        let totalHeight = 0;
        const distance = 100;
        const timer = setInterval(() => {
          const scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;
          if (totalHeight >= scrollHeight - window.innerHeight) {
            clearInterval(timer);
            resolve();
          }
        }, 100);
      });
    });

    // Wix ProGallery structure scraping
    const projects = await page.evaluate(() => {
      const results = [];
      
      // Attempt 1: Wix ProGallery items
      const galleryItems = Array.from(document.querySelectorAll('.gallery-item-container, .pro-gallery-item, [data-hook="item-wrapper"]'));
      
      if (galleryItems.length > 0) {
        for (const item of galleryItems) {
          const img = item.querySelector('img');
          const titleEl = item.querySelector('.gallery-item-title, [data-hook="item-title"]');
          const link = item.querySelector('a') || item.closest('a');
          
          if (img) {
            let src = img.getAttribute('src') || img.getAttribute('data-src') || img.currentSrc;
            let title = titleEl ? titleEl.textContent.trim() : img.getAttribute('alt');
            let href = link ? link.href : null;
            if (src) {
              results.push({ title, src, href });
            }
          }
        }
      } else {
        // Attempt 2: General text + image associations
        const images = Array.from(document.querySelectorAll('wix-image img, .image-container img'));
        for (const img of images) {
            let src = img.getAttribute('src') || img.getAttribute('data-src') || img.currentSrc;
            let title = img.getAttribute('alt'); // Often used for title
            let parentA = img.closest('a');
            let href = parentA ? parentA.href : null;
            if (src) {
                results.push({ title, src, href });
            }
        }
      }
      return results;
    });

    allProjects[pageInfo.category] = projects;
    await page.close();
  }

  console.log('Finished scraping projects.');
  fs.writeFileSync('C:/Users/USER/.gemini/antigravity/brain/5737007e-8e8b-4838-94a8-79f2d8790f13/scratch/projects.json', JSON.stringify(allProjects, null, 2));

  await browser.close();
})();
