// --------------------------------------
// --------------------------------------
// ------------- Async & Await --------------
// --------------------------------------
// --------------------------------------

// Async devant une fonction = 
// return une promesse qui s'auto-résout
// comme ci on allait directement dans le .then d'une promesse

async function essai() {
    const promise2 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Action effectuée"), 1000);
    });

    let resultat = await promise2;
    console.log(resultat);
}

essai();
