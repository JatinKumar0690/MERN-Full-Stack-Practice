const boxes = document.querySelectorAll(".box");

for (let i = 0; i < boxes.length; i++) {
  boxes[i].innerText = `New unique value ${i}`;
}
