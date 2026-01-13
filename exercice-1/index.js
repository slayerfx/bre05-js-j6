const loginForm = document.querySelector("#loginForm");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(event.target.elements.username.value);
  console.log(event.target.elements.password.value);
});
