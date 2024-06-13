const request = new XMLHttpRequest(); //making request object
request.addEventListener("readystatechange", () => {
  console.log(request, request.readyStatechange);
});
request.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
request.send();
