class Node {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DoubleyLL {
  constructor(value) {
    let node = new Node(value);
    this.head = node;
    this.tail = node;
    this.length = 1;
  }

  append(value) {
    let node = new Node(value);
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
    this.length++;
  }

  prepand(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
    this.length++;
  }
}

const data = new DoubleyLL(10);
data.append(20);

data.prepand(5)

data
