const number = -1234567;

function reverseNum(num) {
  const x =
    parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num);
  return x;
}
console.log(`Reversed Number is : ${reverseNum(number)}`);
