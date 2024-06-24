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

// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("first timer");
//   }, 5000);
// });
// let p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("second timer");
//   }, 5000);
// });
// async function handlePromise() {
//   let v1 = await p1;
//   console.log(v1);
//   let v2 = await p2;
//   console.log(v2);
// }
// handlePromise();

async function handlePromise() {
  let data = await fetch("https://api.github.com/users/gloriaumutoni"); //fetch returns a response object
  let json = data.json(); //converts it into jsonValue
  console.log(json);
}
handlePromise();
