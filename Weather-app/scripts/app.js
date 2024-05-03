// Script file for DOM manipulation and outputing things on the web page 
const cityForm = document.querySelector('form')
const card = document.querySelector('.card')

const cityDetails = document.querySelector('.details')

// here lies the function to update the ui with the requested data from the input field 
const updateUI = (data) => {
    // const cityName = data.name
    // const weatherCon = data.weather[0].description
    // const temp = data.main.temp

    // destructuring , inside the data, get the name and store it in the name variable, similarly, do same for the weather, and main 
    const { name, weather, main } = data;
    // inside the weather, given that it's an array, get the description property at index zero, and store it in description 
    const { description } = weather[0];
    // inside the main, object, get the temp property and store it in the temp variable 
    const { temp } = main;
    
        
    cityDetails.innerHTML = `
          <h5 class="my-3">${name}</h5>
            <div class="my-3">${description}</div>
                <div class="display-4 my-4">
                    <span>${temp}</span>
                    <span>&deg;C</span>
                </div>
        `;

    // remove the d-none class if present

    if (card.classList.contains('d-none')) {
                card.classList.remove('d-none'); 
    }
}

const updateCity = async (cityValue) => {
    const resolved = await getCity(cityValue)
    // return {
    //     weatherDetails: resolved.weather,
    //     mainDetals: resolved.main,
    //     windDet: resolved.wind,
    //     geoDetails: resolved.coord,
    //     locatDetails: resolved.sys
    // }
    return resolved
    }

cityForm.addEventListener('submit', e => {
    e.preventDefault();

    const cityValue = cityForm.city.value.trim()
    cityForm.reset()
    // console.log(cityValue)
    updateCity(cityValue)
        .then((data) => updateUI(data)) //console.log(data)) 
        .catch((err) => console.log(err))
})