// EXERCICE 8 : Les fonctions 🔥

// 1. Écrire une fonction pure qui sert à multiplier deux nombres ensemble.

// fonction arrow
const funcPure = (a, b) => a * b;
console.log(funcPure(10, 10));

// fonction classique
const funcPure2 = function (a, b) {
    return a * b;
};
console.log(funcPure2(10, 10));

// 2. Écrire une fonction d'ordre supérieur, qui prend une fonction callback en paramètre et un tableau rempli de nombres.
//   Cette fonction retournera un nouveau tableau, qui contient toutes les valeurs auxquelles on a ajouté 1


// ---------------------

function tableauPlus(tab, func) {
    const newTableau = [];
    
    for (let i = 0; i < tab.length; i++) {
        newTableau.push(func(tab[i]));
    }
    return newTableau;
}

const plusUn = (nombre) => nombre + 1;

const tableauPlusUn = tableauPlus([10, 20, 30], plusUn); //tableau manuel
console.log(tableauPlusUn);

// ------------------------------
// Avec Let tab

let tab = [10, 20, 30, 40, 50];

function tableauAgain(tab, func) {
    const tab3 = [];
    
    for (let i = 0; i < tab.length; i++) {
        tab3.push(func(tab[i]));
    }
    return tab3;
}

let ajout = function (nombre) {
    return nombre + 1;
};

let finish = tableauAgain(tab, ajout);
console.log(finish);
