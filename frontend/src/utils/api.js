
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
    { headers: { 'Authorization': 'inkymaze',
    'Accept': 'application/json',
'Content-Type': 'application/json'},
      method: 'PUT'
    })
    .then((res) => res.json())
    .then(() => cb());
}

// export function createPost(values, cb) {
//
//   return fetch('http://localhost:3001/posts/',
//     { headers: { 'Authorization': 'inkymaze',
//     'Accept': 'application/json',
//   'Content-Type': 'application/json'
//   },
//       method: 'POST',
//       body: JSON.stringify(post)
//     })
//     .then((res) => res.json())
//     .then(() => cb());
// }




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
