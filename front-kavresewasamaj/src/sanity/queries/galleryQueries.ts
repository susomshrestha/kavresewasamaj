export const getGalleryImages = `
  *[_type == "gallery"] {
  _id,
  alt,
  "imageUrl": image.asset->url
}
`;
