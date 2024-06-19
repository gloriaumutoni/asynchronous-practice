// 1. Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.
function delay(ms) {
  setTimeout(() => {
    console.log("delay milliseconds");
  }, ms);
}
delay(2000);
