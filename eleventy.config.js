const htmlmin = require("html-minifier");

module.exports = eleventyConfig => {

  // Ignore gitignore so watching the CSS works
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.setBrowserSyncConfig({
    open: 'local',
    notify: true,
    watch: true
  });

  // Related article filter
  eleventyConfig.addFilter('filterRelated', (collection, relatedTags, exceptSlug) => {
    relatedTags = relatedTags.filter(t => t !== 'help');

    return collection
      .filter(article => article.data.tags.some(t => relatedTags.includes(t)))
      .filter(article => article.data.page.fileSlug !== exceptSlug);
  });

  // Minify our HTML
  eleventyConfig.addTransform('htmlmin', (content, outputPath) => {
    if (!!outputPath && outputPath.endsWith('html')) {
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
  eleventyConfig.addPassthroughCopy('site/images/**/*')

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
