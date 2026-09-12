module.exports = {
  tags: ["chapter"],
  eleventyComputed: {
    layout: (data) =>
      ["live", "validated"].includes(data.status) ? "chapter.njk" : "pending-chapter.njk",
    permalink: (data) => {
      const slug = data.slug || data.page.fileSlug;
      if (["live", "validated"].includes(data.status)) return `/${slug}/index.html`;
      return false;
    },
    robots: (data) =>
      ["live", "validated"].includes(data.status) ? "index,follow" : "noindex",
  },
};
