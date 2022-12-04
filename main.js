const elWeatherList = document.querySelector(".weather-list");
const elWeatherTemplate = document.querySelector(".weather-template").content;
const weatherFragment = document.createDocumentFragment();
const elForm = document.querySelector(".weather-form");
const elInput = document.querySelector(".weather-form__input");

const elWeatherBox = document.querySelector(".weather-box");
const elWeatherBoxTemplate = document.querySelector(".weather-box-template").content;

const elAllList = document.querySelector(".all-list");
const elAllTemplate = document.querySelector(".all-template").content;
const allFragment = document.createDocumentFragment();

// FIVE WEATHER RANDOM
function renderWeather(array, node) {
    array.forEach((element => {
        const weatherFragmentClone = elWeatherTemplate.cloneNode(true);

        // weatherFragmentClone.querySelector(".weather-list__img").src = "/images/sun.svg";
        weatherFragmentClone.querySelector(".weather-list__name").textContent = element.name;
        weatherFragmentClone.querySelector(".weather-list__clouds").textContent = element.weather.map(item => {
            return item.main;
        });
        const weatherId = element.weather.map(element => element.id);

        if (weatherId <= 232) {
            weatherFragmentClone.querySelector(".weather-list__img").src = "/images/thunderstorms.svg";
        } else if (weatherId <= 321) {
            weatherFragmentClone.querySelector(".weather-list__img").src = "/images/drizzle.svg";
        } else if (weatherId <= 531) {
            weatherFragmentClone.querySelector(".weather-list__img").src = "/images/rain.svg";
        } else if (weatherId <= 622) {
            weatherFragmentClone.querySelector(".weather-list__img").src = "/images/snow.svg";
        } else if (weatherId == 701) {
            weatherFragmentClone.querySelector(".weather-list__img").src = "/images/extreme.svg";
        } else if (weatherId == 800) {
            weatherFragmentClone.querySelector(".weather-list__img").src = "/images/sun.svg";
        } else if (weatherId <= 804) {
            weatherFragmentClone.querySelector(".weather-list__img").src = "/images/cloudy.svg";
        }
        weatherFragmentClone.querySelector(".weather-list__degree").textContent = Math.round(element.main.temp);
        weatherFragmentClone.querySelector(".weather-list__country").textContent = element.sys.country;

        weatherFragment.appendChild(weatherFragmentClone);
    }))
    node.appendChild(weatherFragment);
}

async function getUrl(country) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&appid=06d8ea122b95f5febbce9e17660814fa`);
        const data = await response.json()
        renderWeather([data], elWeatherList);

    } catch (error) {
        console.log(error);
    }
}
getUrl("Russia");
getUrl("Dubai")
getUrl("Turkey")
getUrl("Zimbabve")
getUrl("Tashkent");



function renderOneCountry(item) {

    elWeatherBox.innerHTML = null;
    item.forEach(element => {
        const fragmentBoxClone = elWeatherBoxTemplate.cloneNode(true);

        fragmentBoxClone.querySelector(".weather-box__degree").textContent = Math.round(element.main.temp);

        const weatherId = element.weather.map(element => element.id);
        if (weatherId <= 232) {
            fragmentBoxClone.querySelector(".weather-box__img").src = "/images/thunderstorms.svg";
            document.body.style.backgroundImage = "url('/images/thunderstorm.jpg')";
        } else if (weatherId <= 321) {
            fragmentBoxClone.querySelector(".weather-box__img").src = "/images/drizzle.svg";
            document.body.style.backgroundImage = "url('/images/drizzle.jpg')";
        } else if (weatherId <= 531) {
            fragmentBoxClone.querySelector(".weather-box__img").src = "/images/rain.svg";
            document.body.style.backgroundImage = "url('/images/rain.jpg')";
        } else if (weatherId <= 622) {
            fragmentBoxClone.querySelector(".weather-box__img").src = "/images/snow.svg";
            document.body.style.backgroundImage = "url('/images/snow.jpg')";
        } else if (weatherId == 701) {
            fragmentBoxClone.querySelector(".weather-box__img").src = "/images/extreme.svg";
            document.body.style.backgroundImage = "url('/images/extreme.jpg')";
        } else if (weatherId == 800) {
            fragmentBoxClone.querySelector(".weather-box__img").src = "/images/sun.svg";
            document.body.style.backgroundImage = "url('/images/sun.jpg')";
        } else if (weatherId <= 804) {
            fragmentBoxClone.querySelector(".weather-box__img").src = "/images/cloudy.svg";
            document.body.style.backgroundImage = "url('/images/cloudy.jpg')";
        }
        fragmentBoxClone.querySelector(".weather-box__name-span").textContent = element.name;
        fragmentBoxClone.querySelector(".weather-box__country").textContent = element.sys.country;
        fragmentBoxClone.querySelector(".weather-box__speed-span").textContent = element.wind.speed;

        weatherFragment.appendChild(fragmentBoxClone);
    })
    elWeatherBox.appendChild(weatherFragment);
}


async function getCountryUrl(country) {
    try {

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&appid=06d8ea122b95f5febbce9e17660814fa`);

        const data = await response.json()
        renderOneCountry([data]);

    } catch (error) {
        console.log(error);
    }
}


function renderAll(data, array){

    array.innerHTML = null;
    data.list.forEach(element =>{
        const allFragmentClone = elAllTemplate.cloneNode(true);
        allFragmentClone.querySelector(".all-list__time").textContent = element.dt_txt;
        allFragmentClone.querySelector(".all-list__degree").textContent = Math.round(element.main.temp);

        const weatherId = element.weather.map(element => element.id);
        if (weatherId <= 232) {
            allFragmentClone.querySelector(".all-list__img").src = "/images/thunderstorms.svg";

        } else if (weatherId <= 321) {
            allFragmentClone.querySelector(".all-list__img").src = "/images/drizzle.svg";

        } else if (weatherId <= 531) {
            allFragmentClone.querySelector(".all-list__img").src = "/images/rain.svg";

        } else if (weatherId <= 622) {
            allFragmentClone.querySelector(".all-list__img").src = "/images/snow.svg";

        } else if (weatherId == 701) {
            allFragmentClone.querySelector(".all-list__img").src = "/images/extreme.svg";

        } else if (weatherId == 800) {
            allFragmentClone.querySelector(".all-list__img").src = "/images/sun.svg";

        } else if (weatherId <= 804) {
            allFragmentClone.querySelector(".all-list__img").src = "/images/cloudy.svg";
        }
        allFragmentClone.querySelector(".all-list__main").textContent = element.weather.map(element => element.main);
        allFragment.appendChild(allFragmentClone);
    });
    array.appendChild(allFragment);
}
async function getAllUrl(country) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?&q=${country}&units=metric&appid=06d8ea122b95f5febbce9e17660814fa`);
        const data = await response.json();
        data.list.splice(5);
        console.log(data);
        renderAll(data,elAllList);
        
    } catch (error) {
        console.log(error);
    }
}
getCountryUrl("Tashkent");
getAllUrl("Tashkent");
// DEBOUNCE FUNCTION
function onChange() {
    getCountryUrl(elInput.value);
    getAllUrl(elInput.value);
    console.log(elInput.value);
}
const debounce = (fn, ms) => {
    let timeOut;
    return function () {
        const fnCall = () => {
            fn.apply(this, arguments)
        }

        clearTimeout(timeOut)

        timeOut = setTimeout(fnCall, ms)
    };
};
onChange = debounce(onChange, 1000);
elForm.addEventListener("keyup", onChange);






