// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

let currentPlayer = "X";

const info = document.querySelector(".info");
info.textContent = `Au tour de ${currentPlayer}`;

const cells = document.querySelectorAll(".cell");
cells.forEach((cell) => cell.addEventListener("click", handleClick));

// ------------------------------------------------------------------------
// Représente les 9 cases : On va 'écrire' à l'intérieur grâce au click
// Si une case est déjà utilisé =  return
// call la fonction des combinaisons gagnantes
// ------------------------------------------------------------------------

// On va remplir ce tableau à 1 dimension
const currentGame = ["", "", "", "", "", "", "", "", ""];

// Pour éviter les futurs spams
let lock = false;

function handleClick(e) {
    const clickedBox = e.target; //
    const boxIndex = clickedBox.getAttribute("data-index");

    console.log(clickedBox); // la target
    console.log(boxIndex); // obtient l'attribut data-index de la target

    // N'écrit rien si la case est déjà rempli
    if (currentGame[boxIndex] !== "" || lock) {
        return;
    }

    currentGame[boxIndex] = currentPlayer;
    clickedBox.textContent = currentPlayer;

    console.log(currentGame);
    verification();
}

// ------------------------------------------------------------------------
// Vérifier les combinaisons gagnantes
// ------------------------------------------------------------------------

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function verification() {
    // Boucle dans chaque éléments du tableau des combinaisons gagnantes
    for (let i = 0; i < winningCombinations.length; i++) {
        const combinationToCheck = winningCombinations[i];

        // On crée 3 variables
        let a = currentGame[combinationToCheck[0]];
        let b = currentGame[combinationToCheck[1]];
        let c = currentGame[combinationToCheck[2]];

        if (a === "" || b === "" || c === "") {
            continue;
        } else if (a === b && b === c) {
            info.textContent = `Le joueur ${currentPlayer} a gagné ! Appuyez sur F5 pour recommencer.`;
            lock = true;
            return;
        }
    }

    // match nul, toutes les cases sont prise, sans gagnant.
    if (!currentGame.includes("")) {
        info.textContent = `Match Nul ! Appuyez sur F5 pour recommencer.`;
        lock = true;
        return;
    }

    switchPlayer();
}

// ------------------------------------------------------------------------
//  SWITCH PLAYER
// ------------------------------------------------------------------------

function switchPlayer() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    info.textContent = `Au tour de ${currentPlayer}`;
}
