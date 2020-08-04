const mix = require('laravel-mix'),
  tailwindcss = require('tailwindcss');

const paths = {
  sass: {
    src: './resources/sass/main.scss',
    dest: './dist/css/'
  }
};

mix
  // Compile Sass
  .sass(paths.sass.src, paths.sass.dest)
  .options({
    processCssUrls: false,
    postCss: [tailwindcss('tailwind.config.js')]
  });
