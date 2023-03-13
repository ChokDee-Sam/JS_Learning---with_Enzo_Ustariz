// --------------------------------------
// --------------------------------------
// --------------- JSON -----------------
// --------------------------------------
// --------------------------------------

// Javascript Objet Notation
// Format de fichier permettant de stocker rapidement des données

// C'est l'intermédiaire entre le client et la base de Donnée
// Le format est en JSON (XML précédemment )

// --------------------------------------
// --------------------------------------
// ----------- APPEL avec XHR -----------
// --------------------------------------
// --------------------------------------

// Avant JSON, on faisait comme ça :

const xhr = new XMLHttpRequest();

// Configurer la requête
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");


// ---------------------
// Manière 1
// Charger dans la console en ancien format
// ---------------------


// xhr.onload = function(){
//     console.log(xhr.response);
// }

// xhr.send();

// ---------------------
// Manière 2
// Charger dans la console, puis convertir en JSON
// ---------------------

// xhr.onload = function(){
//     console.log(xhr.response);
// }

// xhr.onload = function(){
//     console.log(JSON.parse(xhr.response));
// }

// xhr.send();


// ---------------------
// Manière 3
// Demander une réponse directement en JSON
// ---------------------

xhr.responseType='json'

xhr.onload = function(){
    console.log(xhr.response);
}

xhr.send();


// --------------------------------------
// --------------------------------------
// ----------- CRÉER UNE LISTE ----------
// --------- À PARTIR DES DONNÉES -------
// --------------------------------------
// --------------------------------------

const liste = document.querySelector('.liste')
const btn = document.querySelector('.btn')

btn.addEventListener('click', ()=> {
    console.log('Hello World');
})