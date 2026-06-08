const fs = require('fs');
const path = require('path');
const jsDir = path.join(__dirname, '../public/assets/js');

const files = [
  'jquery-3.5.1.min.js',
  'bootstrap.bundle.min.js',
  'owl.carousel.min.js',
  'jquery.meanmenu.min.js',
  'jqueryui.js',
  'touchspin.js',
  'isotope.pkgd.min.js',
  'odometer.min.js',
  'uikit.min.js',
  'jquery.appear.js',
  'swiper.min.js',
  'backToTop.js',
  'imagesloaded.pkgd.min.js',
  'jquery.magnific-popup.min.js',
  'main.js'
];

let output = '';
for (const file of files) {
  const filePath = path.join(jsDir, file);
  if (fs.existsSync(filePath)) {
    output += fs.readFileSync(filePath, 'utf8') + '\n;\n';
    console.log(`Bundled: ${file}`);
  } else {
    console.error(`File not found: ${filePath}`);
  }
}

fs.writeFileSync(path.join(jsDir, 'bundle.js'), output);
console.log('Successfully created bundle.js');
