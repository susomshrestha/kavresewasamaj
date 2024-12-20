export const getPageById = `*[_id == $id] {
  _id,
  content
}[0]`;

export const getPage = `*[_type == "page"] {
  _id,
  content
}`;
