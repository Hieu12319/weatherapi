//
const $input = $("input")
const $button = $("button")
const $aside = $("aside")
const api = 'a1008d67c4616e8b1271bc7407bc6dc3'

$button.on("click", () => {
    const searchLoc= $input.val()
    $.ajax(`http://api.openweathermap.org/geo/1.0/direct?q=${searchLoc},
    {state code}&limit=3&appid=${api}`)
    .then((data) => {
        let lat = data [0].lat
        let lon = data [0].lon
        let name = data [0].name
        console.log(data)
        $.ajax(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}&units=imperial`)
        .then ((data) => {
            console.log(data)
            $("aside").html(`
            <h1>Weather for: ${name}</h1>
            <h2>temperature: ${data.main.temp}&#176</h2>
            <h2>Feels like: ${data.main.feels_like}&#176</h2>
            <h2>Weather: ${data.weather[0].description}</h2>
            `)
        
        })
    })
})