fetch("https://api.weatherapi.com/v1/forecast.json?key=644f6ce0ca9e401ebb891832211707&q=tashkent&days=7&aqi=yes&alerts=yes")
    .then(res => res.json())
    .then(data => weatherApp(data))

    form.addEventListener("submit", () => {
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=644f6ce0ca9e401ebb891832211707&q=${inp.value == "" ?  "tashkent" : `${inp.value}`}&days=7&aqi=yes&alerts=yes`)
    .then(res => res.json())
    .then(data => weatherApp(data))

    inp.value = ""
    })


function weatherApp(data){
    country.innerText = data.location.name;
    time.innerText = data.location.localtime;
    address.innerText = `${data.location.country}, ${data.location.name}`;
    icon.setAttribute("src", `${data.current.condition.icon}`)
    condition.innerText = data.current.condition.text;
    temp.innerText = `${data.current.temp_c} ºC`

    pressure.innerText = `${data.current.pressure_mb} mb`
    humidity.innerText = `${data.current.humidity} %`
    wind.innerText = `${data.current.wind_mph} mph`


    today.setAttribute("src", `${data.forecast.forecastday[0].day.condition.icon}`)
    tomorrow.setAttribute("src", `${data.forecast.forecastday[1].day.condition.icon}`)
    overmorrow.setAttribute("src", `${data.forecast.forecastday[2].day.condition.icon}`)
    first_temp.innerText = `${data.forecast.forecastday[0].day.avgtemp_c} ºC`
    second_temp.innerText = `${data.forecast.forecastday[1].day.avgtemp_c} ºC`
    third_temp.innerText = `${data.forecast.forecastday[2].day.avgtemp_c} ºC`


    change_btn.addEventListener("click", () => {
        form.style = "transform: translateX(0%); transition: 0.5s;"
    })
    
    back_btn.addEventListener("click", () => {
        form.style = "transform: translateX(100%); transition: 0.5s;"
        inp.focus();
    })
}
