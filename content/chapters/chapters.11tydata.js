module.exports = {
  tags: ["chapter"],
  eleventyComputed: {
    layout: (data) =>
      data.status === "live" ? "chapter.njk" : "pending-chapter.njk",
    permalink: (data) => {
      const slug = data.slug || data.page.fileSlug;
      if (data.status === "live") return `/${slug}/index.html`;
      return false;
    },
    robots: (data) =>
      data.status === "live" ? "index,follow" : "noindex",
  },
};
