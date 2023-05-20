import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function get(context) {
  const blog = await getCollection("blog");
  return rss({
    title: "匿名",
    description: "匿名 블로그",
    stylesheet: false,
    site: context.site,
    items: blog.sort((d1, d2) => d2.data.pubDate - d1.data.pubDate).map((post) => {
      return {
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        link: `/blog/${post.slug}/`,
      };
    }),
    customData: "<language>ko-kp</language>",
    // canonicalUrl: "https://brutal.elian.codes",
  });
}
