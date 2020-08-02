function stringifyNumbers(obj) {
  let newobj = {};
  for (let key in obj) {
    if (typeof obj[key] !== "object") {
      newobj[key] = obj[key];
      if (typeof newobj[key] === "number") {
        newobj[key] = newobj[key].toString();
      }
    } else if (typeof obj[key] === "object") {
      newobj[key] = stringifyNumbers(obj[key]);
    }
  }
  return newobj;
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(obj));
