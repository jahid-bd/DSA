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

  return sortList(mergeTwoList(list1, list2));
};



/**
 * input linklist two head
 * merge the link lists
 * step 1-> find the last node of a list
 * step 2 -> set last node next to second head
 * sort the link list
 *
 *  */
