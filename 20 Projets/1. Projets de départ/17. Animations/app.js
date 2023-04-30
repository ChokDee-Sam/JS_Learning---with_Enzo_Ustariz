// -------------------------------------------------------------------
// Custom Mouse
// -------------------------------------------------------------------

window.addEventListener("mousemove", handleCustomCursor);
const customCursor = document.querySelector(".custom-cursor");

function handleCustomCursor(e) {
    customCursor.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;
}

// -------------------------------------------------------------------

const title = document.querySelector("h1");
const subtitle = document.querySelector(".subtitle");
const heroPushLink = document.querySelector(".hero-push-link");
const txt = "Porsche, set free.";

// -------------------------------------------------------------------
// Effet machine à écrire
// -------------------------------------------------------------------

function typewriter(text, index) {
    if (index > 3) subtitle.classList.add("active");
    if (index > 6) heroPushLink.classList.add("active");
    if (index < text.length) {
        setTimeout(() => {
            title.innerHTML += `<span>${text[index]}</span>`;
            typewriter(text, index + 1);
        }, 200);
    }
}
setTimeout(() => {
    typewriter(txt, 0);
}, 300);

// -------------------------------------------------------------------
// Push down button
// -------------------------------------------------------------------

heroPushLink.addEventListener("click", slideDown);

function slideDown(e) {
    e.preventDefault();
    window.scrollTo({
        top: document.querySelector(`${e.target.getAttribute("href")}`)
            .offsetTop, // dans le futur, utiliser 'scrollIntoView'
        behavior: "smooth",
    });
}

// -------------------------------------------------------------------
// Scroll animations : selection des multiples éléments
// -------------------------------------------------------------------

// On prend tous les h2 grâce au spread : on les mets dans un tableau
// Pareil pour la classe suivante
const generalAnimatedElements = [
    ...document.querySelectorAll("h2"),
    ...document.querySelectorAll(".section-subtitle"),
];

// On prend tous les éléments individuellement
const discoverSectionElements = [
    document.querySelector(".text-discover-content h3"),
    document.querySelector(".text-discover-content p"),
    document.querySelector(".discover-link"),
    document.querySelector(".discover-main-img"),
];

// On prend aussi les containers de chaque ensemble texte / image
const slideInContent = [
    ...document.querySelectorAll(".side-apparition-container"),
];

// On crée une variable qui contient tous les 3 ensembles
const animatedContents = [
    ...generalAnimatedElements,
    ...discoverSectionElements,
    ...slideInContent,
];

// -------------------------------------------------------------------
// Animation
// -------------------------------------------------------------------

// On laisse un espace de -10% en bas avant l'apparition, pour 'aérer'
const intersectionObserver = new IntersectionObserver(handleIntersect, {
    rootMargin: "-10%",
});

animatedContents.forEach((el) => intersectionObserver.observe(el));

// Permet d'ajouter la classe  active lors de l'intersection
function handleIntersect(entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            intersectionObserver.unobserve(entry.target);
        }
    });
}
