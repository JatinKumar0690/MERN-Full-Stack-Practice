const box = document.querySelector(".box");
console.log(box);

const newBtn = document.createElement("button");

newBtn.innerText = "click me";

newBtn.style.backgroundColor = "red";

newBtn.style.color = "white";

box.prepend(newBtn);
