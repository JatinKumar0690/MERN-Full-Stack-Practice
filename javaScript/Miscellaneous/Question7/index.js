const prices = [250, 645, 300, 900, 50];

for (let i = 0; i < prices.length; i++) {
  let offer = prices[i] / 10; //10%off
  prices[i] = prices[i] - offer;
}

console.log(`The final price of products are given below`);

for (let i = 0; i < prices.length; i++) {
  console.log(prices[i], " ");
}
