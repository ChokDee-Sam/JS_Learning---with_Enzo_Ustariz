// --------------------------------------
// --------------------------------------
// ----- LES DIFFÉRENTES SÉLECTIONS -----
// --------------------------------------
// --------------------------------------

const premierTitre = document.getElementsByClassName("premier-titre");
const premierID = document.getElementById("premier-id");
const titreNu = document.querySelector("h3");
const allItems = document.querySelectorAll(".item-list");
const liste = document.querySelector("ul");
const i2 = document.querySelector(".i2");

console.log(premierTitre);
console.log(premierID);
console.log(titreNu);
console.log(allItems);

// --------------------------------------
// --------------------------------------
// --- COMPRENDRE LES PARENTS ENFANTS ---
// --------------------------------------
// --------------------------------------

console.log(liste);

console.log(liste.firstElementChild);
console.log(liste.lastElementChild);

console.log(liste.children);
console.log(liste.childNodes); //affiche tous les éléments (noeuds)

console.log(liste.parentElement); // plus utile que parentNode
console.log(liste.parentNode);

console.log(i2.nextSibling); // Element frere/soeur noeuds
console.log(i2.nextElementSibling); // Prochain Element frere/soeur (utile)
console.log(i2.previousElementSibling); // Précédent ;

// --------------------------------------
// --------------------------------------
// ---- STYLISER LES ÉlÉMENTS DU DOM ----
// --------------------------------------
// --------------------------------------

// le style JS l'emporte sur le style CSS

const grosTitre = document.querySelector('.premier-titre')
console.log(grosTitre);

grosTitre.style.color = 'blue'

// --------------------------------------
// --------------------------------------
// ---- CRÉER ET INSÉRER DES ÉLÉMENTS ----
// --------------------------------------
// --------------------------------------

grosTitre.innerText = 'innerText'

const parent = document.querySelector('.parent')
console.log(parent);

parent.innerHTML = '<p>innerHTML</p>'
parent.innerHTML += '<h1>h1</h1>'   // += permet d'ajouter sans effacer le text précédent

let nouvelElement = document.createElement('li') // crée un nouvel élément (à usage unique)
nouvelElement.innerText = 'Nouvel item !'       // ajoute du texte à ce nouvel élément
liste.appendChild(nouvelElement)                // le place en rajout de nouvel enfant

// --------------------------------------
// --------------------------------------
// -------- SUPPRIMER UN ÉLÉMENT --------
// --------------------------------------
// --------------------------------------

console.log(liste.children);    // On check le tableau contenant les enfants de cette liste
liste.children[1].remove()      


// --------------------------------------
// --------------------------------------
// -------- REMPLACE UN ÉLÉMENT --------
// --------------------------------------
// --------------------------------------

// liste.children[0].replaceWith(nouvelElement)