// ----------------------------------------------------------
// ----------------------------------------------------------

const inputsValidity = {
    user: false,
    email: false,
    password: false,
    passwordConfirmation: false,
};

const form = document.querySelector("form");
const container = document.querySelector(".container");

form.addEventListener("submit", handleForm);

let isAnimating = false;

// fonction sur bouton
function handleForm(e) {
    e.preventDefault();
    const keys = Object.keys(inputsValidity);
    const failedInputs = keys.filter((key) => {
        if (!inputsValidity[key]) {
            return key;
        }
    });

    // animation si erreur
    if (failedInputs.length && !isAnimating) {
        isAnimating = true;
        container.classList.add("shake");

        setTimeout(() => {
            container.classList.remove("shake");
            isAnimating = false;
        }, 400);

        failedInputs.forEach((input) => {
            const index = keys.indexOf(input);
            showValidation({ index: index, validation: false });
        });
    } else {
        alert("Données envoyées avec succès !");
    }
}

// ----------------------------------------------------------
// ----------------------------------------------------------

function showValidation({ index, validation }) {
    if (validation) {
        validationIcons[index].style.display = "inline";
        validationIcons[index].src = "ressources/check.svg";
        if (validationTexts[index]) {
            validationTexts[index].style.display = "none";
        }
    } else {
        validationIcons[index].style.display = "inline";
        validationIcons[index].src = "ressources/error.svg";
        if (validationTexts[index]) {
            validationTexts[index].style.display = "block";
        }
    }
}

// ----------------------------------------------------------
// ----------------------------------------------------------

// Les 2 icônes : validation et invalidation
const validationIcons = document.querySelectorAll(".icone-verif");
const validationTexts = document.querySelectorAll(".error-msg");

// Le premier input
const userInput = document.querySelector(".input-group:nth-child(1) input");

// Event à l'input, et en click de sorti d'input
userInput.addEventListener("input", userValidation);
userInput.addEventListener("blur", userValidation);

//
function userValidation() {
    console.log(userInput.value);
    if (userInput.value.length >= 3) {
        showValidation({ index: 0, validation: true });
        inputsValidity.user = true;
    } else {
        showValidation({ index: 0, validation: false });
        inputsValidity.user = false;
    }
}

// ----------------------------------------------------------
// ----------------------------------------------------------

// Le mail input
const mailInput = document.querySelector(".input-group:nth-child(2) input");

// Event à l'input, et en click de sorti d'input
mailInput.addEventListener("input", mailValidation);
mailInput.addEventListener("blur", mailValidation);

//
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function mailValidation() {
    if (regexEmail.test(mailInput.value)) {
        showValidation({ index: 1, validation: true });
        inputsValidity.email = true;
    } else {
        showValidation({ index: 1, validation: false });
        inputsValidity.email = false;
    }
}
// ----------------------------------------------------------
// ----------------------------------------------------------

// Le password input
const pswInput = document.querySelector(".input-group:nth-child(3) input");

// Event à l'input, et en click de sorti d'input
pswInput.addEventListener("input", passwordValidation);
pswInput.addEventListener("blur", passwordValidation);

// ce qui sera modifier selon la longueur et le regex d'apres
const passwordVerification = {
    length: false,
    symbol: false,
    number: false,
};

// ce qui permettra de comparer
const regexList = {
    symbol: /[^a-zA-Z0-9\s]/,
    number: /[0-9]/,
};

// notre futur input
let passwordValue;

function passwordValidation(e) {
    passwordValue = pswInput.value;
    let validationResult = 0;

    // boucle pour objet
    for (const prop in passwordVerification) {
        // verifier la length
        if (prop === "length") {
            if (passwordValue.length < 6) {
                passwordVerification.length = false;
            } else {
                passwordVerification.length = true;
                validationResult++;
            }
            continue;
        }

        // vérifie les Regex symbol et number
        if (regexList[prop].test(passwordValue)) {
            passwordVerification[prop] = true;
            validationResult++;
        } else {
            passwordVerification[prop] = false;
        }
    }

    // Permet l'affichage de l'icône de validation ou non
    if (validationResult !== 3) {
        showValidation({ index: 2, validation: false });
        inputsValidity.password = false;
    } else {
        showValidation({ index: 2, validation: true });
        inputsValidity.password = true;
    }

    passwordStrength();
}

// ----------------------------------------------------------
// Afficher la force du password
// ----------------------------------------------------------

const lines = document.querySelectorAll(".lines div");

function passwordStrength() {
    const passwordLength = pswInput.value.length;

    if (!passwordLength) {
        addLines(0);
    } else if (
        passwordLength > 9 &&
        passwordVerification.symbol &&
        passwordVerification.number
    ) {
        addLines(3);
    } else if (
        (passwordLength > 6 && passwordVerification.symbol) ||
        passwordVerification.number
    ) {
        addLines(2);
    } else {
        addLines(1);
    }
}

//
function addLines(numberOfLines) {
    lines.forEach((element, index) => {
        if (index < numberOfLines) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    });
    if ((validationIcons[3].style.display = "inline")) {
        confirmPassword();
    }
}

// ----------------------------------------------------------
// Confirm passwords
// ----------------------------------------------------------

// Le confirm password input
const confirmInput = document.querySelector(".input-group:nth-child(4) input");

// Event à l'input, et en click de sorti d'input
confirmInput.addEventListener("input", confirmPassword);
confirmInput.addEventListener("blur", confirmPassword);

//
function confirmPassword() {
    const confirmedValue = confirmInput.value;

    if (!confirmedValue && !passwordValue) {
        validationIcons[3].style.display = "none";
    } else if (confirmedValue != passwordValue) {
        showValidation({ index: 3, validation: false });
        inputsValidity.passwordConfirmation = false;
    } else {
        showValidation({ index: 3, validation: true });
        inputsValidity.passwordConfirmation = true;
    }
}
