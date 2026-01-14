const checkbox = document.getElementById("cgu");
const button = document.getElementById("submit-btn");

checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
});
