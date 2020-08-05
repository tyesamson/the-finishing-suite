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

  // Layout aliases
  eleventyConfig.addLayoutAlias('default', 'layouts/default.njk');

  // Static assets
  eleventyConfig.addPassthroughCopy('site/favicon*.*')

  // Watch CSS
  // eleventyConfig.addWatchTarget('./dist/css/');

  return {
    templateFormats: ['md', 'njk'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'site',
      output: 'dist',
      includes: 'includes',
      data: 'globals'
    }
  };

}
