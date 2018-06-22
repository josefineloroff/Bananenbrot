export function saveFullState(state) {
  fetch('/state', {
    body: JSON.stringify(state),
    method: 'POST',
    headers: { 'content-type': 'application/json' },
  }).then(res => console.log(res))
}
