const fs = require('fs');
const path = require('path');
const dist = path.join(__dirname, '..', 'dist');
try {
  if (!fs.existsSync(dist)) {
    console.warn('.nojekyll: dist folder not found.');
    process.exit(0);
  }
  fs.writeFileSync(path.join(dist, '.nojekyll'), '');
  console.log('.nojekyll added to dist');
} catch (e) {
  console.error(e);
}
