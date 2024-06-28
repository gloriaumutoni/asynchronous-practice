async function myfetch(country){
    try{
        // fetch the url 
        let countryUrl=`https://restcountries.com/v3.1/name/${country}`
        let countryResponse=await fetch(countryUrl)
        

        // convert url into jsonValues
        let countryJson,weatherJson,lat,lon
        // let weatherJson
        if(countryResponse.ok){
           countryJson= await countryResponse.json()
           lat=countryJson[0].latlng[0]
           lon=countryJson[0].latlng[1]
        }
        let weatherResponse=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`)
         if(weatherResponse.ok){
            weatherJson=await weatherResponse.json()
        }
        else{
            throw new Error('not valid!!!')
        } 
        let Capital=countryJson[0].capital[0]
        let Current_Temperature=weatherJson.current_weather.temperature
        console.log(`Country: ${country}
Capital: ${Capital}
Current Temperature: ${Current_Temperature}°C`)
    }catch(err){
        console.log('Error:',err);
    }
    

}
myfetch('France')