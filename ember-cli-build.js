'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // 'gzip': {
    //   extensions: ['js', 'css', 'svg'],
    //   appendSuffix: false
    // },
    'autoprefixer': {
      browsers: ['last 2 major version'],
      cascade: false
    },
    'ember-bootstrap': {
      'bootstrapVersion': 4,
      'importBootstrapFont': false,
      'importBootstrapCSS': false
    },
    'prember': {
      // baseRoot: 'http://prio.surge.sh',
      urls: [
        '/',
        '/about',
        '/about/our-story',
        '/about/how-different',
        '/about/your-team',
        '/financial-life',
        '/financial-life/clarity',
        '/investment',
        '/investment/management',
        '/news',
        '/news/trending',
        '/news/archive',
        '/priority',
        '/contact'
      ]
    }
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
