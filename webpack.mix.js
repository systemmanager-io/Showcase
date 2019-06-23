const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/index.js', 'public/js')
    .sass('resources/sass/showcase.scss', 'public/css')
    .sass('resources/sass/app.scss', 'public/css')
    .sass('resources/sass/slick.scss', 'public/css')
    .sass('resources/sass/tailwind.scss', 'public/css').options({
    processCssUrls: false,
    postCss: [tailwindcss('./tailwind.config.js')]
});
if (mix.inProduction()) {
    mix.version();
}
