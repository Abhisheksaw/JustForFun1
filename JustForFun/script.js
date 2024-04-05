const target = document.getElementById("target");
let yes = document.getElementById("yes");

yes.addEventListener("click", () => {
  alert("Don't worry it's secret 🥰😊");
});

function moveTarget() {
  const maxWidth = 400;
  const maxHeight = 400;

  const randomX = Math.floor(Math.random() * maxWidth);
  const randomY = Math.floor(Math.random() * maxHeight);

  target.style.left = randomX + "px";
  target.style.top = randomY + "px";
}

target.addEventListener("mouseenter", function () {
  moveTarget();
});
