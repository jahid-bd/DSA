/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

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
  }

  append(value) {
    const node = new Node(value);
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

var mergeTwoLists = function (list1, list2) {};
