import puppeteer from 'puppeteer';
import fs from 'fs';

const pages = [
  { key: 'commercial', url: 'https://www.mac-mep.ae/projects' },
  { key: 'villas', url: 'https://www.mac-mep.ae/copy-of-fitout-division' },
  { key: 'fitout', url: 'https://www.mac-mep.ae/copy-of-projects' }
];

(async () => {
  const browser = await puppeteer.launch();
  const allProjects = { commercial: [], villas: [], fitout: [] };

  for (const pageInfo of pages) {
    const page = await browser.newPage();
    await page.goto(pageInfo.url, { waitUntil: 'networkidle0' });
    
    await page.evaluate(async () => {
      await new Promise((resolve) => {
        let totalHeight = 0;
        const timer = setInterval(() => {
          window.scrollBy(0, 200);
          totalHeight += 200;
          if (totalHeight >= document.body.scrollHeight) {
            clearInterval(timer);
            resolve();
          }
        }, 100);
      });
    });

    const images = await page.evaluate(() => {
      const results = [];
      document.querySelectorAll('wix-image img, img').forEach(img => {
        let src = img.src || img.getAttribute('data-src');
        let alt = img.alt || '';
        let parent = img.closest('[data-mesh-id], [data-testid="richTextElement"]')?.parentElement || img.parentElement;
        let text = parent ? parent.innerText : '';
        if (src && src.includes('wixstatic') && !src.includes('logo')) {
          let cleanedText = text.substring(0, 100).replace(/\n/g, ' ').trim();
          if (cleanedText && !results.some(r => r.src === src)) {
            results.push({ src, alt, text: cleanedText });
          }
        }
      });
      return results;
    });
    
    allProjects[pageInfo.key] = images;
    await page.close();
  }

  fs.writeFileSync('C:/Users/USER/.gemini/antigravity/brain/5737007e-8e8b-4838-94a8-79f2d8790f13/scratch/all_projects.json', JSON.stringify(allProjects, null, 2));
  await browser.close();
})();
