// --------------------------------------
// -------------- RAPPEL  ---------------
// --------------------------------------
// Un index de tableau débute à zéro

// --------------------------------------
// ----------- MÉTHODES TABLEAUX -----------
// --------------------------------------

const tableau = ["a", "b", "c", "d"];
console.log(tableau);

// --------------------------------------

// ajout
tableau.push("z");
console.log(tableau);

// --------------------------------------

// Ajoute des éléments en début de tableau
tableau.unshift("1", "2");

// --------------------------------------

// retire le premier élément d'un tableau
tableau.shift();

// --------------------------------------

// retrait du dernier élément d'un tableau
tableau.pop();

// --------------------------------------

// Affiche la position (sachant que ça débute à index 0)
console.log(tableau.indexOf("a"));

// --------------------------------------

// Affiche l'élément de tableau à tel index
console.log(tableau[0]);

// --------------------------------------

console.log(tableau);

// --------------------------------------

// Retire du contenu : à partir de l'index X, efface X éléments
tableau.splice(0, 2);
// --------------------------------------

// Puis ajoute tels éléments
tableau.splice(0, 1, 10, 9, "8");

// --------------------------------------
// ----- Dans un console.log --- Retourne un nouveau Tableau -----
// --------------------------------------

// Découpe :  Conserve de index X, jusqu'à index X non inclus
console.log(tableau.slice(3, 5));

console.log(tableau);

// --------------------------------------

const tab1 = ["a", "b", "c"];
const tab2 = [1, 2, 3];

// Associe 2 tableaux
const tab3 = tab1.concat(tab2);
console.log(tab3);

// --------------------------------------

// Pour savoir si une donnée se situe dans un tableau
console.log(tab3.includes("a"));
console.log(tab3.includes(5));

// --------------------------------------

// Aplatir un tableau à plusieurs dimensions/niveaux
const multiTab = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
console.log(multiTab.flat());       // = .flat(1)
console.log(multiTab.flat(2));      // = 2 niveaux suivants

// --------------------------------------

// Passer un tableau en chaîne de caractères, avec un lien entre chaque
const fruits = ['fraise', 'pommes', 'raison']
console.log(fruits.join());
console.log(fruits.join(' et '));

// --------------------------------------

// Renverse l'ordre (inversion)
console.log(fruits.reverse());