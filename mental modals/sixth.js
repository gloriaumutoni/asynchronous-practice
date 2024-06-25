async function myfetch(countryUrl,weatherUrl){
    try{
        // fetch the url 
        let countryResponse=await fetch(countryUrl)
        let weatherResponse=await fetch(weatherUrl)

        // convert url into jsonValues
        let countryJson
        let weatherJson
        if(countryResponse.ok){
           countryJson=await countryResponse.json()
        }
        else if(weatherResponse.ok){
            weatherJson=await weatherResponse.json()
        }
        else{
            throw new Error('not valid!!!')
        }
            console.log(countryJson,weatherJson)
        //get country,latitude and longitude 

    }catch(err){
        console.log('Error:',err);
    }
    

}
myfetch('https://restcountries.com/v3.1/name/Rwanda',' https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current_weather=true')