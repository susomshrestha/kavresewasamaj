export const getAllPosts = `
  *[_type == "post"] {
    _id,
    title,
    slug,
    publishedAt,
    mainImage {
      asset-> {
        _id,
        url
      }
    },
    categories[]-> {
      _id,
      title
    }
  }
`;

export const getPostBySlug = (slug: string) => `
  *[_type == "post" && slug.current == "${slug}"][0] {
    _id,
    title,
    slug,
    body,
    mainImage {
      asset-> {
        _id,
        url
      }
    },
    author-> {
      name,
      image
    }
  }
`;
