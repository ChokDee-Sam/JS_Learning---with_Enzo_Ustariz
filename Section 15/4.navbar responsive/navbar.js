const liste = document.querySelector(".liste");
console.log(liste);

const btn = document.querySelector(".btn-responsive");

// ------------------------------
// Manière avec Toggle
// ------------------------------

// let toggle = true;

// btn.addEventListener("click", () => {
//     if (toggle) {
//         liste.classList.add("show");
//         toggle = false;
//     } else if (toggle === false) {
//         liste.classList.remove("show");
//         toggle = true;

//     }
// });

// ------------------------------
// Manière avec Toggle en Method Native JS
// ------------------------------

btn.addEventListener("click", () => {
    liste.classList.toggle("show");
});

// ------------------------------
// Remove Show au Resize Window
// ------------------------------

window.addEventListener("resize", () => {
    if (window.innerWidth > 650) {
        liste.classList.remove("show");
    }
});
