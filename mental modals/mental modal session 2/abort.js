// Write a function that takes a URL and fetches data from that URL but aborts when the request takes more than 10ms

// create a function
// fetch data from url
// create setTimeout that aborts a function after 10ms

async function abortingTimer(url) {
  try {
    const controller = new AbortController();
    const { signal } = controller;
    setTimeout(() => {
      controller.abort();
    }, 10000);
    const response = await fetch(url, { signal });
    if (!response.ok) throw new Error("couldn't fetch");
    let responseJson = response.json();
    console.log(responseJson);
  } catch (err) {
    console.log("error:", err);
  }
}
abortingTimer("https://jsonplaceholder.typicode.com/posts");
