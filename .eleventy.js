const isProd = process.env.NODE_ENV === "production";
const pathPrefix = isProd ? "/WEB" : "";

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");

  // Prefix all root-relative URLs with pathPrefix for GitHub Pages project sites
  eleventyConfig.addTransform("prefix-urls", function (content) {
    if (!this.outputPath || !this.outputPath.endsWith(".html")) return content;
    if (!pathPrefix) return content;
    return content.replace(
      /(?<=(?:href|src|action)=")\//g,
      `${pathPrefix}/`
    );
  });

  return {
    pathPrefix,
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
    templateFormats: ["njk", "html"],
  };
};
