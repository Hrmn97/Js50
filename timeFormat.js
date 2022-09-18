// const time = "12:10AM";

// function convertTo24HrsFormat(timeText) {
//   // write your solution here
//   var timeTextLower = timeText.toLowerCase();
//   let [hours, mins] = timeTextLower.split(":");

//   if (timeTextLower.endsWith("am")) {
//     hours = hours == 12 ? "0" : hours;
//   } else if (timeTextLower.endsWith("pm")) {
//     hours = hours == 12 ? hours : String(+hours + 12);
//   }

//   return hours.padStart(2, 0) + ":" + mins.slice(0, -2).padStart(2, 0);
// }

// console.log(`Converted time: ${convertTo24HrsFormat(time)}`);

// ======================================================================//

// const convertTime = (t) => {
//   const [time, modifier] = t.split(" ");

//   let [hours, minutes] = time.split(":");

//   if (hours === "12") {
//     hours = "00";
//   }

//   if (modifier === "PM") {
//     hours = parseInt(hours, 10) + 12;
//   }

//   return `${hours}:${minutes}`;
// };

// console.log(convertTime("01:02 PM"));
// console.log(convertTime("05:06 PM"));
// console.log(convertTime("12:00 PM"));
// console.log(convertTime("12:00 AM"));

function convertTime(t) {
  const [time, modifier] = t.split("");

  console.log(([hours, minutes] = time.split(":")));
}

console.log(convertTime("5:02 PM"));
