// ----------------------------------------------------------------
// Temps
// ----------------------------------------------------------------

let workTime = 10;
let restTime = 10;

// ----------------------------------------------------------------
// Affichage du temps selon le temps restant (fonction)
// ----------------------------------------------------------------

function formattedTime(time) {
    // On va diviser le paramètre par 60
    // en retirant les chiffres après la virgule, et en affichant uniquement les minutes
    return `${Math.trunc(time / 60)} :
    ${time % 60 < 10 ? `0${time % 60}` : time % 60}`;
    // Selon le restant en seconde,
    // Soit on ajoute un zéro si elles sont en dessous de 10, Soit on affiche les secondes
}

// ----------------------------------------------------------------
// Affichage du temps en HTML via la fonction
// ----------------------------------------------------------------

const displayWork = document.querySelector(".work-display-time");
const displayPause = document.querySelector(".pause-display-time");

displayWork.textContent = formattedTime(workTime);
displayPause.textContent = formattedTime(restTime);

// ----------------------------------------------------------------
//
// ----------------------------------------------------------------

const togglePlayBtn = document.querySelector(".toggle-btn");
togglePlayBtn.addEventListener("click", togglePomodoro);

let currentInterval = false;
let timerID;

// ----------------------------------------------------------------
// Fonction principale
// ----------------------------------------------------------------

function togglePomodoro() {
    handlePlayPause();

    if (currentInterval) return;
    currentInterval = true;

    workTime--;
    displayWork.textContent = formattedTime(workTime);
    timerID = setInterval(handleTicks, 1000);
}

// ----------------------------------------------------------------
// Gérer la pause en changeant l'image et le DataSet
// ----------------------------------------------------------------

let pause = false;
function handlePlayPause() {
    if (togglePlayBtn.getAttribute("data-toggle") === "play") {
        pause = false;
        togglePlayBtn.firstElementChild.src = "ressources/pause.svg";
        togglePlayBtn.setAttribute("data-toggle", "pause");
    } else {
        pause = true;
        togglePlayBtn.firstElementChild.src = "ressources/play.svg";
        togglePlayBtn.setAttribute("data-toggle", "play");
    }
}

// ----------------------------------------------------------------
// Les cycles
// ----------------------------------------------------------------

const cycles = document.querySelector(".cycles");
let cyclesNumber = 0;

// ----------------------------------------------------------------
// Gérer l'affichage du décompte et des cycles
// ----------------------------------------------------------------

function handleTicks() {
    if (!pause && workTime > 0) {
        workTime--;
        displayWork.textContent = formattedTime(workTime);
    } else if (!pause && !workTime && restTime > 0) {
        restTime--;
        displayPause.textContent = formattedTime(restTime);
    } else if (!pause && !workTime && !restTime) {
        workTime = 3;
        restTime = 3;
        displayWork.textContent = formattedTime(workTime);
        displayPause.textContent = formattedTime(restTime);

        cyclesNumber++;
        cycles.textContent = `Cycle(s) : ${cyclesNumber}`;
    }
}
