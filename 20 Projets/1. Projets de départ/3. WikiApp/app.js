// -----------------------------------------------------
// Le lien de notre recherche API
// -----------------------------------------------------

// API ENDPOINT : `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=20&srsearch=${searchInput}`

// -----------------------------------------------------
// Quelques variables de 'localisation'
// -----------------------------------------------------

const form = document.querySelector("form");
const input = document.querySelector("input");
const errorMsg = document.querySelector(".error-msg");
const resultsDisplay = document.querySelector(".results-display");
const loader = document.querySelector(".loader");

// -----------------------------------------------------
// Le coeur
// -----------------------------------------------------

form.addEventListener("submit", handleSubmit);

// -----------------------------------------------------
// Création de fonction sur l'Event à input
// -----------------------------------------------------

function handleSubmit(e) {
    e.preventDefault();
    // si aucun texte
    if (input.value === "") {
        errorMsg.textContent = "Woops, veuillez remplir le champs de recherche";
        return;
    } else {
        loader.style.display = "flex"; // fait apparaître le loader
        errorMsg.textContent = ""; // efface un potentiel message d'erreur
        resultsDisplay.textContent = ""; // efface les potentiels résultats précédents
        wikiApiCall(input.value); // call l'API avec la value
    }
}
// -----------------------------------------------------
// Création de fonction permettant de contacter l'API
// -----------------------------------------------------

// Permet d'attendre le résultat avant d'exécuter les résultat
async function wikiApiCall(searchInput) {
    try {
        // Attendre le résultat/réponse de la méthode FETCH (qui est elle-même une recherche)
        const response = await fetch(
            // le lien a des 'query parameters' (format json, limit de 20 réponses, etc...)
            // avec notre paramètre de fonction (searchInput)
            `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=20&srsearch=${searchInput}`
        );
        if (!response.ok) {
            // si ok = false
            throw new Error(`${response.status}`); // sort de la fonction, comme un return
        }
        console.log(response); // On y voit le corps de la requête http
        // Analyse la data qu'on nous renvoi, qui contient du .json, et qui nous retourne du JS
        const data = await response.json();
        console.log(data);
        // Et on appelle notre fonction qui va créer nos Cards (nos résultats de recherche)
        createCards(data.query.search);
    } catch (error) {
        errorMsg.textContent = `${error}`;
        stopLoader();
    }
}
// -----------------------------------------------------
// Création de fonction qui génère nos Cards
// -----------------------------------------------------

// On va créer nos Cards (les résultats)
function createCards(data) {
    // Si data ne renvoie rien
    if (!data.length) {
        errorMsg.textContent = "Woops, aucun résultat";
        stopLoader();
        return;
    }
    // Boucle pour chaque element de nos résultats d'API
    // issus de la const Data (data > query > search)
    data.forEach((element) => {
        const url = `http://en.wikipedia.org/?curid=${element.pageid}`;
        console.log(url);
        // On crée une div, on lui donne une Class, et on la remplie
        const card = document.createElement("div");
        card.className = "result-item";
        card.innerHTML = `
        <h3 class="result-title">
            <a href=#{url} target ="_blank"> ${element.title} </a>
        </h3>
        <a href=${url} class="result-link" target="_blank">${url}</a>
        <span class="result-snippet">${element.snippet}</span>
        <br>
        `;
        // Et on la fait apparaître
        resultsDisplay.appendChild(card);
        console.log(data.length);
    });
    stopLoader();
}

// -----------------------------------------------------
// -----------------------------------------------------

function stopLoader() {
    loader.style.display = "none";
}
