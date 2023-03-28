// ----------------------------------------------------------
// ----------------------------------------------------------
//                  RÉCUPÉRER LES DONNÉES
// ----------------------------------------------------------
// ----------------------------------------------------------
// On récupère des données de manière asynchrone, dans une API
// On transforme ces données au format JSON
// Puis, on crée un Objet avec uniquement les données qui nous intéressent
// ----------------------------------------------------------
// ----------------------------------------------------------

const loader = document.querySelector(".loader-container");
const errorInformation = document.querySelector(".error-information");

async function getWeatherData() {
    try {
        const response = await fetch(
            "http://api.airvisual.com/v2/nearest_city?key=5f684ad9-440e-4b8c-90dd-1e2e5f8327d5"
        ).catch(() => {
            // On peut ajouter un message d'erreur personnalisé, ou autres actions...
            // À noter que Fetch peut uniquement renvoyer une erreur réseau
            throw new Error("Problème de connexion internet");
        });

        // -------------------------
        // Ceci est pour une erreur coté client / coté serveur
        // -------------------------

        if (!response.ok) {
            cityName.remove();
            countryName.remove();
            temperature.remove();

            // ce 'throw new Error' stoppe la fonction,
            // car c'est ensuite géré par le gestionnaire d'erreur juste après (catch (error)
            throw new Error(
                `Erreur ${response.status}, ${response.statusText}`
            );
        }

        const responseData = await response.json();
        const sortedData = {
            city: responseData.data.city,
            country: responseData.data.country,
            iconId: responseData.data.current.weather.ic,
            temperature: responseData.data.current.weather.tp,
        };

        populateUI(sortedData);
    } catch (error) {
        loader.classList.remove("active");
        errorInformation.textContent = error.message;
    }
}
getWeatherData();

//pour tester d'autres types d'erreurs
// document.querySelector("button").addEventListener("click", getWeatherData);

// ----------------------------------------------------------
// ----------------------------------------------------------
//                  AFFICHER LES DONNÉES
// ----------------------------------------------------------
// ----------------------------------------------------------

const cityName = document.querySelector(".city-name");
const countryName = document.querySelector(".country-name");
const temperature = document.querySelector(".temperature");
const infoIcon = document.querySelector(".info-icon");

function populateUI(data) {
    cityName.textContent = data.city;
    countryName.textContent = data.country;
    temperature.textContent = `${data.temperature}°`;
    infoIcon.src = `ressources/icons/${data.iconId}.svg`;
    infoIcon.style.width = "150px";
    loader.classList.remove("active");
}

// ----------------------------------------------------------
// ----------------------------------------------------------
//                GÉRER LES ERREURS POSSIBLES
// ----------------------------------------------------------
// ----------------------------------------------------------

// Voir la method .catch dans le Try
// catch(() => { throw new Error("Problème de connexion internet") });
// On peut ajouter un message d'erreur personnalisé, ou autres actions...
// À noter que Fetch peut uniquement renvoyer une erreur réseau

// Et voir le 'throw new Error'
// Celui-ci stoppe la fonction,
// car c'est ensuite géré par le gestionnaire d'erreur juste après (catch (error)
