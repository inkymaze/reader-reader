
export function fetchPosts () {
  return fetch("http://localhost:3001/posts",
    { headers: { 'Authorization': 'inkymaze' }})
    .then((res) => res.json());
}

export function fetchPost (id) {
  return fetch(`http://localhost:3001/posts/${id}`,
    { headers: { 'Authorization': 'inkymaze' }})
    .then((res) => res.json());
}

export function fetchCategories () {
  return fetch("http://localhost:3001/categories",
    { headers: { 'Authorization': 'inkymaze' }})
    .then((res) => res.json());
}
