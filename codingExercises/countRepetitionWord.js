function countRepetitionWord2(string, word) {
  if (string.length < word.length) return 0;
  let i = 0;
  let j = 0;
  let count = 0;
  while (j < string.length) {
    if (word[i] === string[j]) {
      if (i === word.length - 1) {
        count++;
        i = 0;
      } else i++;
    } else if (word[i] !== string[j]) i = 0;
    j++;
  }
  return count;
}

console.log(countRepetitionWord2("fooox hellofoxxy fox hellofooox", "fox"));
