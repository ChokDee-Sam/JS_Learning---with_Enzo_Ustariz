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
    } else {
        showValidation({ index: 0, validation: false });
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
    } else {
        showValidation({ index: 1, validation: false });
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
    } else {
        showValidation({ index: 2, validation: true });
    }
}
