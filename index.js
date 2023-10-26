 //const API_KEY="d1845658f92b31c64bd94f06f7188c9c";

// // function renderWeatherInfo(data){
// //     let newpara=document.createElement('p');
// //     newpara.textContent=`${data?.main?.temp.toFixed(2)}C`;
// //     document.body.appendChild(newpara);
// // }
// // async function fetchWeatherDetails(){
// //     try{
// //     let city="goa";
// //     const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
// //     const data=await response.json();
// //     console.log(data);
// //     renderWeatherInfo(data);
// //     }
// //     catch(err){

// //     }
// // }
// // async function showCustomWeather(){
// //     try{
    
// //     const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
// //     const data=await response.json();
// //     console.log(data);
// //     renderWeatherInfo(data);
// //     }
// //     catch(err){

// //     }
// // }
// // function getLocation(){
// //     if(navigator.geolocation){
// //         navigator.geolocation.getCurrentPosition(showPosition);
// //     }
// //     else{
// //         console.log("no data found")
// //     }
// // }
// // function showPosition(position){
// //     let lat=position.coords.latitude;
// //     let long=position.coords.longitude;
// // }
// const userTab=document.querySelector("[data-userWeather]");
// const searchTab=document.querySelector("[data-searchWeather]");
// const userContainer=document.querySelector(".weather-container");
// const grantAccessContainer=document.querySelector(".grant-location-container");

// const searchForm=document.querySelector("[data-searchForm]");
// const loadingScreen=document.querySelector(".loading_container");
// const userInfoContainer=document.querySelector(".user-info-container");
// let oldTab=userTab;
// oldTab.classList.add("current-tab");
// // getfromSessionStorage();
// function switchTab(newTab){
//     if(oldTab!=newTab){
//         oldTab.classList.remove("current-tab");
//         oldTab=newTab;
//         oldTab.classList.add("current-tab");
//     }
//     if(!searchForm.classList.contains("active")){
//         grantAccessContainer.classList.remove("active");
//         userInfoContainer.classList.remove("active");
//         searchForm.classList.add("active");
//     }
//     else{
        
//         searchForm.classList.remove("active");
//         userInfoContainer.classList.remove("active");
//         getfromSessionStorage();
         

//     }
// }
// userTab.addEventListener('click',()=>{
//     switchTab(userTab);
// })
// searchTab.addEventListener('click',()=>{
//     switchTab(searchTab);
// })
// function getfromSessionStorage(){
//     const localCoordinates=sessionStorage.getItem("user-coordinates");
//     if(!localCoordinates){
//         grantAccessContainer.classList.add("active");

//     }
//     else{
//         const coordinates=JSON.parse(localCoordinates);
//         fetchUserWeatherInfo(coordinates);
//     }

// }
// async function fetchUserWeatherInfo(coordinates){
//     const {lat,lon}=coordinates;
//     // make grant invisible
//     grantAccessContainer.classList.remove("active");
//     loadingScreen.classList.add("active");
//     try{
    
//     const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
//     const data=await response.json();
//     loadingScreen.classList.remove("active");
//     userInfoContainer.classList.add("active");
//     renderWeatherInfo(data);
    
//     }
//     catch(err){
//     loadingScreen.classList.remove("active");


//     }
    
// }
// function renderWeatherInfo(WeatherInfo){
//     const cityName=document.querySelector("[data-cityName]");
//     const countryIcon=document.querySelector("[data-countryIcon]");
//     const desc =document.querySelector("[data-weatherDesc]");
//     const weatherIcon =document.querySelector("[data-weatherIcon]");
//     const temp=document.querySelector("[data-temp]");
//     const windspeed =document.querySelector("[data-windspeed]");
//     const humidity=document.querySelector("[data-humidity]");
//     const cloudiness=document.querySelector("[data-cloudiness]");
//     cityName.innerText=WeatherInfo?.name;
//     countryIcon.src=`https://flagcdn.com/144x108/${WeatherInfo?.sys?.country.toLowerCase()}.png`;
//     desc.innerText=WeatherInfo?.weather?.[0]?.description;
//     weatherIcon.src=`https://openweathermap.org/img/w/${WeatherInfo?.weather?.[0]?.icon}.png`;
//     temp.innerText=WeatherInfo?.wind?.speed;
//     windspeed.innerText=WeatherInfo?.main?.humidity;
//     cloudiness.innerText=WeatherInfo?.clouds?.all;

// }
// function getLocation(){
//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(showPosition);
//     }
//     else{
//         console.log("no data found")
//     }
// }
// function showPosition(position){
//     const userCoordinates={
//      lat:position.coords.latitude,
//      long:position.coords.longitude,
//     }
//     sessionStorage.setItem("user-coordinates",Json.stringify(userCoordinates));
//     fetchUserWeatherInfo(userCoordinates);
// }
// const grantAccessButton=document.querySelector("[data-grantAccess]");
// grantAccessButton.addEventListener('click',getLocation);
// const searchInput=document.querySelector("[data-searchInput]");
// searchForm.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     let cityName=searchInput.value ;
//     if(cityName==""){
//         return;
//     }
//     else{
//         fetchSearchWeatherInfo(cityName);
//     }

// })
// async function fetchSearchWeatherInfo(city){
//     loadingScreen.classList.add("active");
//     userInfoContainer.classList.remove("active");
//     grantAccessContainer.classList.remove("active");
    
//     try{
    
//     const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
//     const data=await response.json();
//     loadingScreen.classList.remove("active");
//     userInfoContainer.classList.add("active");
//     renderWeatherInfo(data);
    
//     }
//     catch(err){

//     }
// }
// API Key
const API_KEY = "168771779c71f3d64106d8a88376808a";

// Tab Switching 
const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const searchForm = document.querySelector("[data-searchForm]");
const userInfoContainer = document.querySelector(".userInfoContainer");
const grantAccessContainer = document.querySelector(
    ".grantLocationContainer"
);
const loadingContainer = document.querySelector('.loadingContainer');

const notFound = document.querySelector('.errorContainer');
const errorBtn = document.querySelector('[data-errorButton]');
const errorText = document.querySelector('[data-errorText]');
const errorImage = document.querySelector('[data-errorImg]');

let currentTab = userTab;
currentTab.classList.add("currentTab");
getFromSessionStorage();
// console.log(userTab);
// console.log(searchTab);

function switchTab(newTab) {
    notFound.classList.remove("active");
    // check if newTab is already selected or not 
    if (currentTab != newTab) {
        currentTab.classList.remove("currentTab");
        currentTab = newTab;
        currentTab.classList.add("currentTab");

        // Check which TAb is Selected - search / your

        // If Search Form not contains active class then add  [Search Weather]
        if (!searchForm.classList.contains("active")) {
            searchForm.classList.add("active");
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
        }
        // Your Weather
        else {
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            getFromSessionStorage();
        }
    }
}

userTab.addEventListener('click', () => {
    switchTab(userTab);
});

searchTab.addEventListener('click', () => {
    switchTab(searchTab);
});


function getFromSessionStorage() {
    const localCoordinates = sessionStorage.getItem("userCoordinates");
    // console.log(localCoordinates);

    // Local Coordinates Not present - Grant Access Container
    if (!localCoordinates) {
        grantAccessContainer.classList.add('active');
    }
    else {
        const coordinates = JSON.parse(localCoordinates);
        fetchWeatherInfo(coordinates);
    }
}

async function fetchWeatherInfo(coordinates) {
    const { lat, lon } = coordinates;
    // Remove Active Class from the Grant access Container
    grantAccessContainer.classList.remove('active');

    // loading 
    loadingContainer.classList.add('active');

    // try - catch Block
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);

        const data = await response.json();
        if (!data.sys) {
            throw data;
        }
        loadingContainer.classList.remove('active');
        userInfoContainer.classList.add('active');
        renderWeatherInfo(data);
    }
    catch (err) {
        loadingContainer.classList.remove('active');
        notFound.classList.add('active');
        errorImage.style.display = 'none';
        errorText.innerText = `Error: ${err?.message}`;
        errorBtn.style.display = 'block';
        errorBtn.addEventListener("click", fetchWeatherInfo);
    }
}

// Render Weather On UI
function renderWeatherInfo(weatherInfo) {
    const cityName = document.querySelector('[data-cityName]');
    const countryFlag = document.querySelector('[data-countryFlag]');
    const description = document.querySelector('[data-weatherDesc]');
    const weatherIcon = document.querySelector('[data-weatherIcon]');
    const temp = document.querySelector('[data-temp]');
    const windspeed = document.querySelector('[data-windspeed]');
    const humidity = document.querySelector('[data-humidity]');
    const clouds = document.querySelector('[data-clouds]');

    cityName.innerText = weatherInfo?.name;
    countryFlag.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
    description.innerText = weatherInfo?.weather?.[0]?.description;
    weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
    temp.innerText = `${weatherInfo?.main?.temp.toFixed(2)} °C`;
    windspeed.innerText = `${weatherInfo?.wind?.speed.toFixed(2)} m/s`;
    humidity.innerText = `${weatherInfo?.main?.humidity.toFixed(2)} %`;
    clouds.innerText = `${weatherInfo?.clouds?.all.toFixed(2)} %`;
}

const grantAccessButton = document.querySelector('[data-grantAccess]');

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        grantAccessButton.style.display = 'none';
    }
}

function showPosition(position) {
    const userCoordinates = {
        lat: position.coords.latitude,
        lon: position.coords.longitude
    };
    sessionStorage.setItem("userCoordinates", JSON.stringify(userCoordinates));
    fetchWeatherInfo(userCoordinates);
}

grantAccessButton.addEventListener('click', getLocation);


// Search for weather
const searchInput = document.querySelector('[data-searchInput]');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (searchInput.value === "") {
        return;
    }
    // console.log(searchInput.value);
    fetchSearchWeatherInfo(searchInput.value);
    searchInput.value = "";
});


async function fetchSearchWeatherInfo(city) {
    loadingContainer.classList.add("active");
    userInfoContainer.classList.remove("active");
    grantAccessContainer.classList.remove("active");
    notFound.classList.remove("active");
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

        const data = await response.json();
        if (!data.sys) {
            throw data;
        }
        loadingContainer.classList.remove('active');
        userInfoContainer.classList.add('active');
        renderWeatherInfo(data);
    }
    catch (err) {
        loadingContainer.classList.remove('active');
        userInfoContainer.classList.remove('active');
        notFound.classList.add('active');
        errorText.innerText = `${err?.message}`;
        errorBtn.style.display = "none";
    }
}