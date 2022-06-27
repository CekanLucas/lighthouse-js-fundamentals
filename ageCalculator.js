const ageCalculator = (name,yearOfBirth,currentYear) => {
  return `${name} is ${currentYear-yearOfBirth} years old.`;
}

// ageCalculator("Suzie", 1983, 2015); //"Suzie is 32 years old."
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));