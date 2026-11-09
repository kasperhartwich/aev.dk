// Picks the smiley by hostname (punycode for æ, ø, å).
var SMILEYS = {
  'xn--j-4ga.dk': 'smiley-oej.png',
  'xn--d-1fa.dk': 'smiley-aad.png',
  'xn--v-3fa.dk': 'smiley-aev.png'
};

function smileyFor(hostname) {
  return Object.prototype.hasOwnProperty.call(SMILEYS, hostname)
    ? SMILEYS[hostname]
    : 'smiley-whoops.png';
}

if (typeof module !== 'undefined') {
  module.exports = { smileyFor: smileyFor };
}
