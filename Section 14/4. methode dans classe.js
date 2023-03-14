// --------------------------------------
// --------------------------------------
// -------- MÉTHODE DANS CLASSE --------
// --------------------------------------
// --------------------------------------


class Becane {
    constructor(marque, année) {
        this.marque = marque;
        this.année = année;
    }

    // Méthode 
    dateSortie(){
        console.log(`Date de sortie : ${this.année}`);
    }
}

// --------------------------------------
// Assignation
// --------------------------------------

const moto = new Becane('Honda', 2022)
const taxi = new Becane('Toyota', 2023)
const voiture = new Becane('Mitsubishi', 2024)

// --------------------------------------
// Appel de la Méthode
// --------------------------------------

moto.dateSortie()
taxi.dateSortie()
voiture.dateSortie()

// --------------------------------------
// La Méthode se trouve dans : Objet > Prototype > Constructor
// --------------------------------------

console.log(moto);

// --------------------------------------
// --------------------------------------
