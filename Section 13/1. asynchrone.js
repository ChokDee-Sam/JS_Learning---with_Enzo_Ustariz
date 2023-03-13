// --------------------------------------
// --------------------------------------
// ----- SetTimeout et SetInterval -----
// --------------------------------------
// --------------------------------------

// Prend 2 arguments : la fonction à cibler, et le temps

// Création de fonction pour l'exemple
function presentation() {
    console.log("Hey Hey Hey");
}
// --------------------------------------
// SetTimeout : Apparition avec délai, 1 seule fois
// --------------------------------------

// Apparition en appelant la fonction directement (pas dans une variable)
setTimeout(presentation, 4000);

// On met la fonction dans une variable
// et on lui met un délai (setTimeout)
const timeout1 = setTimeout(presentation, 1000);

// // Autre manière d'écrire, en créant directement la fonction en tant qu'argument
setTimeout(function () {
    console.log("Hello World depuis une fonction Classique dans un setTimeout");
}, 2000);

// // Pareil, avec fonction Arrow
setTimeout(() => {
    console.log("Hello World depuis une fonction  Arrow dans un setTimeout");
}, 3000);

// --------------------------------------
// clearTimeout : Annulation de délai
// --------------------------------------

// // Annule la fonction + délai (ligne 9 et 17)
clearTimeout(timeout1);

// Autre manière de l'écrire, sans avoir mis le setTimeout dans une variable
// clearTimeout(setTimeout(presentation, 4000));

// --------------------------------------
// setInterval : Apparition avec délai, plusieurs fois en continu (interval)
// --------------------------------------

let compteur = 0;


let interval = function incr() {
    compteur++;
    console.log(compteur);
}

setInterval(interval(), 1000);

// --------------------------------------
// clearInterval : Annulation
// --------------------------------------

clearInterval(interval);

// Pareil, sans l'avoir inclus dans une variable
// clearInterval(setInterval(interval, 1000));
