 async function performFastAsync(url,delay){
    try{
        let controller=new AbortController()
        let {signal}=controller
        let timer=setTimeout(()=>{
            controller.abort()
        },delay)
let response=await fetch(url,{signal})
clearTimeout(timer)
if(!response.ok)throw new Error('couldnt fetch')
    let responseJson=await response.json()
return responseJson
    }catch(err){
        console.log(err)
    }
 }
 // performFastAsync code here ...

performFastAsync('https://jsonplaceholder.typicode.com/todos/1', 9000)
.then((data) => {
	console.log(data)
})  

// performFastAsync('https://jsonplaceholder.typicode.com/todos/1', 10)
// .then((data) => {
// 	console.log(data)
// })