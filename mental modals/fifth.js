// Write a JavaScript function that fetches data from an API and retries the request a specified number of times if it fails.

async function retries(url, num) {
  try {
    let data = await fetch(url); //fetch returns a response object
    let jsonValue;
    if (data.readyState === 4 && data.status === 200) {
      let jsonValue = await data.json();
    } else if (data.readyState === 4) {
      while (num > 0) {
        data = await fetch(url);
        console.log(num);
        --num;
      }
    }
    return jsonValue;
  } catch (err) {
    console.log("the error code is:", err);
  }
}
console.log(retries("https://api.github.com/users/gloriaumutoni", 3));
