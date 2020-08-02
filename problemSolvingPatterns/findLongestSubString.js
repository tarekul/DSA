function findLongestSS(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }

    longest = Math.max(longest, i - start + 1);
    seen[char] = i + 1;

    console.log("start", start);
    console.log("seen", seen);
    console.log("longest", longest);
    console.log("----------------");
  }
  return longest;
}

console.log(findLongestSS("rithischorupqjil"));
