// create a function
// store the time to start the fetch in startTime variabl
// fetch data and turn the response to json
// get the time it took

async function trackingFetch(){
    try{
        let startTimer=performance.now()
        let response=await fetch('https://api.github.com/users/gloriaumutoni')
        if(!response.ok) throw new Error("could't fetch")
        let responseJson=await response.json()
        let endTimer=performance.now()
        let duration=endTimer - startTimer
        console.log(duration)
    }catch(err){
        console.log(err)
    }
}
trackingFetch()