// --------------------------------------
// --------------------------------------
// --------------- FETCH -----------------
// --------------------------------------
// --------------------------------------

// C'est une promesse qui se fait toute seule

// console.log(fetch("https://jsonplaceholder.typicode.com/posts"));

// D'abord, appel de l'API
//  return une promesse qui se résout toute seule

// --------------------------------------------
//  Exemple 1

// fetch("https://jsonplaceholder.typicode.com/posts")

// affiche dans la console
// .then(reponse => console.log(reponse))
// --------------------------------------------
//  Exemple 2

// fetch("https://jsonplaceholder.typicode.com/posts")

// Une réponse
// .then((reponse) => reponse.json())

// Et une autre, on affiche
// .then((data) => console.log(data));
// --------------------------------------------
//  Exemple 3

const xhr = new XMLHttpRequest();
const liste = document.querySelector(".liste");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((reponse) => reponse.json())
        .then((data) => {
            for (let i = 0; i < data.length; i++) {
                // à chaque tour de boucle, on crée : Li + h2 + p
                let newLi = document.createElement("li");
                let newTitreCarte = document.createElement("h2");
                let newBodyCarte = document.createElement("p");

                // Dans le H2, on ajoute l'élément 'title' de la DataBase
                newTitreCarte.innerText = data[i].title;
                // Dans le P, on ajoute l'élément 'body' de la DataBase
                newBodyCarte.innerText = data[i].body;

                // Dans notre ul.liste, on aura notre nouvelle liste
                liste.appendChild(newLi);
                // Et chaque nouvelle liste aura h2 et p
                //  avec un contenu provenant de la DataBase
                newLi.appendChild(newTitreCarte);
                newLi.appendChild(newBodyCarte);
            }
        });
});
