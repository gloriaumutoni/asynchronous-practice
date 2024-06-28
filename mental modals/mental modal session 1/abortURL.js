// Write a function that takes a URL and fetches data from that URL but aborts when the request takes more than 10ms

// async function fetching(url) {
//   try {
//     let controller = new AbortController();
//     let { signal } = controller;
//     let timer = setTimeout(() => {
//       controller.abort();
//     }, 10000);
//     let request = await fetch(url, { signal });
//     // request.then(() => {
//     //   clearTimeout(timer);
//     //   if (!request.ok) {
//     //     throw new Error("caught");
//     //   }
//     // });
//     let response = await request.json();
//     return response;
//   } catch {
//     console.log("caught error");
//   }
// }
// fetching("https://jsonplaceholder.typicode.com/todos");

function fetching(url) {
  let controller = new AbortController();
  let { signal } = controller;
  let timer = setTimeout(() => {
    controller.abort();
  }, 1);
  let request = fetch(url, { signal })
    .then((request) => {
      clearTimeout(timer);
      if (!request.ok) {
        throw new Error("caught");
      }
    })
    .catch((error) => {
      if (error.name == "AbortError") {
        console.log("failed");
      }
    });
}
fetching("https://jsonplaceholder.typicode.com/todos");
