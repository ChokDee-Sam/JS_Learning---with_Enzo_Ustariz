// EXERCICE 3 : Tableaux, Objets, évènements...

// Créez un tableau avec trois valeurs à l'intérieur : 5124, true, et un objet qui contient une propriété.

// Créez un objet avec trois propriétés

// Dans l'HTML, il y a un texte, rentrez cet élement dans une constante,
// puis changez la couleur de son fond au clic en violet(purple/violet);

let monTableau = [5124, true, { un: 1 }];

let monObjet = {
    un: 1,
    deux: 2,
    trois: 3,
};

const titre = document.querySelector("h1");

document.addEventListener("click", function () {
    titre.style.backgroundColor = "purple";
});

console.log(monObjet);
console.log(monTableau);
