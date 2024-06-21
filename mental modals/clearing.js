// Write a javascript function that displays a number every two seconds and stops displaying after 5 seconds
function time() {
  let count = 2;
  let timer = setInterval(() => {
    if (count < 5) {
      console.log(1);
    } else {
      console.log("stop counting");
      clearInterval(timer);
    }
    count = count + 2;
  }, count * 1000);
}
time();
