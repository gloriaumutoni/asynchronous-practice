// Implement a timeout(5 milliseconds) for an asynchronous fetch request. If the request takes longer than a specified time, it should be aborted. 

// https://jsonplaceholder.typicode.com/users

// create a function
// abort instance
// timeout 

async function timeout(){
    try{
        let controller=new AbortController()
        let {signal}=controller
        let timer=setTimeout(()=>{
            controller.abort()
        },5)
        let response= await fetch('https://jsonplaceholder.typicode.com/users',{signal})
        clearTimeout(timer)
        if(!response.ok) throw new Error("couldn't fetch")
        let responseJson=await response.json()
        return responseJson
    }catch(err){
        console.log(err)
    }
}
timeout().then(data=>data)