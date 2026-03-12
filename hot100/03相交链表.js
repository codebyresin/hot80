//计算长度，然后diff比较，拉到同一位置，进行循环

var getIntersectionNode = function (headA, headB) {
  let lenA = 0;
  let lenB = 0;
  let pa = headA;
  let pb = headB;

  while (pa) {
    lenA++;
    pa = pa.next;
  }

  while (pb) {
    lenB++;
    pb = pb.next;
  }
  pa = headA;
  pb = headB;
  if (lenA > lenB) {
    let diff = lenA - lenB;
    while (diff--) {
      pa = pa.next;
    }
  } else {
    let diff = lenB - lenA;
    while (diff--) {
      pb = pb.next;
    }
  }
  while (pa && pb) {
    if (pa === pb) return pa;
    pa = pa.next;
    pb = pb.next;
  }
  return null;
};

//更优雅的解法
// A+B===B+A
var getIntersectionNode = function (headA, headB) {
  let pa = headA;
  let pb = headB;
  while (pa !== pb) {
    pa ? (pa = pa.next) : headB;
    pb ? (pb = pb.next) : headA;
  }
  return pa;
};
