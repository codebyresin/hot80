var isSymmetric = function (root) {
  if (!root) return true;
  let queue = [root.left, root.right];
  while (queue.length) {
    let left = queue.shift();
    let right = queue.shift();
    if (!left && !right) continue;
    if (!left || !right) return false;
    if (left.val !== right.val) return false;
    queue.push(left.left);
    queue.push(right.right);
    queue.push(left.right);
    queue.push(right.left);
  }
  return true;
};
