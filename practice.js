const doSomethng = (resources, callback) => {
  return new Promise((resolve, rejected) => {
    let request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
        // callback(undefined, data);
        //   console.log(request.responseText);
      } else if (request.readyState === 4) {
        rejected("error fired");
        // callback("error fired", undefined);
        //   console.log("error occured");
      }
    });
    request.open("GET", resources);
    request.send();
  });
};
doSomethng("todos/mario.json")
  .then((data) => {
    console.log("promise fullfiled", data);
    return doSomethng("todos/luigi.json");
  })
  .then((data) => {
    console.log("promise fullfiled", data);
    return doSomethng("todos/shaun.json");
  })
  .then((data) => {
    console.log("promise fullfiled", data);
  })
  .catch((err) => {
    console.log("promise rejected", err);
  });

// doSomethng("todos/luigi.json", (err, data) => {
//   console.log(data);
//   doSomethng("todos/mario.json", (err, data) => {
//     console.log(data);
//     doSomethng("todos/shaun.json", (err, data) => {
//       console.log(data);
//     });
//   });
//   console.log("callback fired");
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });
