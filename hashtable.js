function hashStringToInt(string, tableSize) {
  let hash = 17;
  for (let i = 0; i < string.length; i++) {
    hash = (13 * hash * string.charCodeAt(i)) % tableSize;
  }
  return hash;
}

class HashTable {
  table = new Array(3);
  enteredItems = 0;
  loadFactor = 0;

  resizeTable = () => {
    const newTable = new Array(this.table.length * 2);
    this.table.forEach((item) => {
      if (item) {
        item.forEach(([key, value]) => {
          const idx = hashStringToInt(key, newTable.length);
          if (newTable[idx]) {
            newTable[idx].push([key, value]);
          } else {
            newTable[idx] = [[key, value]];
          }
        });
      }
    });
    this.table = newTable;
  };

  setItem = (key, value) => {
    this.enteredItems++;
    this.loadFactor = Math.floor(this.enteredItems / this.table.length);
    if (this.loadFactor > 0.8) {
      this.resizeTable();
    }
    const idx = hashStringToInt(key, this.table.length);
    if (this.table[idx]) {
      this.table[idx].push([key, value]);
    } else {
      this.table[idx] = [[key, value]];
    }
  };

  getItem = (key) => {
    const idx = hashStringToInt(key, this.table.length);
    if (!this.table[idx]) {
      return null;
    }
    const item = this.table[idx].find((x) => x[0] === key);
    if (Boolean(item)) {
      return item[1];
    } else {
      return null;
    }
  };
}

const myTable = new HashTable();
myTable.setItem("firstname", "Manjeet");
myTable.setItem("lastname", "Shrestha");
myTable.setItem("favsong", "Wicked game");
myTable.setItem("favmanga", "One piece");
console.log(myTable.getItem("firstname"));
console.log(myTable.getItem("lastname"));
console.log(myTable.getItem("favsong"));
console.log(myTable.getItem("favmanga"));
