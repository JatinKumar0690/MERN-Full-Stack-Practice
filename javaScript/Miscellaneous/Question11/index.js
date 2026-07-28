const objects = [
  { item: "Laptop", price: 1000 },
  { item: "Mouse", price: 400 },
  { item: "Keyboard", price: 500 },
  { item: "Wireless WI-FI adapter", price: 200 },
];
let totalScore = 0;
objects.forEach((result, index) => {
  console.log(
    `processing category: ${result.item}, price: ${result.price} at index ${index}`,
  );
  totalScore += result.price;
});

console.log(`The total amount of the cart is ${totalScore}`);
