function randomNumber(rangeStart, rangeEnd) {
    return Math.floor(Math.random() * (rangeEnd - rangeStart + 1) + rangeStart);
  }
  console.log(`My random Number : ${randomNumber(1, 5)}`);
  