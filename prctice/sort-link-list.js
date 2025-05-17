class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class List {
  constructor() {
    this.head = null;
    this.size = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      // find the last node that means node that has no next value
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = newNode;
    }
    this.size++;
  }
}

function sortList(listHead) {
  if (!listHead || !listHead.next) return listHead;
  // sort using selection sort
  let outerCurrent = listHead;
  while (outerCurrent) {
    let smallNode = findSmall(outerCurrent);
    if (smallNode.value < outerCurrent.value) {
      // swap
      let temp = outerCurrent.value;
      outerCurrent.value = smallNode.value;
      smallNode.value = temp;
    }
    outerCurrent = outerCurrent.next;
  }
  // find sortest
  function findSmall(head) {
    let smallOne = head;

    let current = head;
    while (current) {
      if (current.value < smallOne.value) {
        smallOne = current;
      }
      current = current.next;
    }

    return smallOne;
  }

  return listHead;
}

function mergeTwoList(list1, list2) {
  // find the first list last node
  let current = list1;
  while (current && current.next) {
    current = current.next;
  }
  current.next = list2;

  return list1;
}

/**
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  function sortList(listHead) {
    if (!listHead || !listHead.next) return listHead;

    let outerCurrent = listHead;
    while (outerCurrent) {
      let smallNode = findSmall(outerCurrent);
      if (smallNode.val < outerCurrent.val) {
        // Swap values instead of nodes
        let temp = outerCurrent.val;
        outerCurrent.val = smallNode.val;
        smallNode.val = temp;
      }
      outerCurrent = outerCurrent.next;
    }

    function findSmall(head) {
      let smallOne = head;
      let current = head;
      while (current) {
        if (current.val < smallOne.val) {
          smallOne = current;
        }
        current = current.next;
      }
      return smallOne;
    }

    return listHead;
  }

  function mergeTwoList(list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;

    // Find the last node of list1
    let current = list1;
    while (current.next) {
      current = current.next;
    }
    current.next = list2; // Append list2 at the end of list1

    return list1;
  }

  const mergedList = mergeTwoList(list1, list2);
  return sortList(mergedList);
};

const list1 = new List();
list1.append(1);
list1.append(2);
list1.append(4);

const list2 = new List();
list1.append(1);
list1.append(3);
list1.append(4);

console.log(mergeTwoList(list1, list2));

/**
 * sort a link list with selection sort
 * set small value as current node
 * loop agin to find the sorted item in the list
 *
 */
