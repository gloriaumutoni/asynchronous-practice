// Write a JavaScript function that fetches data from an API and retries the request a specified number of times if it fails.

// create function
// declare a variable representing the number of times it should retry
// 


async function retry(url,num){
    try{
        let response=await fetch(url)
        if(!response.ok){
        if(num>0){
         return await retry(url,num-1)
        }
        else{
            throw new Error('failed to retry')
        }
        } 
        let responseJson=await response.json()
      console.log(responseJson)
    }catch(err){
        console.log(err)
    }
}

retry("https://jsonplaceholder.typicode.com/posts",3)











// async function retry(url,num){
// try{
// const response=await fetch(url)
// let responseJson;
// if (!response.ok && num>0) {
//     response=await fetch(url)
//     --num
// }
// else if(response.ok){
// responseJson=response.json()
// console.log(responseJson)
// }
// else{
//     throw new Error('unable to fetch')
// }
// }catch(err){
// console.log('error occured:',err)
// }
// }
// retry("https://jsonplaceholder.typicode.com/posts",3)