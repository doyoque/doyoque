const mix = require('laravel-mix');
const path = require('path');

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
mix.browserSync({
    proxy: `localhost:8000`,
});

mix.js('resources/js/app.js', 'public/js').vue().sourceMaps()
    .postCss('resources/css/app.css', 'public/css', [ require('tailwindcss') ])
    .version();

// if (mix.inProduction()) {
//   mix.version();
// }

mix.alias({
    '@': path.join(__dirname, 'resources/js'),
    '@components': path.join(__dirname, 'resources/js/components'),
    '@pages': path.join(__dirname, 'resources/js/pages'),
    '@stores': path.join(__dirname, 'resources/js/stores'),
    '@services': path.join(__dirname, 'resources/js/services'),
    '@routes': path.join(__dirname, 'resources/js/routes'),
});
