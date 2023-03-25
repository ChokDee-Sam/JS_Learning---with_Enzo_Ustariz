// -------------------------------------------------------
"use strict";
// -------------------------------------------------------

// Locations
const form = document.querySelector(".quiz-form");
const radioInputs = document.querySelectorAll('input[type="radio"]');
const questions = document.querySelectorAll(".question-block");
const titre = document.querySelectorAll("h4");
const titleResult = document.querySelector(".results h2");
const markResult = document.querySelector(".mark");
const helpResult = document.querySelector(".help");

// Informations
const emojis = ["✔️", "✨", "👀", "😭", "👎"];
const responses = ["c", "a", "b", "a", "c"]; // Réponses correctes

// -------------------------------------------------------
// La fonction Coeur du projet
// -------------------------------------------------------

// Event sur le Submit bouton, avec un appel de fonction
form.addEventListener("submit", handleSubmit);

// -------------------------------------------------------
// Création de la fonction principale
// -------------------------------------------------------

function handleSubmit(e) {
    // Reset le comportement par défaut d'envoi de formulaire
    e.preventDefault();
    const results = []; // On y ajoutera nos futurs réponses //

    const radioButtons = document.querySelectorAll(
        'input[type="radio"]:checked'
    );

    // Pour chaque radioButton coché :
    radioButtons.forEach((element, index) => {
        // on va le comparer à l'index de la bonne réponse
        // Selon vrai ou faux, on va ajouter nos réponses à un tableau results
        if (element.value === responses[index]) {
            results.push(true);
        } else {
            results.push(false);
        }
    });

    // On peut vérifier le contenu du tableau fraichement rempli
    console.log(radioButtons);
    console.log(results);

    // On appelle nos 2 fonctions
    // qui trient le nombre d'erreurs, et qui affiche des textes en conséquence
    // puis qui rajoute des couleurs
    showResults(results);
    addColors(results);
}

// -------------------------------------------------------
// Création de la fonction ShowResults
// -------------------------------------------------------

function showResults(resultats) {
    // On va filter nos réponses fausses
    let errorsNumber = resultats.filter((element) => element === false);
    console.log(errorsNumber);
    // On va transformer ces éléments en nombre d'éléments
    errorsNumber = errorsNumber.length;
    console.log(errorsNumber);

    //
    switch (errorsNumber) {
        case 0:
            titleResult.textContent = `✔️ Bravo, c'est un sans faute ! ✔️`;
            break;

        case 1:
            titleResult.textContent = `✨ Vous y êtes presque ! ✨`;
            break;

        case 2:
            titleResult.textContent = `✨ Encore un effort ... 👀`;
            break;

        case 3:
            titleResult.textContent = `👀 Il reste quelques erreurs. 😭`;
            break;

        case 4:
            titleResult.textContent = `😭 Peut mieux faire ! 😭`;
            break;

        case 5:
            titleResult.textContent = `👎 Peut mieux faire ! 👎`;
            break;

        default:
            titleResult.textContent = "Wooops, cas inattendu !";
    }
    helpResult.style.display = "block";
    helpResult.textContent = errorsNumber
        ? "Retentez une autre réponse dans les cases rouges, puis re-validez !"
        : "Quelle culture ...";
    markResult.style.display = "block";
    markResult.innerHTML = `Score : <span>${5 - errorsNumber} / 5</span>`;
}

// -------------------------------------------------------
// Création de la fonction addColors
// -------------------------------------------------------

function addColors(resultats) {
    resultats.forEach((elementNonUtilisable, index) => {
        console.log(resultats[index]);
        if (resultats[index]) {
            questions[index].style.backgroundImage =
                "linear-gradient(to right, #a8ff78, #78ffd6)";
        } else {
            questions[index].style.backgroundImage =
                "linear-gradient(to right, #f5567b, #fd674c)";
        }
        console.log(`resultat.index : ${resultats}`);
        console.log(results);
    });
}

// -------------------------------------------------------
// Enfin, la création de la fonction de reset Color
// -------------------------------------------------------

// On fait une boucle forEach pour que tous les radioInput soit pris en compte
radioInputs.forEach((element, index) =>
    // Event à l'input sur chaque element, donc chaque input
    element.addEventListener("input", resetColor)
);

function resetColor(e) {
    // On décompose notre recherche pour mieux comprendre ce qu'on va rechercher

    console.log(e);
    // On va chercher la target
    console.log(e.target);
    // On va prendre uniquement l'attribut 'name'
    console.log(e.target.getAttribute("name"));
    // On retire la première lettre (même si on aurait pu le faire de base en HTML)
    console.log(e.target.getAttribute("name").slice(1));
    // On fait -1 pour avoir une numérotation de tableau
    console.log(e.target.getAttribute("name").slice(1) - 1);

    // On met ça dans une Variable
    const index = e.target.getAttribute("name").slice(1) - 1;

    // On crée une variable qui va définir l'index de notre div 'question-block'
    // C'est à dire elle sur laquelle on a cliqué
    const parentQuestionBlock = questions[index];
    console.log(parentQuestionBlock);

    // En ciblant cette div, on redéfini notre couleur de fond
    parentQuestionBlock.style.backgroundColor = "white";
    parentQuestionBlock.style.backgroundImage = "none";
}
