// Hash Table

class Table {
  constructor(size) {
    this.array = new Array(size);
    this.size = size;
  }

  hash(data) {
    if (data) {
      let stringData = data + '';
      let sum = 0;

      for (let i = 0; i < stringData.length; i++) {
        sum = sum + stringData[i].charCodeAt();
      }

      return sum % this.size;
    }
  }

  insert(data) {
    const index = this.hash(data);
    const place = this.array[index];

    if (!place) {
      this.array[index] = [data];
    } else {
      this.array[index].push(data);
    }
  }

  search(data) {
    const index = this.hash(data);
    const arr = this.array[index];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == data) {
        return `${data} is found arrayIndex=${index} and ElementIndex=${i}`;
      }
    }

    return 'Data Not Found!';
  }
}

const myTable = new Table(5);
console.log(myTable.hash('1'));

myTable.insert(1);
myTable.insert(1);
myTable.insert(1);
myTable.insert(1);
myTable.insert(1);
myTable.insert(892);
myTable.insert(2);
myTable.insert(4);
myTable.insert(8);
myTable.insert(5);

console.log(myTable.search('5'));

console.log(myTable.array);
console.log(myTable.size);
