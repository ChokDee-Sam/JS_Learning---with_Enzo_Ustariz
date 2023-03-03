// EXERCICE 6 : Les évènements.

const cercle = document.querySelector(".cercle");
const carre = document.querySelector(".carre");

// 1. Changez la couleur du cercle en "crimson" quand votre souris le survole.
cercle.addEventListener("mouseover", function () {
    cercle.style.backgroundColor = "crimson";
});

// 2. Changez la couleur du carré en "violet" quand vous cliquez dessus.
carre.addEventListener("click", function () {
    carre.style.backgroundColor = "purple";
});

// 3. Rajoutez l'event "click" au document, puis loguez la position(x,y) des clics que vous effectuez sur le document.
document.addEventListener("click", function (e) {
    console.log(
        `Voici les coordonnées : ${e.x}, ${e.y}, ${e.clientX}, ${e.clientY}`
    );
});
