
export function fetchComments (postID) {
  return fetch(`http://localhost:3001/posts/${postID}/comments`,
    { headers: { 'Authorization': 'inkymaze' }})
    .then((res) => res.json());
}

export function fetchComment (id) {
  return fetch(`http://localhost:3001/posts/${id}`,
    { headers: { 'Authorization': 'inkymaze' }})
    .then((res) => res.json());
}

export function fetchCategories () {
  return fetch("http://localhost:3001/categories",
    { headers: { 'Authorization': 'inkymaze' }})
    .then((res) => res.json());
}

export const updateComment = (comment) =>
  fetch(`http://localhost:3001/posts/${post.id}`,
    { headers: { 'Authorization': 'inkymaze',
        'Accept': 'application/json',
        'Content-Type': 'application/json'},
      method: 'PUT',
      body: JSON.stringify(comment)
    })
    .then((res) => res.json());



export const createComment = (comment) =>
  fetch('http://localhost:3001/posts/', {
   method: 'POST',
   headers: {
     'Accept': 'application/json',
     'Authorization': 'inkymaze',
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(comment)
 })
 .then(res => res.json());

 export const deletePost = (comment) =>
   fetch(`http://localhost:3001/posts/${comment.id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Authorization': 'inkymaze',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(comment)
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