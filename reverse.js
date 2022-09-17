const string = "Awsome Javascript"; //STRING THAT IS GOING TO BE REVERSED (IT CAN BY ANY STRING)

function reverse(str) {
  let x = [...str].reverse().join("");
  return x;
}
console.log(`Reversed strng is : ${reverse(string)}`);
