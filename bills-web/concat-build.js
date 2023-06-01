var concat = require('concat');
const es5 = ['./dist/bills-web/runtime-es5.js','./dist/bills-web/polyfills-es5.js','./dist/bills-web/main-es5.js'];
const es2015= ['./dist/bills-web/runtime-es2015.js','./dist/bills-web/polyfills-es2015.js','./dist/bills-web/main-es2015.js'];
concat(es5, './dist/bills-web/elements-es5.js');
concat(es2015, './dist/bills-web/elements-es2015.js');