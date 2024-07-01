// Write a function that chains two Promises together, where the second Promise depends on the result of the first.

let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('The first promise')
    },1000)
})
let p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('the second promise')
    },2000)
})
 
function promise(p1,p2){
    return p1.then((res)=>{
console.log(res)
return p2
    }).then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
}
promise()