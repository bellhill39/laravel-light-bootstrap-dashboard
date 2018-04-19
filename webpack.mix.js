let mix = require('laravel-mix');

mix.autoload({
  jquery: ['$', 'jQuery', 'jquery']
});

mix.copy('resources/assets/img/sidebar-*.jpg', 'public/images');
mix.js('resources/assets/js/auth.js', 'public/js')
   .sass('resources/assets/sass/auth.scss', 'public/css');
mix.js('resources/assets/js/light-bootstrap-dashboard.js', 'public/js')
   .sass('resources/assets/sass/light-bootstrap-dashboard.scss', 'public/css');
mix.extract([
  'lodash',
  'chartist',
  'jquery',
  'popper.js',
  'bootstrap',
  'bootstrap-sass',
  'bootstrap-notify',
  'bootstrap-select',
  'bootstrap-switch',
  'flatui-radiocheck',
  'vue',
  'axios'
], 'public/js/vendor.js');
mix.version();
mix.setPublicPath('public');
