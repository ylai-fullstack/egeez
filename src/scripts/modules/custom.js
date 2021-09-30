var form = document.getElementById('my-form');

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById('my-form-status');
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: 'application/json',
    },
  })
    .then((response) => {
      status.innerHTML = 'Thank you! Your submission has been received!';
      status.style.display = 'block';
      status.style.background = 'green';
      form.reset();
    })
    .catch((error) => {
      status.innerHTML =
        'Oops! Something went wrong while submitting the form.';
      status.style.display = 'block';
      status.style.background = 'red';
    });
}
form.addEventListener('submit', handleSubmit);
