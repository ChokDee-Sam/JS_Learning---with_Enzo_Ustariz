// -----------------------------------------------------
// -----------------------------------------------------

const inputs = document.querySelectorAll("input");

inputs.forEach((element) => {
    element.addEventListener("invalid", handleValidation);
    element.addEventListener("input", handleValidation);
});

// -----------------------------------------------------
// -----------------------------------------------------

function handleValidation(e) {
    if (e.type === "invalid") {
        e.target.setCustomValidity("Ce champ NE PEUT être vide !!");
    } else if (e.type === "input") {
        e.target.setCustomValidity("");
    }
}

// -----------------------------------------------------

const cookieForm = document.querySelector("form");
cookieForm.addEventListener("submit", handleForm);

function handleForm(e) {
    e.preventDefault();
    const newCookie = {};

    inputs.forEach((element) => {
        const nameAttribut = element.getAttribute("name");
        newCookie[nameAttribut] = element.value;
    });

    newCookie.expires = new Date(
        new Date().getTime() + 7 * 24 * 60 * 60 * 1000
    );

    cookieForm.reset();
    createCookie(newCookie);

    console.log(newCookie);
}

// -----------------------------------------------------
