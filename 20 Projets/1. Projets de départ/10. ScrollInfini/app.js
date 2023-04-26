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
        newImg.src = img.urls.regular; // on lui donne une source qualité issue de la data
        imagesList.appendChild(newImg); // on le place en enfant d'imageList
    });
}

// ----------------------------------------------------------
// ----------------------------------------------------------

// on va créer un nouvel objet avec le constructeur IntersectionObserver
// quand il entrera en ligne de mire
const observer = new IntersectionObserver(handleIntersect, {
    rootMargin: "100%",
});
console.log(observer);
observer.observe(document.querySelector(".infinite-marker"));

// --------------------------------

function handleIntersect(entries) {
    console.log(entries);
    if (window.scrollY > window.innerHeight && entries[0].isIntersecting) {
        pageIndex++;
        fetchData();
    }
}

// --------------------------------

const input = document.querySelector("#search");
const form = document.querySelector("form");

form.addEventListener("submit", handleSearch);

function handleSearch(e) {
    e.preventDefault();

    imagesList.textContent = "";
    if (!input.value) {
        errorMsg.textContent = "L'objet de la recherche de peut être vide.";
        return;
    }

    errorMsg.textContent = "";
    searchQuery = input.value;
    pageIndex = 1;
    fetchData();
}

const scrollToTop = document.querySelector(".scroll-to-top");

scrollToTop.addEventListener("click", pushToTop);

function pushToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}
