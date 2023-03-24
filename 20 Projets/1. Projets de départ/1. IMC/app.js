const BMIData = [
    { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
    { name: "Bonne santé", color: "green", range: [18.5, 25] },
    { name: "Surpoids", color: "lightcoral", range: [25, 30] },
    { name: "Obésité modérée", color: "orange", range: [30, 35] },
    { name: "Obésité sévère", color: "crimson", range: [35, 40] },
    { name: "Obésité morbide", color: "purple", range: 40 },
];

// IMC = poids en kg / taille² en m

let inputCm = document.getElementById("height");
let inputKg = document.getElementById("weight");
let button = document.querySelector("button");
let bmiValue = document.querySelector(".bmi-value");
let result = document.querySelector(".result");

button.addEventListener("click", (e) => {

    e.preventDefault();
    let inputCmValue = inputCm.value;
    let inputKgValue = inputKg.value;

    if (!inputCmValue || !inputKgValue || inputCmValue < 0 || inputKgValue < 0) {
        bmiValue.textContent = "Woops !";
        bmiValue.style.color = "inherit";
        result.textContent = "Veuillez indiquer les bonnes informations !";
        return;
    }

    let bmi = (inputKgValue / ((inputCmValue / 100) * (inputCmValue / 100))).toFixed(1);
    bmiValue.textContent = bmi;

    for (let i = 0; i < BMIData.length; i++) {

        if ((bmi > BMIData[i].range[0]) & (bmi < BMIData[i].range[1])) {
            bmiValue.style.color = BMIData[i].color;
            result.textContent = `Résultat : ${BMIData[i].name}`;

        } else if (bmi > BMIData[5].range) {
            bmiValue.style.color = BMIData[5].color;
            result.textContent = `Résultat : ${BMIData[5].name}`;
        }
    }
});
