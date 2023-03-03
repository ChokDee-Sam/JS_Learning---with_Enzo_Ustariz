// EXERCICE 7 : JavaScript moderne

// 1. Créez une fonction arrow qui retourne "Hello World", elle doit être écrite dans sa syntaxe la plus courte possible.(élégante)

const arrow = () => "Hello World";
console.log(arrow());

// 2. Créez une classe Humain qui sert à créer des objets avec deux propriétés : poids et taille.

class Humain {
    constructor(poids, taille) {
        this.poids = poids;
        this.taille = taille;
    }
    voirPoids() {
        // console.log(this.poids);
        return this.poids
    }
}

// console.log(Humain);     // Checker si ça fonctionne correctement

const homme = new Humain(75, "1m75");
console.log(homme);
console.log(homme.voirPoids());