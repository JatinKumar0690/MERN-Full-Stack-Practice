const marks = [85, 92, 100, 23, 18, 89, 90, 95, 97, 88, 87, 86];

const output = marks.filter((topperMarks) => {
  return topperMarks >= 90;
});

console.log(output);
