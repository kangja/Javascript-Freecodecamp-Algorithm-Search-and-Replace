// 1st solution
// function myReplace(str, before, after) {
//   const isCapitazlied = before[0] >= "A" && before[0] <= "Z";
//   let casedAfter;
//   if (isCapitazlied) {
//     casedAfter = after[0].toUpperCase() + after.substring(1);
//   } else {
//     casedAfter = after[0].toLowerCase() + after.substring(1);
//   }
//   return str.replace(before, casedAfter);
// }

// 2nd solution
function myReplace(str, before, after) {
  const isCapitazlied = before[0] >= "A" && before[0] <= "Z";
  let casedAfter;
  if (isCapitazlied) {
    casedAfter = after[0].toUpperCase() + after.substring(1);
  } else {
    casedAfter = after[0].toLowerCase() + after.substring(1);
  }

  let replacedStr = str;
  for (let i = 0; i < replacedStr.length; i++) {
    const iString = replacedStr.substring(i, i + before.length);
    console.log("this is iString " + iString);
    if (iString === before) {
      replacedStr =
        replacedStr.substring(0, i) +
        casedAfter +
        replacedStr.substring(i + before.length);
    }
  }
  return replacedStr;
}

console.log(
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
);

// console.log(
//   myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped")
// );
