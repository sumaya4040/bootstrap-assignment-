function searchCountry() {
    var search = document.getElementById("searchInput").value;
    var url = `https://restcountries.com/v3.1/name/${search}`;
    fetch(url).then(res => res.json()).then(data => processCountry(data));
}

function processCountry(dataArr) {
    var content = document.getElementById("content-country");
    var data = dataArr[0];
    console.log(data);
    content.innerHTML = `
    <div class="w-100 my-3">
            <div class="innerBorderBox w-100">
                <h5 class="fw-bold">Country Details</h5>    
                <div class="d-flex flex-wrap gap-3">
                    <div class="small-box">
                        <h5 class="my-0 light-text">Country Name</h5>
                        <p class="highlight-1 my-0">${data.name.common}</p>
                    </div>
                    <div class="small-box">
                        <h5 class="my-0 light-text">Region</h5>
                        <p class="my-0 highlight-1">${data.region}</p>
                    </div>
                    <div class="small-box">
                        <h5 class="my-0 light-text">Country Code</h5>
                        <p class="my-0 highlight-1">${data.cioc}</p>
                    </div>                    
                </div>
                <div class="pt-3">
                    <button onclick="moreDetailsCountryButton()" class="button">More Details</button>
                </div>
                <div id="more-details-country"></div>                    
            </div>
        </div>
    
    `;

}


function moreDetailsCountryButton() {
    var search = document.getElementById("searchInput").value;
    var url = `https://restcountries.com/v3.1/name/${search}`;
    fetch(url).then(res => res.json()).then(data => processMoreCountryDetails(data));
}

function processMoreCountryDetails(data) {
    data = data[0];
    var content = document.getElementById("more-details-country");

    content.innerHTML = `
    <div class="generate">
        <div class="d-flex flex-wrap mt-3 gap-3">
            <div class="small-box">
                <h5 class="my-0 light-text">Country Capital</h5>
                <p class="my-0 highlight-1">${data.capital}</p>
            </div>
            <div class="small-box">
                <h5 class="my-0 light-text">Population</h5>
                <p class="my-0 highlight-1">${data.population}</p>
            </div>
        </div>
        <div class="d-flex flex-wrap mt-3 gap-3">
            <div class="small-box">
                <h5 class="my-0 pb-1 light-text">Flag</h5>
                <div class="image-holder">
                    <img class="image" src="${data.flags.png}" alt="flag">
                </div>
            </div>
            <div class="small-box">
                <h5 class="my-0 pb-1 light-text">Coat Of Arms</h5>
                <div class="image-holder">
                    <img class="image" src="${data.coatOfArms.svg}" alt="CoatOfArms">
                </div>
            </div>            
        </div>        
    </div>
    `;

}


function searchWeather() {
    var key = "dc0eaaa1773dce24f43a4bfe1b5af3df"
    var search = document.getElementById("weatherSearchInput").value;
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${key}`;
    fetch(url).then(res => res.json()).then(data => processWeather(data));
}

function processWeather(data) {
    console.log(data);

    var content2 = document.getElementById("content-weather");
    content2.innerHTML = `
    <div class="mt-1">
        <p>Search Results for: <span class="highlight-1">${data.name}</span></p>
    </div>
    <div class="d-flex flex-wrap mt-3 gap-3">
        <div class="small-box">
            <h5 class="my-0 light-text">Temperature</h5>
            <p class="my-0 highlight-2">${data.main.temp}°C</p>
        </div>
        <div class="small-box">
            <h5 class="my-0 light-text">Feels Like</h5>
            <p class="my-0 highlight-2">${data.main.feels_like}°C</p>
        </div>
        <div class="small-box">
            <h5 class="my-0 light-text">Humidity</h5>
            <p class="my-0 highlight-2">${data.main.humidity}%</p>
        </div>
        <div class="small-box">
            <h5 class="my-0 light-text">Pressure</h5>
            <p class="my-0 highlight-2">${data.main.pressure}</p>
        </div>
        <div class="small-box">
            <h5 class="my-0 light-text">Visibility</h5>
            <p class="my-0 highlight-2">${data.visibility}</p>
        </div>
        <div class="small-box">
            <h5 class="my-0">Min Temp</h5>
            <p class="my-0 highlight-2">${data.main.temp_min}°C</p>
        </div>
        <div class="small-box">
            <h5 class="my-0 light-text">Max Temp</h5>
            <p class="my-0 highlight-2">${data.main.temp_max}°C</p>
        </div>
        <div class="w-100">
            <button onclick="moreDetailsWeatherButton()" class="button">More Details</button>
        </div>
        <div id="more-details-weather"></div> 
    </div>
    `;

}

function moreDetailsWeatherButton() {
    var key = "dc0eaaa1773dce24f43a4bfe1b5af3df"
    var search = document.getElementById("weatherSearchInput").value;
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${key}`;
    fetch(url).then(res => res.json()).then(data => processMoreWeatherDetails(data));
}

function processMoreWeatherDetails(data) {
    var content = document.getElementById("more-details-weather");

    // Icons Process
    var icon = data.weather[0].icon;
    var iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    // Date Time Process
    let dt = new Date(data.dt * 1000);
    let fullDate = `${dt.getDate()}/${dt.getMonth() + 1}/${dt.getFullYear()}`
    let time = `${dt.getHours()}:${dt.getMinutes()}`

    content.innerHTML = `        
    <div class="d-flex flex-wrap gap-3">
        <div class="small-box">
            <h5 class="my-0 light-text">Weather</h5>
            <div class="d-flex justify-content-start justify-content-md-center">
                <p class="my-auto highlight-2">${data.weather[0].main}</p>
                <img class="iconImage" src="${iconUrl}" alt="icon">
            </div>
        </div>
        <div class="small-box">
            <h5 class="my-0 light-text">Country</h5>
            <p class="my-0 highlight-2">${data.sys.country}</p>
        </div>
        <div class="small-box">
            <h5 class="my-0 light-text">Date</h5>
            <p class="my-0 highlight-2">${fullDate}</p>
        </div>
        <div class="small-box">
            <h5 class="my-0 light-text">Time Zone</h5>
            <p class="my-0 highlight-2">${time}</p>
        </div>
        <div class="small-box">
            <h5 class="my-0 light-text">Wind Deg</h5>
            <p class="my-0 highlight-2">${data.wind.deg}</p>
        </div>
        <div class="small-box">
            <h5 class="my-0 light-text">Wind Speed</h5>
            <p class="my-0 highlight-2">${data.wind.speed}</p>
        </div>
       

        </div>        
    </div>
    `;


}
