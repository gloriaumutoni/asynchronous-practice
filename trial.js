async function countryWeather(countryName){
    try{
        let country=await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        let countryJson,weatherJson
        if(country.ok){
            countryJson=await country.json()
        }
        else{
            throw new Error('Error!!')
        }
        let lon=countryJson[0].latlng[0]
        let lat=countryJson[0].latlng[1]
        let capital=countryJson[0].capital[0]
        let weather=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`)
        if(weather.ok){
weatherJson=await weather.json()
        }
let temp=weatherJson.current_weather
        console.log(countryJson[0].latlng)
        console.log(weatherJson.current_weather.temperature)
        
    }
    catch(err){
        console.log(err)
    }

}
countryWeather('Rwanda')