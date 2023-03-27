// -----------------------------------------------------
// -----------------------------------------------------

const inputs = document.querySelectorAll("input");

inputs.forEach((element) => {
    element.addEventListener("invalid", handleValidation);
    element.addEventListener("input", handleValidation);
});

// -----------------------------------------------------
// -----------------------------------------------------
// Function permettant de changer le message d'erreur, ou de le retirer
// -----------------------------------------------------
// -----------------------------------------------------

function handleValidation(e) {
    if (e.type === "invalid") {
        e.target.setCustomValidity("Ce champ NE PEUT être vide !!");
    } else if (e.type === "input") {
        e.target.setCustomValidity("");
    }
}

// -----------------------------------------------------
// -----------------------------------------------------
// On va créé un Event Submit au formulaire
// il va : retirer le comportement par défaut,
// créer un objet vide, puis faire une boucle qui remplira cet objet
// Ensuite, on va ajouter une nouvelle paire sur l'expiration de date
// Et enfin, on fera un reset des champs d'entrée du formulaire
// Et on appellera une nouvelle fonction 
// -----------------------------------------------------
// -----------------------------------------------------

const cookieForm = document.querySelector("form");
cookieForm.addEventListener("submit", handleForm);

function handleForm(e) {
    e.preventDefault();
    const newCookie = {};

    inputs.forEach((element) => {
        const nameAttribut = element.getAttribute("name");
        newCookie[nameAttribut] = element.value;
        // newCookie[element.name] = element.value;
    });

    newCookie.expires = new Date(
        new Date().getTime() + 7 * 24 * 60 * 60 * 1000
    );

    cookieForm.reset(); // restaure les valeurs par défaut des éléments de formulaire
    createCookie(newCookie);

    // console.log(newCookie);
}

// -----------------------------------------------------
// -----------------------------------------------------
// On va créer une fonction createCookie qui va checker notre objet newCookie
// il y aura 2 conditions :
// Soit le nom de Cookie existe deja, donc il va modifier un objet
// Soit le nom de Cookie n'existe pas, donc il va créer un objet
// 
// Puis, le Cookie qui a tel nom et telle valeur aura une date d'expiration
// -----------------------------------------------------
// -----------------------------------------------------

function createCookie(NEWCOOKIE) {

    if (doesCookieExist(NEWCOOKIE.name)) {      //vérifie si le nom existe
        createToast({
            name: NEWCOOKIE.name,
            state: "modifié",
            color: "orangered",
        });
    } else {
        createToast({ name: NEWCOOKIE.name, state: "créé", color: "green" });
    }

    // prépare l'expiration du Cookie
    document.cookie = `
    ${encodeURIComponent(NEWCOOKIE.name)} = ${encodeURIComponent(NEWCOOKIE.value)};
    expires=${NEWCOOKIE.expires.toUTCString()}
    `;
}

// -----------------------------------------------------
// -----------------------------------------------------
// On va créer une fonction pour les cookies existants
// On va modifier le contenu, grace au Regex, .split et .map
// ce qui créera un nouveau tableau allégé
// 
// Puis, on fera un boolean qui cherchera certaines infos du cookie créé ou non
// Cette fonction renverra une sorte de reponse concernant la presence du cookie
// -----------------------------------------------------
// -----------------------------------------------------

function doesCookieExist(name) {
    // remplace les espaces par une chaîne de caractère vide
    //  puis .split va créer des elements de tableaux entre chaque point virgule
    const cookies = document.cookie.replace(/\s/g, "").split(";"); 
    console.log(cookies);

    // .map return un nouveau tableau, avec uniquement les premiers elements de tableau[0]
    const onlyCookiesName = cookies.map((element) => element.split("=")[0]);

    // On va boucler pour trouver que le nom de tableau correspond au nom de Cookie
    // Ce qui retournera True ou False  
    const cookiePresence = onlyCookiesName.find(
        (element) => element === encodeURIComponent(name)
    );
    return cookiePresence;
}

// -----------------------------------------------------
// -----------------------------------------------------
// On créé une fonction createToast avec des attributs d'objets
// Ceux-ci permettront de créer un <p>, de le styliser, 
// puis de le remplir et de le placer
// Le tout, avec une disparition après 2.5 secondes
// -----------------------------------------------------
// -----------------------------------------------------

const toastsContainer = document.querySelector(".toasts-container");

// Créer des paramètres à partir des propriétés d'objets que je passe à ma fonction
function createToast({ name, state, color }) {
    const toastInfo = document.createElement("p");
    toastInfo.className = "toast";

    toastInfo.textContent = `Cookie ${name} ${state}`;
    toastInfo.style.background = color;
    toastsContainer.appendChild(toastInfo);

    setTimeout(() => {
        toastInfo.remove();
    }, 2500);
}
