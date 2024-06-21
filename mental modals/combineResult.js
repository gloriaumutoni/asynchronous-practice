function fetchMultipleAPIs(apiUrls) {
  // let fetch= async(url)=>{
  let fetch = async (url) => {
    let fetching = await fetch(url);
    let response = await fetching.json();
    return response;
  };
  return Promise.all(apiUrls.map((url) => fetch(url)));
}
//   let promise1 = fetch(apiUrls[0]);
//   let promise2 = fetch(apiUrls[1]);
//   let promise3 = fetch(apiUrls[2]);
//   //   let promise = [];
//   //   apiUrls.map((url) => {
//   //     promise.push(url);
//   //   });
//   //   return Promise.all(promise);
//   return Promise.all([promise1, promise2, promise3]);
// }

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
