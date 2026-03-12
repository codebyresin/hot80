// 遍历链表
function traaverse(head) {
  let cur = head;
  while (cur) {
    cur = cur.next;
  }
}

//链表转数组
function listToArray(head) {
  const arr = [];
  let cur = head;
  while (cur) {
    arr.push(cur.val);
    cur = cur.next;
  }
  return arr;
}

//数组转链表
function arrayToList(arr) {
  const dummy = new ListNode(0);
  let cur = dummy;
  for (let num of arr) {
    cur.next = new ListNode(num);
    cur = cur.next;
  }
  return dummy.next;
}
//删除节点
function deleteNode(head, val) {
  const dummy = new ListNode(0);
  dummy.next = head;
  let cur = dummy;
  while (cur.next) {
    if (cur.next.val === val) {
      cur.next = cur.next.next;
      breaks;
    }
    cur = cur.next;
  }
  return dummy.next;
}
//插入节点
function insetAfter(node, val) {
  const newNode = new ListNode(val);
  newNode.next = node.next;
  node.next = newNode;
}
//反转链表
function reverseList(head) {
  let prev = null;
  let cur = head;
  while (cur) {
    let next = cur.next; //null

    cur.next = prev; //
    prev = cur;
    cur = next;
  }
  return prev;
}

// 1->2->3->4->null

//链表中找中点
function findMiddle(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}
