// Leetcode URL: https://leetcode.com/problems/merge-two-sorted-lists/
// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (list1 === null) {
    return list2;
  }
  if (list2 === null) {
    return list1;
  }

  let merged: ListNode;

  if (list1.val < list2.val) {
    merged = new ListNode(list1.val, mergeTwoLists(list1.next, list2));
  } else {
    merged = new ListNode(list2.val, mergeTwoLists(list1, list2.next));
  }
  return merged;
}

const L1 = new ListNode(1);
L1.next = new ListNode(2);
L1.next.next = new ListNode(4);

const L2 = new ListNode(2);
L2.next = new ListNode(3);
L2.next.next = new ListNode(5);

console.log(JSON.stringify(mergeTwoLists(L1, L2), null, 2));
