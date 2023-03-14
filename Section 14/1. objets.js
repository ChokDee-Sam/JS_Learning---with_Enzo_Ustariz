// --------------------------------------
// --------------------------------------
// -------------- OBJETS ----------------
// --------------------------------------
// --------------------------------------

const moto = {
    marque: "Royal Enfield",
    année: 2022,
    couleur: "marron",
    rouler: function () {
        console.log("Vroom");
        console.log(this);
        console.log(this.marque);
    },
};

// --------------------------------------
// Affichage de la Méthode 'rouler'
// --------------------------------------

moto.rouler()

// --------------------------------------
// Savoir si l'Object a telle propriété
// --------------------------------------

console.log(moto.hasOwnProperty('couleur'));
console.log(moto.hasOwnProperty('prix'));

// --------------------------------------
// Voir les valeurs contenues dans un Objet
// --------------------------------------

console.log(Object.values(moto));

// --------------------------------------
// Voir les propriétés contenues dans un Objet
// --------------------------------------

console.log(Object.keys(moto));

// --------------------------------------
// --------------------------------------
