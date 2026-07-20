let score = prompt("Enter your score")
let grade;

if (score >= 0 && score <= 49) {
  grade = "E";
  console.log(grade);
} else if (score >= 50 && score <= 59) {
  grade = "D";
  console.log(grade);
} else if (score >= 60 && score <= 69) {
  grade = "C";
  console.log(grade);
} else if (score >= 70 && score <= 89) {
  grade = "B";
  console.log(grade);
} else if (score >= 89 && score <= 100) {
  grade = "A";
  console.log(grade);
}
