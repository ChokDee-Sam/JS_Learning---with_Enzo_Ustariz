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

    rangeLabelValue.textContent = gradientData.angle
}

populateUI();

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------