let article = document.querySelector("article");
let span = article.querySelector("span");
let section = article.querySelector("section");

span.addEventListener("click", () => {
  section.classList.toggle("closed");
});
