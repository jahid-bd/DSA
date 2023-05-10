// 10 --> 20 --> 30

// node look like
// const node = {
//   value: 10,
//   next: null
// }

// list look like
// const list = {
//   value: 10,
//   next: {
//     value: 20,
//     next: {
//       value: 30,
//       next : null
//     }
//   }
// }

// list will be contain head, tail, length

// I will practice crud in linked list

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class List {
  constructor(value) {
    let node = new Node(value);
    this.head = node;
    this.tail = node;
    this.length = 1;
  }

  append(value) {
    let node = new Node(value);
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  prepend(value) {
    let node = new Node(value);
    let temp = this.head;
    this.head = node;
    this.head.next = temp;
    this.length++;
  }

  appendAtPosition(value) {}

  findNode(positon) {
    let count = 0;
    let node = this.head;

    while (count <= this.length) {
      count++;
      if (positon === count) {
        return node;
      }
      node = node.next;
    }
  }
}

const list = new List(10);
list.append(20);
list.prepend(90);

console.log(list.findNode(4));

// Ditect Circle linked list or not
