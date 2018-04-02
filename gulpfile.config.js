module.exports = {
  dev: {
    css: [
      './assets/css/style.css',
      './assets/css/bootstrap.css',
      './node_modules/angular-ui-bootstrap/dist/ui-bootstrap-csp.css'
    ],
    js: [

      './assets/*.js',
      './node_modules/angular/angular.js',
      './node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js',
      './node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
      './node_modules/@uirouter/angularjs/release/angular-ui-router.js',
      './assets/js/*.js',
      './app.module.js',
      './app.route.js',
      './app.config.js',
      './app.controller.js',
      './view/**/*.js'

    ]
  }
}