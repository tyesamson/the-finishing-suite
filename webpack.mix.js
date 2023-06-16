const mix = require('laravel-mix'),
  tailwindcss = require('tailwindcss');

require('laravel-mix-purgecss');

const paths = {
  javascript: {
    src: {
      main: './resources/js/main.js',
      arc: './resources/js/arc.js'
    },
    dest: './dist/js/'
  },
  sass: {
    src: './resources/sass/main.scss',
    dest: './dist/css/'
  }
};

mix
  // Config
  .webpackConfig({
    resolve: {
      alias: {
        '@utilities': path.resolve(__dirname, 'resources/js/utilities'),
        '@modules': path.resolve(__dirname, 'resources/js/modules')
      }
    }
  })

  // Javascript
  .js(paths.javascript.src.main, paths.javascript.dest)
  .js(paths.javascript.src.arc, paths.javascript.dest)

  // Sass
  .sass(paths.sass.src, paths.sass.dest)
  .options({
    processCssUrls: false,
    postCss: [tailwindcss('tailwind.config.js')]
  })

  if (mix.inProduction()) {
    mix
      .minify(paths.sass.dest + 'main.css')
      .minify(paths.javascript.dest + 'main.js')
      .minify(paths.javascript.dest + 'arc.js')
  }
