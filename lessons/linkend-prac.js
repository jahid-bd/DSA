// linked list looks like
list = {
  size: 2,
  head: {
    value: 10,
    next: {
      value: 20,
      next: null,
    },
  },
};

// create a node class where value and next contain
// blue print of {value: value, next: next} object

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// now create the actual linked list class
/**
 * head
 * size
 */
class List {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      // find the last node from head
      let current = this.head;
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }

  prepend(value) {
    const node = new Node(value);
    // give head ref to new node next value
    node.next = this.head;

    // give newnode with head full ref to the head
    this.head = node;
    this.size++;
  }

  find(value) {
    if (!this.head) return;

    let current = this.head;

    while (current.next) {
      if (current.value === value) {
        break;
      } else {
        current = current.next;
      }
    }

    return current;
  }

  delete(value) {
    if (!this.head) return;

    let current = this.head;
    let prev = null;

    if (this.head.value === value) {
      this.head = this.next;
      this.size--;
    }

    while (current && current.value !== value) {
      if (current) {
        prev = current;
        current = current.next;
      }
    }

    if (current) {
      prev.next = current.next;
      this.size--;
    }
  }
}

const myList = new List();

myList.append(10);
myList.append(20);
// myList.append(30);
myList.prepend(50);
myList.delete(20);
myList;

// const head = {
//   value: 10,
//   next: {
//     value: 20,
//     next: null,
//   },
// };

// let current = head;

// while (current.next) {
//   current = current.next;
// }
// current.next = {
//   value: 30,
//   next: null,
// };
// current;
// head;

const head = {
  value: 10,
  next: {
    value: 20,
    next: null,
  },
};

// delete
/**
 * if there are only one item then null the head
 * to delte a item from list find the prev value of the target
 * set the preve node next item target next
 */
