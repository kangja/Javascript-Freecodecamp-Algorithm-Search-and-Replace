function myReplace(str, before, after) {
  const isCapitazlied = before[0] >= "A" && before[0] <= "Z";
  let casedAfter;
  if (isCapitazlied) {
    casedAfter = after[0].toUpperCase() + after.substring(1);
  } else {
    casedAfter = after[0].toLowerCase() + after.substring(1);
  }
  return str.replace(before, casedAfter);
}

console.log(
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
);
