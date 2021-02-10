import "./style.css";

let container = document.getElementById("container");

const form = document.getElementById("form");
let weatherTxt = document.getElementById("weatherTxt");
const img = document.querySelector("img");

img.style.visibility = "hidden";

const getImgSrc = async function (searchTerm) {
    try {
        let response = await fetch(
            `https://api.giphy.com/v1/gifs/translate?api_key=Wg1pcdQ6PLj2OI7BN8rVpChC00vq1Szc&s=${searchTerm}`,
            { mode: "cors" }
        );
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        } else {
            let responseJSON = await response.json();
            // img.src = responseJSON.data.images.original.url;
            // return responseJSON.data.images.original.url;
            return {
                weather: searchTerm,
                imgSrc: responseJSON.data.images.original.url,
            };
        }
    } catch (e) {
        console.log(`getImg: ${e}`);
    }
};

const getWeather = async function (where) {
    try {
        let response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${where}&APPID=13df276a9ad2a9aaa3c0a91ff50c35c3`,
            { mode: "cors" }
        );
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        } else {
            let responseJSON = await response.json();
            return responseJSON.weather[0].description;
        }
    } catch (e) {
        return "say what";
    }
};

form.addEventListener("submit", function (e) {
    e.preventDefault();
    weatherTxt.textContent = "loading";
    img.style.visibility = "hidden";
    let weather = getWeather(e.target.where.value);
    let imgSrc = weather.then(getImgSrc);
    imgSrc.then((response) => {
        img.onload = () => {
            weatherTxt.textContent = response.weather;
            img.style.visibility = "visible";
        };
        img.src = response.imgSrc;
    });
});
