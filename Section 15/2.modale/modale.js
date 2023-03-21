const btn = document.querySelector(".btn");
const modal = document.querySelector(".modal");

let toggle = false;

// ----------------------------
// Pas top pour l'Accessibilité
// ----------------------------

// btn.addEventListener("click", () => {
//     toggle = !toggle;

//     if (toggle) {
//         modal.style.opacity = 1;
//     } else if (toggle === fasle) {
//         modal.style.opacity = 0;
//     }
// });

// ----------------------------
// Meilleure Accessibilité
// ----------------------------

btn.addEventListener("click", () => {
    toggle = !toggle;

    if (toggle) {
        modal.style.display = "block";
        setTimeout(() => {
            modal.style.opacity = 1;
        }, 10);
    } else if (toggle === false) {
        modal.style.opacity = 0;
        setTimeout(() => {
            modal.style.display = "none";
        }, 100);
    }
});
