'use strict';

const browsers = [
  'ie 11',
  'last 2 edge versions',
  'last 2 Chrome versions',
  'last 2 Firefox versions',
  'last 2 Safari versions'
];

const isCI = !!process.env.CI;
const isProduction = process.env.EMBER_ENV === 'production';

if (isCI || isProduction) {
  browsers.push('ie 11');
}

module.exports = {
  browsers
};
