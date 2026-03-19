//!先反转
//!反转，克隆，在比较
// var isPalindrome = function (head) {
//   let isTrue = true;
//   let copyHead = cloneList(head);
//   const prev = traverse(copyHead);
//   let cur = head;
//   while (cur && prev) {
//     if (cur.val !== prev.val) {
//       isTrue = false;
//       break;
//     }
//     cur = cur.next;
//     prev = prev.next;
//   }
//   return isTrue;
// };
// function traverse(head) {
//   let prev = null;
//   let cur = head;
//   while (cur) {
//     let next = cur.next;
//     cur.next = prev;
//     prev = cur;
//     cur = next;
//   }
//   return prev;
// }
// function cloneList(head) {
//   let dummy = new ListNode(0);
//   //dummy 方便构造新链表
//   let p = dummy;
//   let cur = head;

//   while (cur) {
//     p.next = new ListNode(cur.val);
//     p = p.next;
//     cur = cur.next;
//   }
//   return dummy.next;
// }

//! 快慢指针找中点;
//! 只反转后半链表;
//! 比较;
var isPalindrome = function (head) {
  if (!head || head.next) return true;
  let fast = head;
  let slow = head;
  //找道中点了
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let prev = null;
  let cur = slow;
  while (cur) {
    let next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  let p1 = head;
  let p2 = prev;
  while (p1) {
    if (p1.val !== p2.val) return false;
    p1 = p1.next;
    p2 = p2.next;
  }
  return true;
};
