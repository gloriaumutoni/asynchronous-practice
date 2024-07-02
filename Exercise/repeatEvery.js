// Implement a function called repeatEvery() that takes another function and a time interval (in milliseconds) as arguments. This function should execute the given function repeatedly at the specified time interval until manually stopped.

// create a callback function
// create time interval using setInterval



function repeatEvery(callback,delay){
    setInterval(()=>{
callback()
    },delay)
   
}
repeatEvery(()=>console.log('hi'),2000)