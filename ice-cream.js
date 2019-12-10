// Do not modify these first two lines
const iceCreamFlavours = ["chocolate", "vanilla", "cookies and cream", "rocky road", "strawberry"];
console.log(iceCreamFlavours);

// Your code below here...
const newArr = iceCreamFlavours.concat('root beer');


console.log('New Array',newArr);
console.log('Old Array',iceCreamFlavours);
console.log(newArr[0], 'first element of Array');
console.log(newArr[newArr.length-1], 'last element of Array');
console.log(newArr.length,'length of Array')
console.log('Why did I capitilize array? camelCase fatigue')
cle