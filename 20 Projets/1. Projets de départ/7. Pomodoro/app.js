// ----------------------------------------------------------------
// Temps
// ----------------------------------------------------------------

let workTime = 1800;
let restTime = 300;

// ------

let animWork = document.querySelector(".work");
let animRest = document.querySelector(".rest");

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
        togglePlayBtn.setAttribute("data-toggle", "pause");
        togglePlayBtn.firstElementChild.src = "ressources/pause.svg";

        // Lance l'animation avant la fonction handleTicks
        if (workTime) {
            handleClassAnimation({ work: true, rest: false });
        } else {
            handleClassAnimation({ work: false, rest: true });
        }
    } else {
        pause = true;
        togglePlayBtn.setAttribute("data-toggle", "play");
        togglePlayBtn.firstElementChild.src = "ressources/play.svg";
        handleClassAnimation({ work: false, rest: false });
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
        handleClassAnimation({ work: true, rest: false });
    } else if (!pause && !workTime && restTime > 0) {
        restTime--;
        displayPause.textContent = formattedTime(restTime);
        handleClassAnimation({ work: false, rest: true });
    } else if (!pause && !workTime && !restTime) {
        workTime = 1799;
        restTime = 3;
        displayWork.textContent = formattedTime(workTime);
        displayPause.textContent = formattedTime(restTime);
        handleClassAnimation({ work: true, rest: false });

        cyclesNumber++;
        cycles.textContent = `Cycle(s) : ${cyclesNumber}`;
    }
}

// ----------------------------------------------------------------
// Animation
// ----------------------------------------------------------------

function handleClassAnimation(itemState) {
    for (const item in itemState) {
        if (itemState[item]) {
            document.querySelector(`.${item}`).classList.add("active");
        } else {
            document.querySelector(`.${item}`).classList.remove("active");
        }
    }
}

// ----------------------------------------------------------------
// Reset
// ----------------------------------------------------------------

const resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener("click", reset);

function reset() {
    workTime = 1799;
    restTime = 300;

    displayWork.textContent = formattedTime(workTime);
    displayPause.textContent = formattedTime(restTime);

    cyclesNumber = 0;
    cycles.textContent = `Cycle(s) : 0`;

    clearInterval(timerID);
    currentInterval = false;
    pause = true;

    togglePlayBtn.setAttribute("data-toggle", "play");
    togglePlayBtn.firstElementChild.src = "ressources/play.svg";

    handleClassAnimation({ work: false, rest: false });
}
