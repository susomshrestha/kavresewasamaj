export const getAllPosts = `
  *[_type == "post"] | order(publishedAt desc) [$start...$end] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    "imageUrl": image.asset->url,
    category-> {
      _id,
      title
    },
    body
  }
`;

export const getPostBySlug = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    body,
    publishedAt,
    "imageUrl": image.asset->url,
    category-> {
      _id,
      title
    }
  }
`;

export const getFeaturedPosts = `
  *[_type == "home"][0].featuredBlogs[]->{
    _id,
    title,
    category->{
      _id,
      title,
    },
    "slug": slug.current,
    "imageUrl": image.asset->url
  }
`;
