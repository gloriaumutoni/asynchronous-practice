// Write a function that takes a URL and fetches data from that URL but aborts when the request takes more than 10ms

// async function fetching(url, delay) {
//   try {
//     let request = await fetch(url);
//     if (delay <= 10) {
//       let data = await request.json();
//     } else {
//       throw new Error("error occured");
//     }
//   } catch {
//     request.abort();
//   }
// }
// fetching("https://jsonplaceholder.typicode.com/todos", 10);

function fetching(url, delay) {
  // return new Promise((resolve, reject) => {
  let request = new XMLHttpRequest();
  if (delay <= 10) {
    let time = setTimeout(() => {
      request.open("GET", url);
      request.send();
    }, delay);
  } else {
    clearTimeout(time);
  }
  // })
}
fetching("https://jsonplaceholder.typicode.com/todos", 10);
