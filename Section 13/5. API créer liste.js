// --------------------------------------
// --------------------------------------
// ----------- CRÉER UNE LISTE ----------
// --------- À PARTIR DES DONNÉES -------
// --------------------------------------
// --------------------------------------

const xhr = new XMLHttpRequest();
const liste = document.querySelector(".liste");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

    xhr.responseType = "json";

    xhr.onload = function () {
        console.log(xhr.response);

        for (let i = 0; i < xhr.response.length; i++) {
            // à chaque tour de boucle, on crée : Li + h2 + p
            let newLi = document.createElement("li");
            let newTitreCarte = document.createElement("h2");
            let newBodyCarte = document.createElement("p");

            // Dans le H2, on ajoute l'élément 'title' de la DataBase
            newTitreCarte.innerText = xhr.response[i].title;
            // Dans le P, on ajoute l'élément 'body' de la DataBase
            newBodyCarte.innerText = xhr.response[i].body;

            // Dans notre ul.liste, on aura notre nouvelle liste
            liste.appendChild(newLi);
            // Et chaque nouvelle liste aura h2 et p
            //  avec un contenu provenant de la DataBase
            newLi.appendChild(newTitreCarte);
            newLi.appendChild(newBodyCarte);
        }
    };

    xhr.send();
});
