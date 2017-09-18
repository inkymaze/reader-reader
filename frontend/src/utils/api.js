
export function fetchPosts () {
  return fetch("http://localhost:3001/posts", { headers: { 'Authorization': 'inkymaze' }})
    .then((res) => res.json())
    .then((data) => data);

}
