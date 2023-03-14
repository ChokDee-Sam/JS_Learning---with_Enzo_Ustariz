// --------------------------------------
// --------------------------------------
// -------------- CLASSES ---------------
// --------------------------------------
// --------------------------------------

// Sorte d'usine de création d'Objets

// --------------------------------------
//Méthode avec propriétés statiques
// --------------------------------------

class VehiculeModeleStatique {
    constructor() {
        this.marque = "Ford";
        this.année = 2022;
    }
}

// Créer un nouvel Objet
// en faisant référence à un constructeur (Classe)
const moto1 = new VehiculeModeleStatique();
console.log(moto1);

// --------------------------------------
//Méthode avec propriétés dynamiques
// --------------------------------------

class VehiculeModeleDynamique {
    constructor(marque, année) {
        this.marque = marque;
        this.année = année;
    }
}

// Créer un nouvel Objet
// en faisant référence à un constructeur (Classe)
const moto2 = new VehiculeModeleDynamique("Royal Enfield", 2022);
console.log(moto2);

// --------------------------------------
// Multiple exemples dynamiques
// --------------------------------------

const moto3 = new VehiculeModeleDynamique("Harley Davidson", 1997);
console.log(moto3);

const voiture1 = new VehiculeModeleDynamique("Mazda", 1983);
console.log(voiture1);

const voiture2 = new VehiculeModeleDynamique("Mitsubishi", 2024);
console.log(voiture2);

// --------------------------------------
// --------------------------------------
