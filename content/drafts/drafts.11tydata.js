module.exports = {
  layout: "chapter.njk",
  robots: "noindex",
  eleventyComputed: {
    permalink: (data) => {
      const slug = data.slug || data.page.fileSlug;
      return `/drafts/${slug}/index.html`;
    },
  },
};
