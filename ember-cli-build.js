'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    'sassOptions': {
      // This tells ember-cli-sass to avoid generating the sourcemap file (like vendor.css.map)
      sourceMap: false
    },
    'ember-bootstrap': {
      'bootstrapVersion': 4,
      'importBootstrapFont': false,
      'importBootstrapCSS': false
    } //,

    // 'prember': {
    //   baseRoot: 'https://priowealth.com',
    //   urls: [
    //     '/',
    //     '/about',
    //     '/about/our-story',
    //     '/about/how-different',
    //     '/about/your-team',
    //     '/financial-life',
    //     '/financial-life/clarity',
    //     '/investment',
    //     '/investment/management',
    //     '/connections',
    //     '/connections/blog',
    //     '/connections/in-the-news',
    //     '/connections/investment-updates',
    //     '/priority',
    //     '/priority/video',
    //     '/contact',
    //     '/contact/form',
    //     '/disclosure'
    //   ]
    // }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
