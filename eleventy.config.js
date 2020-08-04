const htmlmin = require("html-minifier");

module.exports = eleventyConfig => {

  // Ignore gitignore so watching the CSS works
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.setBrowserSyncConfig({
    notify: true,
    watch: true
  });

  // Minify our HTML
  eleventyConfig.addTransform('htmlmin', (content, outputPath) => {
    if (outputPath.endsWith('html')) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }
  });

  // Watch CSS
  eleventyConfig.addWatchTarget('./dist/css/');

  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  };

}
