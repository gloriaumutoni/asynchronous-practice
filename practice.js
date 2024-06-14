const doSomethng = (resources, callback) => {
  let request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
      //   console.log(request.responseText);
    } else if (request.readyState === 4) {
      callback("erro fired", undefined);
      //   console.log("error occured");
    }
  });
  request.open("GET", resources);
  request.send();
};
doSomethng();

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
