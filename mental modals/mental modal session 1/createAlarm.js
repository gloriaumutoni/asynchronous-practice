function createAlarm(name, delay) {
  return new Promise((resolve, reject) => {
    delay = delay * 1000;
    if (delay > 2000) {
      setTimeout(() => {
        resolve(`wake up ${name}`);
      }, delay);
    } else {
      reject("Delay is not sufficient");
    }
  });
}

createAlarm("John", 4)
  .then((message) => {
    console.log(message); // output "Wake up John" after 4 seconds
  })
  .catch((error) => {
    console.error(error);
  });

createAlarm("John", 1)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error); // output "Delay is not sufficient"
  });
