// ----------------------------------------------------------
// ----------------------------------------------------------

const loader = document.querySelector(".loader-container");
const errorInformation = document.querySelector(".error-information");

// const cityName = document.querySelector(".city-name");
// const countryName = document.querySelector(".country-name");
// const infoIconContainer = document.querySelector(".info-icon-container");

// ----------------------------------------------------------
// On récupère des données de manière asynchrone, dans une API
// On transforme ces données au format JSON
// Puis on crée un Objet avec uniquement les données qui nous intéressent
// ----------------------------------------------------------

async function getWeatherData() {
    try {
        const response = await fetch(
            "http://api.airvisual.com/v2/nearest_city?key=5f684ad9-440e-4b8c-90dd-1e2e5f8327d5"
        );
        console.log(response);

        const responseData = await response.json();
        // console.log(responseData);

        const sortedData = {
            city: responseData.data.city,
            country: responseData.data.country,
            iconId: responseData.data.current.weather.ic,
            temperature: responseData.data.current.weather.tp,
        };
        // console.log(sortedData);
    } catch (error) {}
}

getWeatherData();
