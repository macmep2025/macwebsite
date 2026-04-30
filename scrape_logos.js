import puppeteer from 'puppeteer';
import fs from 'fs';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.mac-mep.ae/', { waitUntil: 'networkidle2' });

  // Scroll down to ensure lazy-loaded images load
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

  const clients = await page.evaluate(() => {
    const results = [];
    const anchors = Array.from(document.querySelectorAll('a'));
    
    // Create a Set to ensure uniqueness based on href
    const seenHrefs = new Set();
    
    for (const a of anchors) {
      const href = a.href;
      if (!href || href.includes('mac-mep.ae') || href.includes('wix.com') || href.startsWith('mailto:') || href.startsWith('tel:')) continue;
      if (seenHrefs.has(href)) continue;
      
      const img = a.querySelector('img');
      if (img) {
        let src = img.getAttribute('src') || img.getAttribute('data-src') || img.currentSrc;
        if (src && src.startsWith('https://static.wixstatic.com/media/')) {
          results.push({ href, src });
          seenHrefs.add(href);
        }
      }
    }
    return results;
  });

  console.log('Found logos:', clients.length);
  fs.writeFileSync('C:/Users/USER/.gemini/antigravity/brain/5737007e-8e8b-4838-94a8-79f2d8790f13/scratch/clients.json', JSON.stringify(clients, null, 2));

  await browser.close();
})();
