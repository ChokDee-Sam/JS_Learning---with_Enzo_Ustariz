// --------------------------------------
// --------------------------------------
// ------------- Promesses --------------
// --------------------------------------
// --------------------------------------

const promise1 = new Promise((resolve, reject)=> {

    console.log('Voici la Promise');

    resolve('les données sont arrivées')

})

// Si resolve
promise1.then((value)=> {
    console.log(value);
}).catch(()=> {             // si erreur
    console.log('Il y a eu une erreur');
})

console.log(promise1);