// You have a user registration form on your website, and you need to send the form data to an API endpoint to register a new user. The API endpoint is https://jsonplaceholder.typicode.com/posts, and it expects the following data in JSON format:

// username: The username of the new user.
// email: The email address of the new user.
// password: The password for the new user.

const classGet = document.querySelector(".get");
const classSend = document.querySelector(".send");

function getData() {
  let XHR = new XMLHttpRequest();
  XHR.open("GET", "https://jsonplaceholder.typicode.com/posts");
  XHR.send();
}
classGet.addEventListener("click", getData);

// async function postData() {
//     try{
//         let request=await fetch("https://jsonplaceholder.typicode.com/posts",{
//             method:'POST',
//             headers:{
//                 'Content-Type':'application/json'
//             },
//         body:JSON.stringify({
//                 username: "gloria",
//                 email: "g@gmail.com",
//                 password: "123",
//               })
//         })

//             let response;
//             if(!request.ok){
//         throw new Error('Error!!!')
//             }
//             else{
//               response=request.json()  
//             }
//     }catch(err){
// console.log('handle the',err)
//     }

// }

  let XHR = new XMLHttpRequest();
  XHR.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
  XHR.setRequestHeader("Content-Type", "application/json");
  XHR.addEventListener("onreadyStateChange", function () {
    if (XHR.readyState === 4) {
      var response = JSON.parse(this.response);
      console.log(response);
    } else {
      console.log("Error!! occured");
    }
  });
  let data = {
    username: "gloria",
    email: "g@gmail.com",
    password: "123",
  };
  XHR.send(JSON.stringify(data));
  console.log(data)


classSend.addEventListener("click", postData);
