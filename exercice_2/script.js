// EXERCICE 2 : Les opérateurs, chaînes & fonctions.

// Écrivez une fonction qui retourne un nombre multiplié par deux en utilisant un paramètre.

function calcul(nombre) {
    return nombre * 2;
}

//  Déterminez ce qui est vrai ou faux.

let solde = 150000;
solde += 50000;
// Ce code permet d'assigner la valeur 50 000 à solde.
// Vrai ou Faux ?
// Vrai

let resultat = 10 % 7;
// resultat est égal à 5.
// Vrai ou Faux ?
// Faux

let str = `J'ai besoin de $(nbPneus) pour ma voiture.`;
// C'est la bonne façon d'intégrer une expression dans une chaîne.
// Vrai ou Faux ?
// Faux

console.log(calcul(2));
console.log(solde);
console.log(resultat);
console.log(str);

