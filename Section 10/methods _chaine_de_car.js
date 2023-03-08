// --------------------------------------
// -------------- RAPPEL  ---------------
// --------------------------------------

// On peut itérer :
// - dans un tableau
// - dans une chaîne de caractères

const str = "Hi, my name is";

// Affiche le caractère à un certain Index
console.log(str.charAt(4));

// Savoir si le text contient (true ou false)
console.log(str.includes("is"));

// Affiche l'index de :
console.log(str.indexOf("is"));

// Affiche le code Unicode à un index spécifique
console.log(str.charCodeAt(0));
// Google : unicode lookup (Decimal)

// Coupe à partir d'un certain Index
console.log(str.slice(7));
console.log(str.slice(-2));

// Transforme une chaîne de caractères en Tableau
const strToArray1 = str.split();
console.log(strToArray1);

// La même, sauf que ça découpe en multiple éléments
const strToArray2 = str.split(" "); // ex : découpe entre les espaces
console.log(strToArray2);

// Puis possibilité de rejoindre le tout
const strToArray3 = str.split(",").join(); // ex : découpe entre les espaces
console.log(strToArray3);

// Concatène des chaînes entre elles
const str1 = 'Hello'
const str2 = 'World'

console.log(str1.concat(str2));
console.log(str1.concat(' ',str2)); // avec premier argument supplémentaire