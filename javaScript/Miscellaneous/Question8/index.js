let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

//Removed the first company
companies.shift(0);
console.log(companies);

//Removed uber and added ola in its place
companies.splice(1, 1, "ola");

console.log(companies);

//Adding amazon to the end

companies.push("amazon");
console.log(companies);
