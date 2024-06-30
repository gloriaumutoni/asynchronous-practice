// Write a JavaScript function fetchToDo that uses XMLHttpRequest to fetch data from the given URL (https://jsonplaceholder.typicode.com/todos/1). The function should handle both successful responses and errors (such as network issues or invalid URLs). Upon receiving a successful response, it should log the fetched data to the console. If there's an error, it should catch the error and log an appropriate message.

// create function
// use try and catch to get errors

function fetchingData(url){
    try{
        let xhr=new XMLHttpRequest()
        xhr.open('GET',url)
        xhr.onload=function(){
            if(xhr.readyState===4 && xhr.status==200){
                let responseJson=JSON.parse(xhr.responseText)
                console.log(responseJson)
            }
            else{
                console.log('failed to fetch')
            }
        }
        xhr.onerror=function(){
            console.log('Network error')
        }
        xhr.send()
    }catch(err){
        console.log(err)
    }
}
fetchingData('https://jsonplaceholder.typicode.com/todos/1')