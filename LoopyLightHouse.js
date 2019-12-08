// If the number is a multiple of 3, print the string "Loopy" instead of the number.
// If the number is a multiple of 4, print the string "Lighthouse" instead of the number.
// If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number.

let num = 100;

while(num <= 200){
  num % 3 === 0 && num % 4 === 0 ?
  console.log('LoopyLighthouse') :
  num % 3 === 0 ?
  console.log('Loopy') :
  num % 4 === 0 ?
  console.log('Lighthouse') :
  console.log(num);

  num++;
}



