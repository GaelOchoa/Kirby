let kirby = document.getElementById("Kirby");
let left = 0
let right = 0
let rightStep = 100;
let leftStep = 100;
document.addEventListener("keydown", function (event) {
  kirby.style.position = "relative";
  const boton = event.key.toLowerCase()
  if (boton == "arrowleft") {
    right = right + rightStep
    kirby.style.right += `${right}px`;
  }
  else if (boton == "arrowright") {
    left = left + leftStep
    kirby.style.left += `${left}px`;
  }
})