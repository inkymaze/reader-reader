
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

export function updatePost(values, cb) {
  return fetch(`http://localhost:3001/posts/${values.id}`,
    { headers: { 'Authorization': 'inkymaze'},
      method: 'PUT'
    })
    .then((res) => res.json())
    .then(() => cb());
}

export function createPost(values, cb) {

  return fetch('http://localhost:3001/posts/',
    { headers: { 'Authorization': 'inkymaze'},
      method: 'POST'
    })
    .then((res) => res.json())
    .then(() => cb());
}
