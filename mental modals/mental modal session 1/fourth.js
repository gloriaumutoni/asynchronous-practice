function myFetch(url) {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        let data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("error occured!!!!!!!");
      }
    });
    request.open("GET", url);
    request.send();
  });
}

myFetch("https://api.github.com/users/gloriaumutoni")
  .then((data) => console.log(data))
  .catch((error) => console.log("Error:", error));
