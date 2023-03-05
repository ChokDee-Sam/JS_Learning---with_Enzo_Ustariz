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

// ----- 1ère manière de faire -----
// ---------------------------------

tab.forEach((item) => { //method associée aux tableaux
    console.log(item);  //item nomme chaque element de tableau
});
// ---------------------------------
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
// ---------------------------------
// ---------------------------------
