const str = "JavaScript";

function getTheGapX(str) {
  // write your solution here

  const firstIndex = str.indexOf("X");
  if (firstIndex === -1) {
    return -1;
  }

  const lastIndex = str.lastIndexOf("X");

  const t = lastIndex - firstIndex;
  return x;
}

console.log(`Gap between the X's: ${getTheGapX(str)}`);
