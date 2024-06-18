// aync&await

const getTodos = async (responses) => {
  responses = await fetch("todos/luigi.json");
  const data = await responses.json();
  return data;
};
getTodos()
  .then((data) => {
    console.log("resolved", data);
  })
  .catch((err) => {
    console.log("rejected", err);
  });

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
