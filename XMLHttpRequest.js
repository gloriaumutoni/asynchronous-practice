const getTodos = (resource, callback) => {
  const request = new XMLHttpRequest(); //
  request.addEventListener("readystatechange", () => {
    //   console.log(request, request.readyStatechange);
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("could not fetch data", undefined);
    }
  });

  request.open("GET", resource);
  request.send();
};
// promise example
const getSomething = () => {
  return new Promise((resolve, reject) => {
    // fetch getSomething
    resolve("some data");
    reject("some error");
  });
};
getSomething().then(
  (data) => {
    console.log(ReferenceError());
  },
  (err) => {
    console.log("error");
  }
);

// getting data from json files
// getTodos("todos/luigi.json", (err, data) => {
//   console.log(data);
//   getTodos("todos/mario.json", (err, data) => {
//     console.log(data);
//     getTodos("todos/shaun.json", (err, data) => {
//       console.log(data);
//     });
//   });
// });
