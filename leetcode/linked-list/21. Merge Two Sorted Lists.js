/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

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
list1.append(4);
const list2 = new List(1);
list2.append(3);
list2.append(4);

console.log(list1.head);

function mergeTwoLists(list1, list2) {
  class Node {
    constructor(val, next = null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }

  let dummy = new Node(0);
  let current = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  if (list1) {
    current.next = list1;
  }

  if (list2) {
    current.next = list2;
  }

  return dummy.next;
}
console.log(mergeTwoLists(list1.head, list2.head));
