/* --------------------------------------------------- */
/* --------------------------------------------------- */

const bookList = document.querySelector(".book-list");
const bookForm = document.querySelector(".book-form");

/* --------------------------------------------------- */
// Création d'un nouveau livre dans une rangée
//  issus des données de constructeurs
/* --------------------------------------------------- */

// Création d'une Classe (constructeur)
class Book {
    constructor(titre, auteur, annee) {
        this.titre = titre;
        this.auteur = auteur;
        this.annee = annee;
    }

    // ---------- Dans ce constructeur ----------
    // Création d'une Méthode pour créer et placer du HTML

    addBookToList(book) {

        // Dans une variable, on crée une rangé
        const row = document.createElement("tr");

        // Dans cette rangée, on ajoute du HTML
        row.innerHTML = `
        <td>${book.titre}</td>
        <td>${book.auteur}</td>
        <td>${book.annee}</td>
        <td><button class='delete'>X</button></td>`;

        // la localisation bookList fera 'naître' le tout
        bookList.appendChild(row);
    }

    // ---------- Dans ce constructeur ----------
    // Création d'une méthode pour nettoyer les inputs

    clearFields() {
        document.getElementById('titre').value = "";
        document.getElementById('auteur').value = "";
        document.getElementById('annee').value = "";
    }
}

/* --------------------------------------------------- */
// Supprimer une rangée avec un livre
/* --------------------------------------------------- */

// ??? classe utilitaire ???
class Interface {
    deleteBook(target) {
        if (target.className === "delete") {
            target.parentElement.parentElement.remove();
        }
    }
}

/* --------------------------------------------------- */
// Ajouter une rangée au click
// Transfère les valeurs des 3 inputs dans une Variable
// Cette variable devient les éléments du constructeur
// Et on appelle la Méthode issue de ce constructeur
/* --------------------------------------------------- */

// Quand on clique sur la localisation de bookForm (le bouton)
bookForm.addEventListener("submit", (e) => {
    e.preventDefault(); // on conserve les données en locale, par défaut

    // On stock dans des variables les écrits de nos 3 ID d'inputs (la valeur)
    const leTitre = document.getElementById("titre").value;
    const lAuteur = document.getElementById("auteur").value;
    const lAnnee = document.getElementById("annee").value;

    // Nos 3 valeurs deviennent les éléments d'un constructeur
  
    const livre = new Book(leTitre, lAuteur, lAnnee);

    // on appel la method
    // ????????????????????????????????????????????????
    livre.addBookToList(livre);
});

/* --------------------------------------------------- */
// Effacer la ligne : click bouton croix
/* --------------------------------------------------- */

bookList.addEventListener("click", (e) => {
    const ui = new Interface();
    ui.deleteBook(e.target);
});
