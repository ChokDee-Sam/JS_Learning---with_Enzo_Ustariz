// --------------------------------------
// --------------------------------------
// --- VALEURS PRIMITIVES vs REFERENCE ---
// --------------------------------------
// --------------------------------------

// Valeurs primitives = String, Number, Boolean, Undefined, Null
// Valeurs de références = Objet et Tableau

// Les valeurs Primitives :
// prennent un espace dans la mémoire (CallStack), et deviennent indépendants

// Les valeurs de références :
// pointent tous vers le même endroit, sont liés (inter-dépendants)

// --------------------------------------
// --------------------------------------
// --- DELETE et BRACKET/DOT NOTATION ---
// --------------------------------------
// --------------------------------------

const kitty = {
    race: "Siamois",
    couleur: "gris",
    poids: 1,
    défaut: "voleur",
    0: "never",
    nouvelObjetImbriqué: {
        a: "abc",
        b: "xyz",
        c: 123,
    },
};

// On utilisera idéalement des caractères minuscules pour les propriétés
// On évite les majuscules, guillemets, etc

console.log(kitty.couleur);
console.log(kitty["couleur"]);

// Supprimer un élément d'Objet
delete kitty.défaut;
console.log(kitty);

// Naviguer dans les sous-objets, avec la Dot Notation (apprécié)
console.log(kitty.nouvelObjetImbriqué.a);

// Naviguer dans les sous-objets, avec la Bracket Notation (déprécié)
console.log(kitty["nouvelObjetImbriqué"]["a"]);

// --------------------------------------
// --------------------------------------
// ---- LES TABLEAUX SONT DES OBJETS ----
// --------------------------------------
// --------------------------------------

const tableau = ["a", "b", "c"];
console.log(tableau);
console.log(typeof tableau);

console.log(kitty.length); // Objet = .length impossible
console.log(tableau.length); // Tableau = .length possible

// Les Tableaux sont des objets avec des propriétés implicites
console.log(kitty[0]); // on a défini manuellement la propriété [0]
console.log(tableau[0]); // le [0] est implicite

// console.log(tableau.1);  // erreur
console.log(tableau[1]); // les tableaux ne fonctionnent qu'avec la Bracket Notation

console.log(kitty.couleur); // les objets fonctionnent 'idéalement' avec la Dot Notation
console.log(kitty["couleur"]); // Possible, mais déprécié, car plus contraignant

// La force des tableaux réside dans ses nombreuses méthodes efficaces

// --------------------------------------
// --------------------------------------
// ----------- LA MÉTHODE BIND ----------
// --------------------------------------
// --------------------------------------

const moto = {
    marque: "Royal Enfield",
    modèle: "Meteor",
    couleur: "Marron",
    année: 2023,
    functionEasy: function () {
        console.log(this.marque);
    },
};
// moto.functionEasy()

// C'est l'objet parent
let nouvelleMoto1 = moto.functionEasy;
// console.log(nouvelleMoto);
nouvelleMoto1();

// Lier une fonction à  un Objet
let nouvelleMoto2 = moto.functionEasy.bind(moto);
// console.log(nouvelleMoto);
nouvelleMoto2();

//
let btn = document.querySelector("button");

// LIER UN OBJET à UN CONTEXTE EN EVENT
// addEventListener est lié à l'OBJET GLOBAL
btn.addEventListener("click", moto.functionEasy); //undefined, car pas accès au THIS
btn.addEventListener("click", moto.functionEasy.bind(moto));
btn.addEventListener("click", nouvelleMoto1.bind(moto));
