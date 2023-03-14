// --------------------------------------
// --------------------------------------
// -------- CHAÎNES DE MÉTHODES --------
// -------------1er EXEMPLE-------------
// --------------------------------------
// --------------------------------------

class ProduitVoiture {
    constructor(marque, cylindrée, couleur, année, option) {
        this.marque = marque;
        this.cylindrée = cylindrée;
        this.couleur = couleur;
        this.année = année;
        this.option = option;
    }

    dateSortie() {
        console.log(`Date de sortie de cette voiture : ${this.année}`);
    }

    nouvelleOption(nomOption) {
        this.option++;
        console.log(
            `L'option ${nomOption} a été ajoutée - Nombre d'options = ${this.option}`
        );
        return this; // permet d'enchaîner les méthodes
    }
}
// --------------------------------------

const voiture = new ProduitVoiture("Isuzu", "2000cc", "blanche", "2022", 0);
console.log(voiture);
voiture.dateSortie();

// --------------------------------------

voiture.nouvelleOption("climatisation");
voiture.nouvelleOption("siège confort");

// --------------------------------------

voiture
    .nouvelleOption("caméras")
    .nouvelleOption("vitres teintées")
    .nouvelleOption("batterie quick charge")
    .nouvelleOption("peinture personnalisée");

// --------------------------------------
// --------------------------------------

// --------------------------------------
// --------------------------------------
// -------- CHAÎNES DE MÉTHODES --------
// -------------2ème EXEMPLE-------------
// --------------------------------------
// --------------------------------------

class ProduitTextile {
    constructor(marque, categorie, couleur, collection, ajoutClient) {
        this.marque = marque;
        this.categorie = categorie;
        this.couleur = couleur;
        this.collection = collection;
        this.ajoutClient = ajoutClient;
    }

    // --------------------------------------
    // Méthode
    // --------------------------------------

    informationProduitTextile() {
        console.log(
            `${this.categorie} ${this.marque}, de couleur ${this.couleur}, collection ${this.collection}`
        );
    }

    // --------------------------------------
    // Méthode qui va pouvoir chain
    // --------------------------------------

    newClient(abc) {
        this.ajoutClient += abc;
        console.log(
            `Rajout de ${abc} ${abc >= 2 ? "clients" : "client"}  (${
                this.ajoutClient
            } au total) `
        );
        // --------------------------------------
        // La clé pour enchaîner les Méthodes à la suite
        // --------------------------------------
        return this;
    }
}

// --------------------------------------
// Assignation
// --------------------------------------

const veste = new ProduitTextile("Kenzo", "Veste", "bleue nuit", 2023, 0);
console.log(veste);

// --------------------------------------
// Méthode avec template literal
// --------------------------------------

veste.informationProduitTextile();

// --------------------------------------
// Méthode qui va pouvoir chain
// --------------------------------------

veste.newClient(1);
veste.newClient(2);
veste.newClient(3);

// --------------------------------------
// Enchaînement de méthode
// --------------------------------------

veste.newClient(4).newClient(5);

// --------------------------------------
// --------------------------------------
