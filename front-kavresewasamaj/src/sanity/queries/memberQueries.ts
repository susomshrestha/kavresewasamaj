export const getAllMembers = `
  *[_type == "member"] {
  _id,
  name,
  position,
  "imageUrl": image.asset->url
}
`;