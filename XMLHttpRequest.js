const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest(); // making an object request
    request.addEventListener("readystatechange", () => {
      //   console.log(request, request.readyStatechange);
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
        // callback(undefined, data);
      } else if (request.readyState === 4) {
        reject("error getting resource");
        // callback("could not fetch data", undefined);
      }
    });

    request.open("GET", resource);
    request.send();
  });
};
getTodos("todos/luigi.json")
  .then((data) => {
    console.log("promise resolved", data);
  })
  .then((err) => {
    console.log("promise rejected", err);
  });
// promise example
// const getSomething = () => {
//   return new Promise((resolve, reject) => {
//     // fetch getSomething
//     resolve("some data");
//     reject("some error");
//   });
// };
// getSomething().then(
//   (data) => {
//     console.log(ReferenceError());
//   },
//   (err) => {
//     console.log("error");
//   }
// );

// an alternative for then and catch
// getSomething()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

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
