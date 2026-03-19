var detectCycle = function (head) {
  let slow = head;
  let fast = head;
  let next = head;
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
    if (slow === fast) {
      let p1 = head;
      let p2 = slow;
      while (p1 !== p2) {
        p1 = p1.next;
        p2 = p2.next;
      }
      return p1;
    }
  }
  return null;
};

var detectCycle = function (head) {
  let set = new Set();
  while (head) {
    if (set.has(head)) return head;
    set.add(head);
    head = head.next;
  }
  return null;
};
