const form = document.querySelector("#loginForm");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log(event.target.elements.username.value);
  console.log(event.target.elements.select.value);
  console.log(event.target.elements.message.value);
});
