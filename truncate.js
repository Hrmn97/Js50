const str = "JavaScript is simple but not easy to master";
const wordLimit = 3;

function truncateWithWordLimit(str, wordLimit) {
  // write your solution here
  const arr = str.split(" ", wordLimit).join(" ");

  return arr;
}

console.log(`Truncated string: ${truncateWithWordLimit(str, wordLimit)}`);
