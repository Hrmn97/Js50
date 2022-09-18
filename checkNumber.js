const number = "+919876543210";

function validateMobile(number) {
  // write your solution here
  const num = number.split("");

  let code = number.split("", 3).join("");
  return code;
}

console.log(`is a valid Indian mobile number: ${validateMobile(number)}`);
