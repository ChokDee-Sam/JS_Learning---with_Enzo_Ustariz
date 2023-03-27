// // -----------------------------------------------------
// // -----------------------------------------------------

const inputs = document.querySelectorAll("input");

inputs.forEach((element) => {
    element.addEventListener("invalid", handleValidation);
    element.addEventListener("input", handleValidation);
});

// // -----------------------------------------------------
// // -----------------------------------------------------
// // Function permettant de changer le message d'erreur, ou de le retirer
// // -----------------------------------------------------
// // -----------------------------------------------------

function handleValidation(e) {
    if (e.type === "invalid") {
        e.target.setCustomValidity("Ce champ ne peut être vide.");
    } else if (e.type === "input") {
        e.target.setCustomValidity("");
    }
}

// // -----------------------------------------------------
// // -----------------------------------------------------
// // On va créé un Event Submit au formulaire
// // il va : retirer le comportement par défaut,
// // créer un objet vide, puis faire une boucle qui remplira cet objet
// // Ensuite, on va ajouter une nouvelle paire sur l'expiration de date
// // Enfin, on fera un reset des champs d'entrée du formulaire
// // Et on appellera une nouvelle fonction
// // -----------------------------------------------------
// // -----------------------------------------------------

const cookieForm = document.querySelector("form");
cookieForm.addEventListener("submit", handleForm);

function handleForm(e) {
    e.preventDefault();

    const newCookie = {};

    inputs.forEach((element) => {
        const nameAttribute = element.getAttribute("name");
        newCookie[nameAttribute] = element.value;
        // console.log(newCookie);
    });

    newCookie.expires = new Date(
        new Date().getTime() + 7 * 24 * 60 * 60 * 1000
    );
    cookieForm.reset(); // restaure les valeurs par défaut des éléments de formulaire
        // console.log(newCookie);

    createCookie(newCookie);
}

// // -----------------------------------------------------
// // -----------------------------------------------------
// // On va créer une fonction createCookie qui va checker notre objet newCookie
// // il y aura 2 conditions :
// // Soit le nom de Cookie existe deja, donc il va modifier un objet
// // Soit le nom de Cookie n'existe pas, donc il va créer un objet
// //
// // Puis, le Cookie qui a tel nom et telle valeur aura une date d'expiration
// // -----------------------------------------------------
// // -----------------------------------------------------

function createCookie(NEWCookie) {

    //vérifie si le nom existe
    if (doesCookieExist(NEWCookie.name)) {
        createToast({
            name: NEWCookie.name,
            state: "modifié",
            color: "orangered",
        });
    } else {
        createToast({ name: NEWCookie.name, state: "créé", color: "green" });
    }

    // prépare l'expiration du Cookie
    document.cookie = `${encodeURIComponent(
        NEWCookie.name
    )}=${encodeURIComponent(
        NEWCookie.value
    )};expires=${NEWCookie.expires.toUTCString()}`;

    if (cookiesList.children.length) {
        displayCookies();
    }
}

// // -----------------------------------------------------
// // -----------------------------------------------------
// // On va créer une fonction pour les cookies existants
// // On va modifier le contenu, grace au Regex, .split et .map
// // ce qui créera un nouveau tableau allégé
// //
// // Puis, on fera un .find qui cherchera certaines infos du cookie créé ou non
// // Cette fonction renverra une sorte de reponse concernant la presence du cookie
// // -----------------------------------------------------
// // -----------------------------------------------------

function doesCookieExist(name) {
    // remplace les espaces par une chaîne de caractère vide
    //  puis .split va créer des elements de tableaux entre chaque point virgule
    const cookies = document.cookie.replace(/\s/g, "").split(";");

    // .map return un nouveau tableau, avec uniquement les premiers elements de tableau[0]
    const onlyCookiesName = cookies.map((element) => element.split("=")[0]);

    // On va boucler pour trouver que le nom de tableau correspond au nom de Cookie
    // Ce qui retournera True ou False
    const cookiePresence = onlyCookiesName.find(
        (cookie) => cookie === encodeURIComponent(name)
    );

    return cookiePresence;
}

// // -----------------------------------------------------
// // -----------------------------------------------------
// // On créé une fonction createToast avec des attributs d'objets
// // Ceux-ci permettront de créer un <p>, de le styliser,
// // puis de le remplir et de le placer
// // Le tout, avec une disparition après 2.5 secondes
// // -----------------------------------------------------
// // -----------------------------------------------------

const toastsContainer = document.querySelector(".toasts-container");

// Créer des paramètres à partir des propriétés d'objets que je passe à ma fonction
function createToast({ name, state, color }) {
    const toastInfo = document.createElement("p");
    toastInfo.className = "toast";

    toastInfo.textContent = `Cookie ${name} ${state}.`;
    toastInfo.style.backgroundColor = color;
    toastsContainer.appendChild(toastInfo);

    setTimeout(() => {
        toastInfo.remove();
    }, 2500);
}

// // -----------------------------------------------------
// // -----------------------------------------------------

const cookiesList = document.querySelector(".cookies-list");
const displayCookieBtn = document.querySelector(".display-cookie-btn");
const infoTxt = document.querySelector(".info-txt");

displayCookieBtn.addEventListener("click", displayCookies);

let lock = false;

function displayCookies() {
    if (cookiesList.children.length) cookiesList.textContent = "";
console.log(cookiesList.children.length);
    const cookies = document.cookie.replace(/\s/g, "").split(";").reverse();
    console.log(cookies);

    if (!cookies[0]) {
        if (lock) return;

        lock = true;
        infoTxt.textContent = "Pas de cookies à afficher, créez-en un!";

        setTimeout(() => {
            infoTxt.textContent = "";
            lock = false;
        }, 1500);
        return;
    }

    createElements(cookies);
}

// // -----------------------------------------------------
// // -----------------------------------------------------

function createElements(cookies) {
    cookies.forEach((cookie) => {
        const formatCookie = cookie.split("=");
        const listItem = document.createElement("li");
        const name = decodeURIComponent(formatCookie[0]);
        listItem.innerHTML = `
      <p>
        <span>Nom</span> : ${name}
      </p>
      <p>
        <span>Valeur</span>: ${decodeURIComponent(formatCookie[1])}
      </p>
      <button>X</button>
    `;
        listItem.querySelector("button").addEventListener("click", (e) => {
            createToast({ name: name, state: "supprimé", color: "crimson" });
            document.cookie = `${formatCookie[0]}=; expires=${new Date(0)}`;
            e.target.parentElement.remove();
        });
        cookiesList.appendChild(listItem);
    });
}
