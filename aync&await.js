// aync&await

// const getTodos = async (responses) => {
//   responses = await fetch("todos/luigi.json");
//   if (responses.status !== 200) {
//     throw new Error("can't get data");
//   }
//   const data = await responses.json();
//   return data;
// };
// getTodos()
//   .then((data) => {
//     console.log("resolved", data);
//   })
//   .catch((err) => {
//     console.log("rejected", err);
// });

// fetch("todos/luigi.json")
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

let p = new Promise((resolve, reject) => {
  resolve("promise resolved");
});
async function handlePromise() {
  let v = await p;
  return v;
}
console.log(handlePromise());
