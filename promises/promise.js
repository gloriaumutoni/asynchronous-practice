// let cart = ["shoes", "cargo", "kart"];

// createorder(cart, (orderId) => {
//   proceedToPayment(orderId);
// });

// let promise = createorder(cart);
// promise.then((orderId) => {
//   proceedToPayment(orderId);
// });

let GITHUB_USER = "https://github.com/gloriaumutoni";
let user = fetch(GITHUB_USER);
console.log(user);
user.then(function (data) {
  console.log(data);
});
