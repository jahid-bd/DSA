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
list1.append(2);
list1.append(3);
list1.append(4);
list1.append(5);

var swapPairs = function (head) {
  if (!head || !head.next) {
    return head;
  }

  let curr = head;

  while (curr !== null && curr.next !== null) {
    let temp = curr.val;
    curr.val = curr.next.val;
    curr.next.val = temp;

    curr = curr.next.next;
  }

  return head;
};

console.log(swapPairs(list1.head));
