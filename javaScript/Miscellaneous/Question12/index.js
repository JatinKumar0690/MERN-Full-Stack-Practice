const txns = [150, -30, 45, -10, 200];

const output = txns
  .filter((income) => income >= 0)
  .reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

console.log(output);
