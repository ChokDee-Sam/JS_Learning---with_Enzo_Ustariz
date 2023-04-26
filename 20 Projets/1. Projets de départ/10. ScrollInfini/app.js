// ----------------------------------------------------------
const imagesList = document.querySelector(".images-list");
const errorMsg = document.querySelector(".error-msg");
// ----------------------------------------------------------

let searchQuery = "cat";
let pageIndex = 1;

// ----------------------------------------------------------
// Création de fonction du Fetch
// ----------------------------------------------------------

async function fetchData() {
    try {
        // la const reponse contiendra tout le fetch
        const response = await fetch(
            `https://api.unsplash.com/search/photos?page=${pageIndex}&per_page=30&query=${searchQuery}&client_id=1RLB3rNc0zfoe34Wll8Ql-nUlvEa2jBC4D1Eoapecb0`
        );

        // Si réponse.ok est absent du fetch, on affiche le status de l'erreur
        if (!response.ok) {
            throw new Error(`Erreur: ${response.status}`);
        }

        // const data contiendra la const response au format json
        const data = await response.json();

        // Si pas de resultat dans total, on affiche un message d'erreur
        if (!data.total) {
            imagesList.textContent = "";
            throw new Error(
                "Oh, rien de tel dans notre base de données ... tentez un mot clé plus précis !"
            );
        }

        console.log(data); // pour vérifier dans la console
        createImages(data.results); // on call la fonction qui affichera nos images

        // si aucun fetch
    } catch (error) {
        errorMsg.textContent = `${error}`;
    }
}
fetchData();

// ----------------------------------------------------------
// Affichage des images
// ----------------------------------------------------------

function createImages(data) {
    // Pour chaque element de la data (qui est un fetch json)
    data.forEach((img) => {
        const newImg = document.createElement("img"); //on crée un element img
        newImg.src = img.urls.regular; // on lui donne une source issue de la data
        imagesList.appendChild(newImg); // on le place en enfant d'imageList
    });
}
