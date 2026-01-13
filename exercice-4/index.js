let content1 = document.getElementById("tab-1-content");
let content2 = document.getElementById("tab-2-content");
let content3 = document.getElementById("tab-3-content");

let buttonTab1 = document.getElementById("tab-1");
buttonTab1.addEventListener("click", () => {
  content1.style.display = "block";
  content2.style.display = "none";
  content3.style.display = "none";
});

let buttonTab2 = document.getElementById("tab-2");
buttonTab2.addEventListener("click", () => {
  content1.style.display = "none";
  content2.style.display = "block";
  content3.style.display = "none";
});

let buttonTab3 = document.getElementById("tab-3");
buttonTab3.addEventListener("click", () => {
  content1.style.display = "none";
  content2.style.display = "none";
  content3.style.display = "block";
});
