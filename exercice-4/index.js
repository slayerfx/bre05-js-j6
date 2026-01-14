const signupForm = document.querySelector("#signup-form");

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const passwordField = event.target.elements.password;
  const confirmPasswordField = event.target.elements.confirm_password;

  const password = passwordField.value;
  const confirmPassword = confirmPasswordField.value;

  if (password !== confirmPassword) {
    passwordField.classList.add("invalid");
    confirmPasswordField.classList.add("invalid");
  } else {
    passwordField.classList.remove("invalid");
    confirmPasswordField.classList.remove("invalid");
  }
});
