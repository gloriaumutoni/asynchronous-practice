// Write a javascript function that displays a number every two seconds and stops displaying after 5 seconds

// create function
// assign num to 2
// limit the num to 5
// use setInterval

function everyTwoSeconds(){
    let num=2
    let timer=setInterval(()=>{
       console.log(num)
    },2000)
    setTimeout(()=>{
        clearInterval(timer)
    },5000)
}
everyTwoSeconds()