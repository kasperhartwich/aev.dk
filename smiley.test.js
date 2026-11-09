const assert = require('assert');
const { smileyFor } = require('./smiley.js');
const cases = {
  'xn--j-4ga.dk': 'smiley-oej.png',
  'xn--d-1fa.dk': 'smiley-aad.png',
  'xn--v-3fa.dk': 'smiley-aev.png',
  'localhost': 'smiley-whoops.png',
  'kasperhartwich.github.io': 'smiley-whoops.png',
  'constructor': 'smiley-whoops.png',
};
for (const [h, f] of Object.entries(cases)) assert.strictEqual(smileyFor(h), f, h);
console.log('ok');
