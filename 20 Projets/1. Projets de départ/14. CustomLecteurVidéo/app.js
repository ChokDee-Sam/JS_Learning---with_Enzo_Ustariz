// ----------------------------------------------------------------
// ----------------------------------------------------------------

const video = document.querySelector(".video");
const playToggler = document.querySelector(".play-toggler");
const togglerImg = document.querySelector(".play-toggler img");

// ----------------------------------------------------------------
//  LECTURE ET PAUSE : AVEC BOUTONS
// ----------------------------------------------------------------

video.addEventListener("click", togglePlay);
playToggler.addEventListener("click", togglePlay);

function togglePlay() {
    if (video.paused) {
        togglerImg.src = "ressources/pause.svg";
        video.play();
    } else {
        togglerImg.src = "ressources/play.svg";
        video.pause();
    }
}

// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------

const timersDisplay = document.querySelectorAll(".time-display");

// Au chargement de la page, pour éviter les bugs
video.addEventListener("loadeddata", fillDurationVariables);
window.addEventListener("load", fillDurationVariables);

let current;
let totalDuration;

function fillDurationVariables() {
    if (Number.isNaN(video.duration)) return;

    current = video.currentTime; // natif à JS
    totalDuration = video.duration; // Natif à JS

    formatValue(current, timersDisplay[0]);
    formatValue(totalDuration, timersDisplay[1]);

    // Retire les 2 events, car utilisés uniquement 1 fois au chargement
    video.removeEventListener("loadeddata", fillDurationVariables);
    window.removeEventListener("load", fillDurationVariables);
}

// ----------------------------------------------------------------
//  FORMAT : MINUTES ET SECONDES
// ----------------------------------------------------------------

function formatValue(val, element) {
    const currentMin = Math.trunc(val / 60);
    let currentSec = Math.trunc(val % 60);

    if (currentSec < 10) {
        currentSec = `0${currentSec}`;
    }

    element.textContent = `${currentMin}:${currentSec}`;
}

// ----------------------------------------------------------------
//  PROGRESS BAR
// ----------------------------------------------------------------

const progress = document.querySelector(".progress");

video.addEventListener("timeupdate", handleTimeUpdate);

function handleTimeUpdate() {
    current = video.currentTime;

    formatValue(current, timersDisplay[0]);

    // Permet de déplacer la timeLine de la vidéo automatiquement
    const progressPosition = current / totalDuration;
    progress.style.transform = `scaleX(${progressPosition})`;

    if (video.ended) {
        togglerImg.src = "ressources/play.svg";
    }
}

// ----------------------------------------------------------------
//  MUTE BOUTON
// ----------------------------------------------------------------

const muteBtn = document.querySelector(".mute-btn");
const muteIcon = document.querySelector(".mute-btn img");

muteBtn.addEventListener("click", handleMute);

function handleMute() {
    if (video.muted) {
        video.muted = false;
        muteIcon.src = "ressources/unmute.svg";
    } else {
        video.muted = true;
        muteIcon.src = "ressources/mute.svg";
    }
}

// ----------------------------------------------------------------
//  VOLUME
// ----------------------------------------------------------------

const volumeSlider = document.querySelector(".volume-slider");

volumeSlider.addEventListener("input", handleVolumeModification);

function handleVolumeModification() {
    video.volume = volumeSlider.value / 100;
    if (video.volume === 0) {
        muteIcon.src = "ressources/mute.svg";
    } else {
        muteIcon.src = "ressources/unmute.svg";
    }
}

// ----------------------------------------------------------------
// PROGRESS BAR LORS DE REDIMENSION DE FENÊTRE
// ----------------------------------------------------------------

const progressBar = document.querySelector(".progress-bar");

let rect = progressBar.getBoundingClientRect();
let largeur = rect.width;
console.log(rect);
window.addEventListener("resize", handleResize);

function handleResize() {
    rect = progressBar.getBoundingClientRect();
    largeur = rect.width;
}

progressBar.addEventListener("click", handleProgressNavigation);

function handleProgressNavigation(e) {
    const x = e.clientX - rect.left;

    const widthPercent = x / largeur;

    video.currentTime = video.duration * widthPercent;
}

// ----------------------------------------------------------------
// FULL SCREEN
// ----------------------------------------------------------------

const fullScreenToggler = document.querySelector(".fullscreen-toggler");
const videoContainer = document.querySelector(".video-container");

video.addEventListener("dblclick", toggleFullScreen);
fullScreenToggler.addEventListener("click", toggleFullScreen);

function toggleFullScreen() {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        videoContainer.requestFullscreen();
    }
}
