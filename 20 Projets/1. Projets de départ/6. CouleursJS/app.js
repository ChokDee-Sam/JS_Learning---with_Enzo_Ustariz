// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

function letsGo() {
    // Quelques variables
    const inputs = document.querySelectorAll("input");
    console.log(inputs);
    let settings = [];
    // const inputsNew = [...document.querySelectorAll("input")]
    // console.log(inputsNew);

    // Boucle sur chaque elements distinct qui aura un index
    inputs.forEach((element, index) => {
        // Un Event sur chaque input
        element.addEventListener("input", () => {
            // on boucle pour avoir les 3 settings (1 après chaque input)
            settings[index] = element.value;

            // 3 conditions pour avoir des attributs après un premier input attribué
            if (settings[0] === undefined) settings[1] = "white";
            if (settings[1] === undefined) settings[1] = "white";
            if (settings[2] === undefined) settings[2] = 90;

            console.log(settings);

            // On met nos settings dans le Linear-gradient
            let gradient = `linear-gradient(${settings[2]}deg, ${settings[0]}, ${settings[1]})`;
            // On attribue le gradient à notre Body
            document.style.background = `${gradient}`;
        });
    });
}

// letsGo();

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

const colorLabels = [...document.querySelectorAll(".input-group label")];
const colorPickerInputs = [...document.querySelectorAll('input[type="color"]')];
const rangeLabelValue = document.querySelector(".orientation-value");

console.log(colorLabels);
console.log(colorPickerInputs);
console.log(rangeLabelValue);

const gradientData = {
    angle: 90,
    colors: ["#FF5F6D", "#FFC371"],
};

// -------------------
// -------------------

function populateUI() {
    // Les 2 Labels auront le texte issue de gradientData.colors
    colorLabels[0].textContent = gradientData.colors[0];
    colorLabels[1].textContent = gradientData.colors[1];

    // Les 2 Labels auront le background color issue de gradientData.colors
    colorLabels[0].style.background = gradientData.colors[0];
    colorLabels[1].style.background = gradientData.colors[1];

    // Les 2 inputs type Color auront la Value issue de gradientData.colors
    colorPickerInputs[0].value = gradientData.colors[0];
    colorPickerInputs[1].value = gradientData.colors[1];

    // On attribue les valeurs du gradient background
    document.body.style.background = `linear-gradient(${gradientData.angle}deg, ${gradientData.colors[0]}, ${gradientData.colors[1]})`;

    rangeLabelValue.textContent = gradientData.angle;

    adaptInputsColor();
}

populateUI();

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
// CHANGE LA COULEUR DE CHAQUE LABEL, EN FONCTION DE LA LUMINOSITÉ
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

function adaptInputsColor() {
    colorLabels.forEach((label) => {
        const hexColor = label.textContent.replace("#", "");
        console.log(hexColor);

        // extrait 2 chiffres/lettres, puis converti le tout en Hexadecimal
        const red = parseInt(hexColor.slice(0, 2), 16);
        const green = parseInt(hexColor.slice(2, 4), 16);
        const blue = parseInt(hexColor.slice(4, 6), 16);
        console.log(red, green, blue);

        // Calcule le taux de luminosité
        const yiq = (red * 299 + green * 587 + blue * 114) / 1000;
        console.log(yiq);

        // Couleur de chaque Label en fonction du taux de luminosité
        if (yiq >= 128) {
            label.style.color = "#111111";
        } else {
            label.style.color = "#f1f1f1";
        }
    });
}

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
// CHANGER L'ORIENTATION DU DÉGRADÉ (EN DEGRÉ)
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

const rangeInput = document.querySelector(".inp-range");
rangeInput.addEventListener("input", handleInclination);

function handleInclination() {
    gradientData.angle = rangeInput.value;
    rangeLabelValue.textContent = `${gradientData.angle}°`;
    populateUI();
}

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
// OBTENIR L'INDEX ET LA VALEUR, SUR CHAQUE INPUT
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

colorPickerInputs.forEach((input) =>
    input.addEventListener("input", colorInputModification)
);

function colorInputModification(e) {
    const currentIndex = colorPickerInputs.indexOf(e.target);
    console.log(currentIndex);
    // console.log(colorPickerInputs);

    gradientData.colors[currentIndex] = e.target.value.toUpperCase();
    console.log(gradientData);
    populateUI();
}

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
// FONCTIONNALITÉ BOUTON : COPIER LE DÉGRADÉ
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

const copyBtn = document.querySelector(".copy-btn");
copyBtn.addEventListener("click", handleGradientCopy);

let lock = false; // Pour éviter les Spams Click, démarre sur False

function handleGradientCopy() {
    const gradient = `linear-gradient(${gradientData.angle}deg, ${gradientData.colors[0]}, ${gradientData.colors[1]})`;
    // Pour copier l'élément entre parenthèse
    navigator.clipboard.writeText(gradient);

    if (lock) return;

    lock = true; // Lock le Spam Click
    copyBtn.classList.add("active"); // Fait apparaître la Classe

    setTimeout(() => {
        // Effectue ces actions 1 seconde plus tard
        copyBtn.classList.remove("active");
        lock = false;
    }, 1000);
}

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
// FONCTIONNALITÉ BOUTON : COULEURS RANDOM
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

const randomGradientBtn = document.querySelector(".random-btn");
randomGradientBtn.addEventListener("click", createRandomGradient);

function createRandomGradient() {
    for (let i = 0; i < colorLabels.length; i++) {
        randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        console.log(randomColor);
        // console.log(colorlabels.length);
        console.log(gradientData);

        gradientData.colors[i] = randomColor.toUpperCase()
    }
    populateUI();
}
