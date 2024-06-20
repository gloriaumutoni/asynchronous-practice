let cart = ["shoes", "cargo", "kart"];

createorder(cart, (orderId) => {
  proceedToPayment(orderId);
});
let promise = createorder(cart);
promise.then((orderId) => {
  proceedToPayment(orderId);
});
