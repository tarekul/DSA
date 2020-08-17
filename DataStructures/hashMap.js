class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let weird_prime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * weird_prime + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value) {
    const hashIdx = this._hash(key);
    if (!this.keyMap[hashIdx]) {
      this.keyMap[hashIdx] = [];
    }
    this.keyMap[hashIdx].push([key, value]);
  }
  get(key) {
    const hashIdx = this._hash(key);
    if (this.keyMap[hashIdx]) {
      const arr = this.keyMap[hashIdx];
      for (let pair of arr) {
        if (pair[0] == key) return pair[1];
      }
    }
    return undefined;
  }
  keys() {
    //return all the keys
    let keys = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (!this.keyMap[i]) continue;
      for (let j = 0; j < this.keyMap[i].length; j++) {
        if (!keys.includes(this.keyMap[i][j][0]))
          keys.push(this.keyMap[i][j][0]);
      }
    }
    return keys;
  }
  values() {
    //return all the values
    let values = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (!this.keyMap[i]) continue;
      for (let j = 0; j < this.keyMap[i].length; j++) {
        if (!values.includes(this.keyMap[i][j][1]))
          values.push(this.keyMap[i][j][1]);
      }
    }
    return values;
  }
}

const ht = new HashTable();
ht.set("blue", "#100");
ht.set("cyan", "#203");
ht.set("pink", "#304");
ht.set("orange", "#144");
ht.set("orange", "#101");
console.log(ht.get("cyan"));
console.log(ht.get("pink"));
console.log(ht.keyMap);
console.log(ht.keys());
console.log(ht.values());
