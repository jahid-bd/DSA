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

//input: [0,1,0,3,0,2,2,0]
//output: [1,3, 4]

const list = new List(0);
list.append(1);
list.append(0);
list.append(3);
list.append(0);
list.append(2);
list.append(2);
list.append(0);

var mergeNodes = function (head) {
  if (!head || !head.next) {
    return head;
  }

  class Node {
    constructor(val, next) {
      this.val = val ? val : 0;
      this.next = next ? next : null;
    }
  }

  let modifiedList = new Node(0);
  let dummy = modifiedList;
  let curr = head;

  let sum = 0;

  while (curr && curr.next) {
    if (curr.next.val !== 0) {
      sum = sum + curr.next.val;
    } else {
      dummy.next = new Node(sum);
      sum = 0;
      dummy = dummy.next;
    }

    curr = curr.next;
  }

  return modifiedList.next;
};

console.log(mergeNodes(list.head));
