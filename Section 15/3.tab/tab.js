// Retourne une collection (tableau), une NodeList
// mais avec ça, on ne peut pas utiliser de Method
let onglets = document.querySelectorAll(".onglet");
console.log(onglets);

// On doit donc transformer la NodeList en Tableau
// Array.from permet de transformer un objet itérable en Tableau
onglets = Array.from(document.querySelectorAll(".onglet"));
console.log(onglets);

const contenus = Array.from(document.querySelectorAll(".contenu"));

//
// Dans le tableau Onglet, pour chaque Element
onglets.forEach((element) => {
    // Un event possible sur chaque Element
    // qui retournera un lot d'informations (e)
    element.addEventListener("click", (e) => {
        // Passe en revu chaque onglets afin de rechercher un lot d'informations(e)
        for (let i = 0; i < onglets.length; i++) {
            // Autre façon d'écrire
            // if (i === onglets.indexOf(e.target)) {
            if (onglets[i] === e.target) {
                // Afin de donner une classe à l'onglet si trouvé
                onglets[i].classList.add("active-onglet");
            } else {
                // Ou de retirer une classe sur les autres onglets
                // qui n'ont pas le lot d'infos(e), donc non cliqué
                onglets[i].classList.remove("active-onglet");
            }
        }

        // Permet de savoir sur quel index Onglet on click
        console.log(onglets.indexOf(e.target));
        // On peut donc changer le contenu selon cet index

        for (let i = 0; i < contenus.length; i++) {
            if (i === onglets.indexOf(e.target)) {
                // Afin de donner une classe si target correspondante
                contenus[i].classList.add("active-contenu");
            } else {
                // Ou de retirer une classe sur les autres onglets
                // qui n'ont pas la e.target correspondante
                contenus[i].classList.remove("active-contenu");
            }
        }
    });
});
