function change() {
  setInterval(() => {
    document.body.style.backgroundColor =
      "rgb(" +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random()) * 255 +
      "," +
      Math.floor(Math.random() * 255) +
      ")";
  }, 3000);
}
change();
