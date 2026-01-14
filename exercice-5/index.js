const champTexte = document.getElementById("champTexte");
const couleur = document.getElementById("couleur");
const resultat = document.getElementById("resultat");

champTexte.addEventListener("input", function () {
  resultat.textContent = champTexte.value;
});

couleur.addEventListener("input", function () {
  resultat.style.backgroundColor = couleur.value;
});
