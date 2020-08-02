function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const freq1 = {};
  const freq2 = {};

  for (let c of str1) {
    freq1[c] = (freq1[c] || 0) + 1;
  }

  for (let c of str2) {
    freq2[c] = (freq2[c] || 0) + 1;
  }

  for (let key in freq1) {
    if (freq1[key] !== freq2[key]) {
      return false;
    }
  }

  return true;
}

console.log(validAnagram("qwerty", "qeywrt"));
