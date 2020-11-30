const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('src/resources/js/app.js', 'public/js')
    .styles([
        'src/resources/css/style.css',
        'src/resources/css/font-awesome-free.css',
        'src/resources/css/custom.css',
    ], 'public/css/all.css');
