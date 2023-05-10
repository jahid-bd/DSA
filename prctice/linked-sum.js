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

  sum() {
    let result = 0;
    let data = this.head;

    while (data) {
      result += data.value;
      data = data.next;
    }

    return result;
  }
}

const list = new List(10);
list.append(20);
list.append(30);
list.append(20);
list.append(10);
list.append(20);

// find 20 first and last positions

const firstLastPosition = () => {
  let first = null;
  let last = null;
  let data = list.head;
  let positon = 0;

  while (data) {
    positon += 1;
    if (data.value === 20) {
      last = positon;

      if (!first) {
        first = positon;
      }
    }
    data = data.next;
  }

  return [first, last];
};

console.log(firstLastPosition());

// find the middle position by fast and slow two pointer algorithm

const findMiddle = () => {
  let slow = list.head;
  let fast = list.head;

  while (fast) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow.value;
};

console.log(findMiddle());
