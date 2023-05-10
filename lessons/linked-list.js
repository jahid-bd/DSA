// 10 -> 20 -> 30 -> 40

// head = 10, tail = 40, length = 4

const node = {
  value: 20,
  next: 30,
};

// Head
const list = {
  value: 10,
  next: {
    value: 20,
    next: {
      value: 30,
      next: {
        value: 40,
        next: null,
      },
    },
  },
};

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class List {
  constructor(data) {
    let node = new Node(data);
    this.head = node;
    this.tail = node;
    this.length = 1;
  }

  append(value) {
    const node = new Node(value);
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  prepend(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
  }
  appendAtPosition(value, positon) {
    if (positon === 1) {
      return this.prepend(value);
    } else if (positon === this.length + 1) {
      return this.append(value);
    }

    let node = new Node(value);
    let prevNode = this.findNode(positon - 1);
    let temp = prevNode.next;
    prevNode.next = node;
    node.next = temp;
    this.length++;
  }

  findNode(positon) {
    let data = this.head;
    let count = 0;

    while (true) {
      count++;
      if (count === positon) {
        return data;
      }
      data = data.next;
    }
  }

  print() {
    let data = this.head;

    while (data) {
      console.log(data.value);
      data = data.next;
    }
  }

  update(value, positon) {
    let data = this.findNode(positon);
    data.value = value;
  }

  delete(positon) {
    let prevNode = this.findNode(positon - 1);
    prevNode.next = prevNode.next.next;
    this.length--;
  }
}

const list1 = new List(10);
list1.append(20);
list1.append(30);
list1.append(40);
list1.appendAtPosition(50, 2);
list1.appendAtPosition(100, 6);

list1.update(15, 2);

list1.delete(2);
list1.print();
