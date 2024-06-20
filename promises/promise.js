// let cart = ["shoes", "cargo", "kart"];

// createorder(cart, (orderId) => {
//   proceedToPayment(orderId);
// });

// let promise = createorder(cart);
// promise.then((orderId) => {
//   proceedToPayment(orderId);
// });

let GITHUB_USER = "https://github.com/gloriaumutoni";
let user = fetch("https://github.com/gloriaumutoni");
console.log(user);
user.then((data) => {
  console.log(data);
});
