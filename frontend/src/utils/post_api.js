
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

export const updatePost = (post) =>
  fetch(`http://localhost:3001/posts/${post.id}`,
    { headers: { 'Authorization': 'inkymaze',
        'Accept': 'application/json',
        'Content-Type': 'application/json'},
      method: 'PUT',
      body: JSON.stringify(post)
    })
    .then((res) => res.json());

export const createPost = (post) =>
  fetch('http://localhost:3001/posts/', {
   method: 'POST',
   headers: {
     'Accept': 'application/json',
     'Authorization': 'inkymaze',
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(post)
 })
 .then(res => res.json());

export const deletePost = (post) =>
 fetch(`http://localhost:3001/posts/${post.id}`, {
  method: 'DELETE',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'inkymaze',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(post)
})
.then(res => res.json());

export const votePost = (id, vote) =>
  fetch(`http://localhost:3001/posts/${id}`, {
   method: 'POST',
   headers: {
     'Accept': 'application/json',
     'Authorization': 'inkymaze',
     'Content-Type': 'application/json'
   },
   body: JSON.stringify({option: vote})
 })
 .then(res => res.json());
