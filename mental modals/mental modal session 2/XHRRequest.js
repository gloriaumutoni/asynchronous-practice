// Extend the fetchToDo function from Question 4 to include custom headers in the request. Specifically, you need to add a User-Agent header with a custom value and a Content-Type header set to application/json. Additionally, modify the function to send a JSON payload in the request body. After sending the request, the function should parse the JSON response and log the parsed object to the console.
let btn=document.querySelector('button')

function fetchToDo(){
    try{
        let xhr=new XMLHttpRequest()
        xhr.open("POST",'https://jsonplaceholder.typicode.com/todos/1')
        xhr.setRequestHeader('Content-Type','application/json')
        xhr.onload=function(){
            if(xhr.readyState===4 && xhr.status===200){
               let responseJson=JSON.parse(xhr.responseText) 
               console.log(responseJson)
            }
            else{
               console.log('network failed') 
            }
        }
        xhr.onerror=function(){
            console.log('network failed')
        }
        let data=JSON.stringify({
            title: "foo",
            body: "bar",
            userId: 1
        })
        xhr.send(data)
        console.log(data)
    }catch(err){
        console.log(err)
    }
}

btn.addEventListener('click',fetchToDo())