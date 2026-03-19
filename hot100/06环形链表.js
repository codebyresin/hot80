//快慢指针，快的可以遇见慢的
var hasCycle = function (head) {
  if (!head || !head.next) return false;
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) return true;
  }
  return false;
};
