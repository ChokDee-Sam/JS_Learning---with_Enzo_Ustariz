// --------------------------------------
// ----------- FONCTION PURES -----------
// --------------------------------------

// No Side Effects
// Permet d'avoir moins de bugs, car plus restrictif

let x = 2;

const add1 = (a, b) => a + b; // Fonction pure
// const add2 = y => x += y;        // Pas pure du tout !!

