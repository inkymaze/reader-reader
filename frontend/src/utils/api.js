
export function fetchPosts (posts) {
  return fetch("/posts", { headers: { 'Authorization': 'inkymaze' }})
    .then((res) => res.json());

}
