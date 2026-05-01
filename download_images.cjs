const fs = require('fs');
const path = require('path');
const https = require('https');

const dataPath = path.join(__dirname, 'src', 'data', 'defaultContent.json');
const content = require(dataPath);

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(fs.createWriteStream(filepath))
           .on('error', reject)
           .once('close', () => resolve(filepath));
      } else {
        res.resume();
        reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));
      }
    }).on('error', reject);
  });
};

async function downloadAll() {
  const projects = content.projects;
  let counter = 1;
  
  for (const category of Object.keys(projects)) {
    for (let i = 0; i < projects[category].length; i++) {
      const proj = projects[category][i];
      if (proj.src && proj.src.startsWith('http')) {
        const ext = proj.src.includes('.png') ? '.png' : (proj.src.includes('.avif') ? '.avif' : '.jpg');
        const filename = `project_${category}_${i + 1}${ext}`;
        const filepath = path.join(__dirname, 'public', 'projects', filename);
        
        console.log(`Downloading ${filename}...`);
        try {
          await downloadImage(proj.src, filepath);
          // Update JSON object
          projects[category][i].src = `projects/${filename}`;
        } catch (e) {
          console.error(`Failed to download ${filename}:`, e.message);
        }
      }
    }
  }
  
  fs.writeFileSync(dataPath, JSON.stringify(content, null, 2));
  console.log('Finished downloading all images and updated defaultContent.json');
}

downloadAll();
