// --------------------------------------
// -------- Rappel BOUCLE AVEC TABLEAU  ---------
// --------------------------------------

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const numFonction = function (nombres) {
    for (let i = 0; i < nombres.length; i++) {
        console.log(nombres[i]);
    }
};

numFonction(num);

// --------------------------------------
// -------- Rappel CALLBACK  ---------
// --------------------------------------
// C'est une fonction utilisé en tant qu'argument
//          dans une autre fonction

function usingCallback(callback) {
    callback();
}

usingCallback(function () {
    console.log("Hello depuis la CallBack");
});

// --------------------------------------
// -------- METHODS CALLBACK  ---------
// --------------------------------------

const numTab = [1, 2, 3];

// --------------------------------------
// -------- FOR EACH  ---------
// --------------------------------------

// Pour chaque element du tableau : utilise une fonction Callback
numTab.forEach(function (element) {
    console.log(element);
});

// Entraînement : reproduire à la main
const log_x10 = function (element) {
    return console.log(element * 10);
};

const forEachManual = function (abc, func) {
    for (let i = 0; i < abc.length; i++) {
        func(abc[i]);
    }
};

forEachManual(numTab, log_x10);

// --------------------------------------
// -------- MAP  ---------
// --------------------------------------

// Effectue une action sur chaque élément de tableau,
//  puis retourne un nouveau tableau, avec chaque elements modifiés

// Avec une fonction CLASSIC à l'intérieur
let resultMap_Classic = numTab.map(function (element) {
    return element * 2;
});

// Avec une fonction ARROW à l'intérieur
let resultMap_Arrow = numTab.map((element) => element * 2);

// Log
console.log(resultMap_Classic);
console.log(resultMap_Arrow);

// Fonction extérieure dans une Const
const multiple = function (x) {
    return x * 10;
};

// Avec une fonction CLASSIQUE à l'extérieure
let resultMap_Classic_Outside = numTab.map(multiple);

console.log(numTab.map(multiple));
console.log(resultMap_Classic_Outside);
//
//
//

// Training à la main
const mapManual = function (tab, func) {
    const newTab = [];

    for (let i = 0; i < tab.length; i++) {
        newTab.push(func(tab[i]));
    }
    return newTab;
};

console.log(mapManual(numTab, multiple));

// --------------------------------------
// -------- FILTER  ---------
// --------------------------------------

const fruits = ["Kiwi", "Fraise", "fruit du dragon"];

// Avec fonction Classique
const resultFilter = fruits.filter(function (abc) {
    return abc.length > 4;
});

// Avec fonction Arrow
const resultFilter_Arrow = fruits.filter((abc) => abc.length > 4);

// Log
console.log(resultFilter);
console.log(resultFilter_Arrow);

//Reproduire le filter à la main
const essaiManuelFilter = function triage(abc) {
    newFruits = [];

    for (let i = 0; i < abc.length; i++) {
        if (abc[i].length > 4) {
            newFruits.push(abc[i]);
        }
    }
    return newFruits;
};

console.log(essaiManuelFilter(fruits));

// --------------------------------------
// -------- REDUCE  ---------
// --------------------------------------

// Permet de réduire un tableau

const numTab2 = [10, 20, 30, 40, 50];

// a = accumulateur (débute à zéro)    b = valeur courante
const reduced = numTab2.reduce(function (a, b) {
    return a + b;
    // a = 0 + b = 10       = 10
    // a = 10 + b = 20      = 30
    // a = 30 + b = 30      = 60
    // a = 60 + b = 40      = 100
    // a = 100 + b = 50     = 150
});

console.log(reduced);

// a = accumulateur (débute à 10)    b = valeur courante
const reduced_2 = numTab2.reduce(function (a, b) {
    return a + b;
    // a = 10 + b = 10       = 20
    // a = 20 + b = 20      = 40
    // a = 40 + b = 30      = 70
    // a = 70 + b = 40      = 110
    // a = 110 + b = 50     = 160
}, 10); // Débute à 10

console.log(reduced_2);

//
// Reduce à la main
const reducedManual = function (tableau) {
    let newTableau = 1000;

    for (let i = 0; i < tableau.length; i++) {
        newTableau += tableau[i];
    }

    return newTableau;
};

console.log(reducedManual(numTab2));
