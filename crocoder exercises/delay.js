function trial(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let randoms = Math.random > 0.5;
      if (randoms) {
        resolve("Helo World");
      } else {
        reject("Error occurred");
      }
    }, ms);
  });
}
trial(2000)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });
