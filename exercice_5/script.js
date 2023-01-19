/* Notes des cours

-----------------------------------
-----------------------------------
*/

// Boucle For...of
// Effectue des actions à travers des objets itérables (tableaux, chaine de car, etc)

// avec Const
const tab1 = [1, 2, 3, 4, 5]; // le nombre de composants de tab1 = le nombre de boucle

for (const element of tab1) {
    console.log(element); // affiche 5 boucles
}
console.log(tab1);

// avec Let
let tab2 = [1, 2, 3, 4, 5, 6, 7];
// let conserve le nombre de boucle, mais permet de modifier ce que l'on y affiche

for (let element of tab2) {
    element = 10; // affiche ce nombre autant de fois que le nombre de composants de tab2
    console.log(element);
}

console.log(tab2);

// -----------------------------------
// -----------------------------------

// Boucle For...in
// Pour itérer à travers des objets
const tesla = {
    couleur: "blanche",
    portes: 5,
    prix: 50000,
};

for (const prop in tesla) {
    console.log(`${prop}`);
    //sous forme de string, on utilise des crochets pour avoir accès aux propriétés d'un objet
    console.log(`${prop}:${tesla[prop]}`); //on n'utilise pas tesla.couleur ou tesla.prop
}

// -----------------------------------
// -----------------------------------

// while
// do while

// -----------------------------------
// -----------------------------------

// break
// continue

// -----------------------------------
// -----------------------------------

// try...catch
// permet d'essayer du code afin de voir l'erreur

try {
    console.log("debut du test");
    functionflex(); //fonction inexistante
} catch (err) {
    console.log("erreur de test");
    console.log(`Voici l'erreur : ${err}`);
    console.log(err);
} finally {
    console.log("On envoie quelque chose après le try, ou le catch");
}

// -----------------------------------
// -----------------------------------

// EXERCICE 5 : Boucles, mots clés, déclarations

// 1. Affichez à l'aide d'une boucle "for..in" toutes les valeurs des propriétés de cet objet dans la console.

const capitales = {
    autriche: "Vienne",
    argentine: "Buenos Aires",
    estonie: "Tallinn",
    australie: "Cambera",
};

for (const truc in capitales) {
    // console.log(truc);   //affiche uniquement les propriétés
    console.log(`${capitales[truc]}`); // affiche les valeurs
    // console.log(`${truc} : ${capitales[truc]}`); // affiche propriétés : valeurs
}

// 2. Idem mais avec une boucle "for..of" et ce tableau.

const fruits = ["Fraise", "Cerise", "Orange", "Citron", "Ananas"];

for (const truc of fruits) {
    console.log(truc);
}

// 3. Créez une fonction qui sert à repérer si un texte qu'on lui passe en argument contient la lettre "z".
// si c'est le cas, la fonction écrit dans la console "Alerte: le texte contient la lettre Z".

function reperageZ(mot) {
    //
    // SOLUTION 1 :  For of
    //
    // for (const lettre of mot){
    //     if(lettre==='z') {
    //         console.log(`Alter: le texte contient la lettre Z`);
    //         break
    //     }
    //     console.log(lettre);
    // }

    //
    // SOLUTION 2 :  For
    //
    for (i = 0; i < mot.length; i++) {
        if (mot[i] === "z") {
            console.log(`Alter: le texte contient la lettre Z`);
            break;
        }
        console.log(mot[i]);
    }
}

reperageZ("abczd");
