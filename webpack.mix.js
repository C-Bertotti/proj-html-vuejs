// webpack.mix.js
let mix = require('laravel-mix');

mix.sass('src/style.scss', 'dist');

mix.options({ processCssUrls: false });