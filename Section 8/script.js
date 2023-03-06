// --------------------------------------
// -------------- RAPPEL  ---------------
// --------------------------------------
// Paramètres de fonction = quand on déclare la fonction
// Arguments de fonction = quand on appelle la fonction

// --------------------------------------
// ----------- FONCTION PURES -----------
// --------------------------------------

// No Side Effects
// Permet d'avoir moins de bugs, car plus restrictif

let x = 2;

const add1 = (a, b) => a + b; // Fonction pure
// const add2 = y => x += y;        // Pas pure du tout !!

// -----------------------------------------
// ----------- FONCTION CALLBACK -----------
// -----------------------------------------

const tab = [1, 2, 3];

// ---------------------------------
// ----- 1ère manière de faire -----
// ---------------------------------

tab.forEach((item) => {
    //method associée aux tableaux
    console.log(item); //item nomme chaque element de tableau
});

// ---------------------------------
// ----- 2ème manière de faire -----
// ---------------------------------

function customForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

customForEach(tab, (item) => {
    console.log(item);
});

// -----------------------------------------
// -------- FONCTION ORDRE SUPÉRIEUR --------
// -----------------------------------------

// Cette fonction prend une fonction de rappel (CallBack) en paramètre de fonction,
// Ou bien retourne une fonction
// Ou bien les 2 (prend un callback en paramètre de fonction et retourne une fonction)

// Ouvre de nombreuses possibilités, et plus de souplesse

const values = [10, 50, 100, 500, 1000];

function customFilter(array, func) {
    const filtered = [];

    for (let i = 0; i < array.length; i++) {
        if (func(array[i])) {
            filtered.push(array[i]);
        }
    }
    return filtered;
}

// ---------------------------------
//  avec Fonction Arrow (d'avantage utilisé)
// ---------------------------------

const filteredArrayFunction = customFilter(
    values,
    (elements) => elements > 100
);

// ---------------------------------
//  avec Fonction Classic
// ---------------------------------

const filteredArray_FunctionArrow = customFilter(values, function (element) {
    return element > 100;
});

console.log(filteredArrayFunction);
console.log(filteredArray_FunctionArrow);

// ---------------------------------
// avec Méthode Filter (intégré à JS)
// ---------------------------------

const valeurs = values.filter((xyz) => xyz > 100);
console.log(valeurs);

// -----------------------------------------
// -------- FONCTION AUTO INVOQUÉE --------
// -----------------------------------------

// Permettait d'avoir une variable dans une Scope
// Avant l'apparition du JS Moderne

(function () {
    var nom = "Sam";
    console.log("hi " + nom);
})();

// -----------------------------------------
// -------- LA RECURSION --------
// -----------------------------------------

// C'est une fonction qui s'appelle toute seule

// PS : un paramètre est dispo comme une variable dans la Scope Function
function recursion(num) {
    num++;
    console.log(num);

    if (num >= 10) {
        console.log(`C'est bon ! ${num}`);
    } else {
        recursion(num);
    }
}

recursion(5);
