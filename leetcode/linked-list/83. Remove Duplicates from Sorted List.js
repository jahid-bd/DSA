class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class List {
  constructor(data) {
    let node = new Node(data);
    this.head = node;
    this.tail = node;
  }

  append(val) {
    const node = new Node(val);
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }
}

const list1 = new List(1);
list1.append(1);
list1.append(2);
list1.append(3);
list1.append(3);

var deleteDuplicates = function (head) {
  let result = head;

  let current = head;

  while (current && current.next) {
    if (current.val === current.next.val) {
      result.next = current.next;
      current = current.next;
    }

    current = current.next;
  }

  return result;
};

console.log(deleteDuplicates(list1.head));
