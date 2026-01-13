const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(event.target.elements.username.value);
  console.log(event.target.elements.password.value);
  event.target.submit();
});
