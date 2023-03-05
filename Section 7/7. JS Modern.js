// --------------------------------------------------------------
// --------------------------------------------------------------
//                      LET - CONST
// --------------------------------------------------------------
// --------------------------------------------------------------

// Utiliser Let et Const plutôt que Var
// Évite les soucis

// --------------------------------------------------------------
// --------------------------------------------------------------
//                      FONCTION ARROW
// --------------------------------------------------------------
// --------------------------------------------------------------

// utiliser les fonctions Arrow dans des let/const
// (function expression),
//  pour éviter le hoisting, et les appels avant déclaration

const test_2 = () => {
    return 10;
};
console.log(test_2());

// --------------------------------------------------------------
// --------------------------------------------------------------
//                      FONCTION ARROW : RACCOURCI
// --------------------------------------------------------------
// --------------------------------------------------------------

// Écriture de fonction arrow plus courte sur 1 ligne
const test_3 = () => {
    return 10;
};
console.log(test_3());

// Le return est induit automatiquement
const test_4 = () => 10;
console.log(test_4());

// ultra condensé
const test_5 = (a) => a;
console.log(test_5("A"));

// Dans un addEventListener, on utilise plus souvent des fonctions Arrow
// btn.addEventListener('click', ()=> {blablabla}

// --------------------------------------------------------------
// --------------------------------------------------------------
//                      THIS
// --------------------------------------------------------------
// --------------------------------------------------------------

// Dans une fonction classique, this cible son contexte appelant
// Dans une fonction Arrow, this cible son contexte englobant

const monObjet = {
    b: "B",
    // functionClassic() {          // raccourci
    functionClassic: function () {
        console.log(this.b);
    },
    functionArrow: () => {
        // impossible de raccourcis car besoin de la key : value
        console.log(this.b); // this, dans une function arrow ne peut pas cibler son contexte appelant
        // mais uniquement son contexte englobant (ici Window)
        console.log(this);
    },
};
monObjet.functionClassic();
monObjet.functionArrow(); // affiche undefined, et ensuite son contexte englobant

// Dans un addEventListener, on utilise plus souvent des fonctions Arrow : attention au This englobant

// exemple.addEventListener('click', ()=> {
//     console.log(this);
// })

// exemple.body.addEventListener('click', function() {
//     console.log(this);
// })

// --------------------------------------------------------------
// --------------------------------------------------------------
//                      TEMPLATES LITERALS
// --------------------------------------------------------------
// --------------------------------------------------------------

// On ne concatène pas avec des +
// On utilise plutôt des backticks, avec des ${}
// Ce qui permets d'effectuer des calculs, d'afficher des résultats de functions, des ternaires, etc

// --------------------------------------------------------------
// --------------------------------------------------------------
//                      LES CLASSES
// --------------------------------------------------------------
// --------------------------------------------------------------

// Ce sont des sortes d'usines, pour créer des modèles d'objets

class Pays {
    constructor(population, nom, pib) {
        this.population = population;
        this.nom = nom;
        this.pib = pib;
    }

    // Création d'une méthode contenu dans cet objet
    voirPopulation() {
        console.log(this.population);
    }
}

// Création de 2 objets selon le modèle 'Pays'
const Thailand = new Pays("66 Millions", "Thailand", "580 Milliards");
const USA = new Pays("331 Millions", "USA", "26185 Milliards");

// On log pour vérifier
console.log(Thailand);
console.log(USA);

// On peut vérifier un élément d'objet
console.log(Thailand.population);

// Ou bien on peut appeler la méthode contenue dans l'objet pour afficher cet élément
console.log(Thailand.voirPopulation());
console.log(USA.voirPopulation());

// --------------------------------------------------------------
// --------------------------------------------------------------
//                      SPREAD ET DESTRUCTURING
// --------------------------------------------------------------
// --------------------------------------------------------------

// ---------- SPREAD ----------
// Permet d'utiliser tous les éléments qui sont itérables
const nombre = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(...nombre);
// -------------------------------------------------------------------------------

// ---------- DESTRUCTURING OBJET ----------
// Créer des variables qui prennent les valeurs de propriétés d'un objet, ou les valeurs d'un tableau
const villeDuNord = {
    nom: "Chiang Mai",
    population: 127000,
};
// console.log(villeDuNord);

// const { nom, population } = villeDuNord;
const { nom, population } = villeDuNord;
console.log(nom, population);
// PS : la destructuration 'semble' devoir porter le même nom que la key
// -------------------------------------------------------------------------------

// Pour ---------- TABLEAU ----------

const listeVillesDuNord = ["Chiang Mai", "Chiang Rai", "Phayao"];
const [a, b, c] = listeVillesDuNord;

console.log(a, b, c);
// PS : la destructuration de Tableau 'semble' pouvoir porter n'importe quel nom
// -------------------------------------------------------------------------------

// --------------------------------------------------------------
// --------------------------------------------------------------
//                      OBJETS ET PARAMÈTRES PAR DÉFAUT
// --------------------------------------------------------------
// --------------------------------------------------------------

let prenom = "Sam";
let age = 30;

// --------------------------------------
// ---------- Syntaxe classique----------
// --------------------------------------
const objet1 = {
    prenom: prenom,
    age: age,
    bonjour: function () {
        console.log("Bonjour");
    },
};

// ---------------------------------------
// ---------- Syntaxe raccourci ----------
// ---------------------------------------
const objet2 = {
    prenom,
    age,
    bonjour() {
        console.log("Bonjour");
    },
};
// ---------------------------------------
console.log(objet1, objet2);
console.log(objet1.prenom, objet2.prenom);
console.log(objet1.age, objet2.age);
// ---------------------------------------
// ---------------------------------------

// --------------------------------------------------------------
// ---------- Paramètre par défaut, et modification ----------
// --------------------------------------------------------------

function ab(a, b = 100) {
    return a + b;
}

console.log(ab(10)); // = 10 + 100
console.log(ab(10, 40)); // = 10 + 40

// --------------------------------------------------------------
// ---------- Transforme en tableau tous les arguments qu'on écrira ----------
// --------------------------------------------------------------

// Utile quand on ne sait pas à l'avance
function liste(...arguments) {
    console.log(arguments);
}

liste(1, 2, 3, 4, 5, 6, 7, 8, 9);

// --------------------------------------------------------------
// ---------- RAPPEL SPREAD ----------
// --------------------------------------------------------------

// Permet d'utiliser tous les éléments qui sont itérables
// const nombreBis = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(...nombreBis);


// --------------------------------------------------------------
// --------------------------------------------------------------
//                      PROMESSES
// --------------------------------------------------------------
// --------------------------------------------------------------

// C'est un Objet avec une méthode qui s'exécute
// Suivant le succès ou l'échec de cette action,
//  on aura 'ceci' ou 'cela'

// Utile pour de l'asynchrone
// Pendant que l'info se recherche, le script JS continue

const promise1 = new Promise((resolve, reject) => {

// Activez 1 de ses 2 lignes
    // resolve('Les données sont là')    
    // reject('Erreur')
})

// Si les données sont trouvées :
.then((valeur)=> {
    console.log(valeur);
})
// Si les données ne sont pas trouvées :
.catch(()=> {
    console.log('Erreur');
} )