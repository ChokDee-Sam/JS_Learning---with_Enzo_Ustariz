// -----------------------------------------------------------------
// Création d'un ordre aléatoire pour nos cartes
// -----------------------------------------------------------------

// Localisation des cartes
const cards = document.querySelectorAll(".card");

// Cartes dans un ordre aléatoire
// Pour chaque carte, on va lui générer un chiffre aléatoire entre 1 et 12
// Chaque carte aura donc un chiffre qui déterminera son ordre dans la grid css
function shuffleCards() {
    cards.forEach((card) => {
        const randomPos = Math.trunc(Math.random() * 12);
        card.style.order = randomPos;
    });
}
shuffleCards();

// -----------------------------------------------------------------
// Reactions au click sur chaque carte : affichage de la div + attribut
// -----------------------------------------------------------------

cards.forEach((card) => card.addEventListener("click", flipACard));

// -----------------------------
let lockedCards = false;
let cardsPicked = []; // met chaque carte retournée dans un tableau
// -----------------------------

function flipACard(e) {
    if (lockedCards) return;

    //   Affiche les enfants sur ce qu'on a cliqué (div class ="double-face")
    //   ainsi que son Attribut HTML
    saveCard(e.target.children[0], e.target.getAttribute("data-attr"));
    //   en retirant son addEventListener, la carte restera retournée

    if (cardsPicked.length === 2) result();
}

// -----------------------------

// Comparaison
// grace au tableau

function saveCard(el, value) {
    if (el === cardsPicked[0]?.el) return; // applique le return uniquement si ça existe
    // Si cardsPicked[0] existe, 'cardsPicked[0]?.el'  est identique à 'cardsPicked[0].el'
    // sinon (lorsque cardsPicked[0] est undefined/nul), il renvoie undefined.

    el.classList.add("active"); // on ajoute la classe active sur la carte cliqué
    cardsPicked.push({ el, value }); // on ajoute les elements de la carte cliqué dans notre tableau
    console.log(cardsPicked);
}

// -----------------------------------------------------------------
// vérifie les cartes retournées
// Elles ont les mêmes valeurs ? elles restent retournée
// Elles sont différentes ? Elles retournent à leur état initial
// -----------------------------------------------------------------

function result() {
    saveNumberOftries();

    if (cardsPicked[0].value === cardsPicked[1].value) {
        cardsPicked[0].el.parentElement.removeEventListener("click", flipACard);
        cardsPicked[1].el.parentElement.removeEventListener("click", flipACard);
        cardsPicked = [];
        return;
    }

    lockedCards = true;
    setTimeout(() => {
        cardsPicked[0].el.classList.remove("active");
        cardsPicked[1].el.classList.remove("active");
        cardsPicked = [];
        lockedCards = false;
    }, 1000);
}

const innerCards = [...document.querySelectorAll(".double-face")];
const advice = document.querySelector(".advice");
const score = document.querySelector(".score");

// -----------------------------------------------------------------
// Vérifie et affiche le nombre d'essais
// Affichage du score + fin de partie
// -----------------------------------------------------------------

let numberOfTries = 0;

function saveNumberOftries() {
    numberOfTries++;

    // Vérifie si fin de partie grace à un filter de classes actives sur chaque cards
    // On conservera uniquement les cartes qu'il reste à découvrir (sans classe active)
    const checkForEnd = innerCards.filter(
        (card) => !card.classList.contains("active")
    );
    // console.log(checkForEnd) // pour voir dans la console

    // Si ça arrive à zéro
    if (!checkForEnd.length) {
        advice.textContent = `Bravo ! Appuyez sur "espace" pour relancer une partie.`;
        score.textContent = `Votre score final : ${numberOfTries}`;
        return;
    }
    score.textContent = `Nombre de coups ${numberOfTries}`;
}

// -----------------------------------------------------------------
// Restart - Touche espace
// -----------------------------------------------------------------

window.addEventListener("keydown", handleRestart);

let shuffleLock = false;

function handleRestart(e) {
    e.preventDefault();

    if (e.keyCode === 32) { // correspond à la touche 'espace'
        innerCards.forEach((card) => card.classList.remove("active"));
        advice.textContent = `Tentez de gagner avec le moins d'essais possible.`;
        score.textContent = `Nombre de coups : 0`;
        numberOfTries = 0;
        cards.forEach((card) => card.addEventListener("click", flipACard));

        if (shuffleLock) return;
        shuffleLock = true;

        // Met un delay pour éviter de voir le dessous des cards
        setTimeout(() => {
            shuffleCards();
            shuffleLock = false;
        }, 6000);
    }
}
