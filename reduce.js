const numbers = [1, 2, 4, 10];

const summedNums = numbers.reduce((accumulator, currentValue) => {

  return accumulator + currentValue

}, 100)  /* Essa função reduce ela vai somar os números que estão na variável
numbers somados com a constante que é 100 */

console.log(summedNums); // Output: 117