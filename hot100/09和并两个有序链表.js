var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode(0);
  let cur = dummy;
  let left = list1;
  let right = list2;
  while (left && right) {
    if (left.val <= right.val) {
      cur.next = left;
      left = left.next;
    } else {
      cur.next = right;
      right = right.next;
    }
    cur = cur.next;
  }
  cur.next = left || right;
  return dummy.next;
};

//12345678
//345
//1233445
