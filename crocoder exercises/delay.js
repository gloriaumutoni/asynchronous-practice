// Create a JavaScript Promise that, after a delay of 2 seconds, either resolves with the message "Hello World" or rejects with the error message "Error occurred".

// The outcome (resolve or reject) should be determined by a random condition, ensuring a 50/50 chance of either occurring each time the code runs.
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
