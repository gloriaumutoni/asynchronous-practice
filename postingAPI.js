// You have a user registration form on your website, and you need to send the form data to an API endpoint to register a new user. The API endpoint is https://jsonplaceholder.typicode.com/posts, and it expects the following data in JSON format:

// username: The username of the new user.
// email: The email address of the new user.
// password: The password for the new user.

const classGet=document.querySelector('.get')
const classSend=document.querySelector('.send')

function getData(){
let XHR= new XMLHttpRequest()
XHR.open('GET','https://jsonplaceholder.typicode.com/posts')
XHR.send()
}
classGet.addEventListener('click',getData)