// https://leetcode.com/problems/add-two-numbers/

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

const getNumberAsString = (l: ListNode): string => {
  let num = ''
  let current: ListNode | null = l
  while(!!current) {
    num = current.val + num
    current = current.next
  }
  return num
}

const addToList = (l: ListNode, value) => {
  if (!l.next) {
    l.next = new ListNode(value)
    return
  }
  addToList(l.next, value)
  return l
}

const addNumberToLinkedList = (value: number, l: ListNode) => {
  const node = new ListNode(value)
  node.next = l
  return node
}

function addTwoNumbers(l1: ListNode, l2: ListNode): ListNode | null {
  const l1String = getNumberAsString(l1)
  const l2String = getNumberAsString(l2)  
  const sum = String(BigInt(l1String) + BigInt(l2String))
  let index = 0
  let res = new ListNode(Number(sum[index]))
  while (index < sum.length) {
    index++
    res = addNumberToLinkedList(Number(sum[index]), res)
  }

  return res.next
};

function main() {
  const L1 = new ListNode(2)
  L1.next = new ListNode(4)
  L1.next.next = new ListNode(3)

  const L2 = new ListNode(5)
  L2.next = new ListNode(6)
  L2.next.next = new ListNode(4)

  console.log(
    JSON.stringify(addTwoNumbers(L1, L2))
  );
}

main()

