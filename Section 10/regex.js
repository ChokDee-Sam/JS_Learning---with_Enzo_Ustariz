// --------------------------------------
// --------  REGEX  ---------
// --------------------------------------

const phrase = "Salut, comment ça va ? 2023";

// S'arrête au premier résultat
let regex1 = /[aou]/;

// Cherche tous les résultats globaux
let regex2 = /[aou]/g;

// Cherche tous les résultats globaux,
// Tout ce qui est en minuscule, de a à z
let regex3 = /[a-z]/g;

// Cherche tous les résultats globaux,
// Tout ce qui est en majuscule, de A à Z
let regex4 = /[A-Z]/g;

// Cherche tous les résultats globaux,
// Tout ce qui N'EST PAS en minuscule, de A à Z
let regex5 = /[^a-z]/g;

// Cherche tous les résultats globaux,
// Tout ce qui N'EST PAS en majuscule, de A à Z
let regex6 = /[^A-Z]/g;

// Cherche tous les résultats globaux,
// Tout ce qui est de A à Z
// Sans être sensible à la casse (i)
let regex7 = /[A-Z]/gi;

// Cherche tous les résultats globaux,
// de 0 à 9
let regex8 = /[0-9]/g;

// Cherche tous les résultats globaux,
// Tout ce qui n'est pas des nombres, de 0 à 9
let regex9 = /[^0-9]/g;

// AntiSlash d = Digit (numéros)
// Pas besoin de mettre des crochets [0-9]
let regex10 = /\d/g;


console.log(phrase.match(regex1));
console.log(phrase.match(regex2));
console.log(phrase.match(regex3));
console.log(phrase.match(regex4));
console.log(phrase.match(regex5));
console.log(phrase.match(regex6));
console.log(phrase.match(regex7));
console.log(phrase.match(regex8));
console.log(phrase.match(regex9));
console.log(phrase.match(regex10));

// /\s/gi = tous les espaces
// /\s/gi = tous ce qui n'est pas des espaces

// /\w/gi = [a-zA-Z0-9_]
// /\W/gi = l'inverse, donc les espaces

// /[0-9]\s/gi = Tous les NOMBRES + tous les ESPACES
// Checker sur Google si besoin


// --------------------------------------
// --------  REPLACE  ---------
// --------------------------------------

// Remplacer avec 2 arguments : le remplacé, et le remplaçant
console.log(phrase.replace(/a/, 'ZZZ'));    // uniquement le premier 'a'
console.log(phrase.replace(/a/g, 'ZZZ'));    // uniquement le premier 'a'
console.log(phrase.replace(/s/gi, 'ZZZ'));   // tous les 'S', sans sensibilité de casse