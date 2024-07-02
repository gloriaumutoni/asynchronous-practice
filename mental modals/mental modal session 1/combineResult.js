async function fetchMultipleAPIs(apiUrls) {
 try{
  let response = apiUrls.map(url=>fetch(url).then(data=>data.json()))
  let promise=await Promise.all(response)
  return promise;
 }catch{}
 
}

const apiUrls = [
  "https://jsonplaceholder.typicode.com/posts/4",
  "https://jsonplaceholder.typicode.com/posts/5",
  "https://jsonplaceholder.typicode.com/posts/6",
];

fetchMultipleAPIs(apiUrls)
  .then((results) => {
    console.log("Combined Results:", results);
  })
  .catch((error) => {
    console.log("Error:", error.message);
  });
