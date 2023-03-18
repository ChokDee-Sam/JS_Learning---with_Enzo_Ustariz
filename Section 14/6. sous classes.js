// --------------------------------------
// --------------------------------------
// ------------ SOUS CLASSES ------------
// --------------------------------------
// --------------------------------------

// Permet d'hériter de tous les paramètres
// et d'étendre

// --------------------------------------
// Création d'une Classe initiale
// --------------------------------------

class Voiture {
    constructor(marque, cylindrée, couleur, année, option) {
        this.marque = marque;
        this.cylindrée = cylindrée;
        this.couleur = couleur;
        this.année = année;
        this.option = option;
    }
}

// --------------------------------------
// Création d'une Sous-Classe qui permet une extension
// --------------------------------------

class Moto extends Voiture {
    // Une nouvelle Méthode dans cette Sous-Classe
    welcome() {
        console.log("Bienvenue dans le monde du 2 roues !");
    }
}

// --------------------------------------
// Première Variable : une extension vide, mais avec des propriétés héritées
// --------------------------------------

const motoBike1 = new Moto();
console.log(motoBike1);

// --------------------------------------
// Deuxième Variable : une extension, avec des valeurs définis dans les propriétés héritées
// --------------------------------------

const motoBike2 = new Moto("Yamaha", 1300, "noire", undefined);
console.log(motoBike2);

// --------------------------------------
// Deuxième Variable : Appel de Méthode issue de la Sous-Classe
// --------------------------------------

motoBike2.welcome();

// --------------------------------------
// --------------------------------------

motoBike1 = function aaa(){
    for (let i = 0; i < arr.length; i++) {
        const er = arr[i];
        
    }
}
texz = function fun( ) {
    for
}



