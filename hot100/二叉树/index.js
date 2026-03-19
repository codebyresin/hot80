//!前序遍历（根左右）
function preorder(root) {
  if (!root) return;
  console.log(root.val);
  preorder(root.left);
  preorder(root.right);
}

//!中序遍历（左根右）
function inorder(root) {
  if (!root) return;
  inorder(root.left);
  console.log(root.val);
  inorder(root.right);
}
//!后序遍历（左右根）
function postorder(root) {
  if (!root) return;
  postorder(root.left);
  postorder(root.right);
  console.log(root.val);
}

//!层序遍历
function levelOrder(root) {
  if (!root) return [];
  let queue = [];
  let res = [];
  while (queue.length) {
    let node = queue.shift();
    res.push(node.val);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return res;
}
//!数的高度
// function maxDepth(root) {
//   if (!root) return 0;
//   return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
// }

// function maxDepth(root) {
//   let max = 0;
//   function dfs(node, depth) {
//     if (!node) return;
//     max = Math.max(max, depth);
//     dfs(root.left, depth + 1);
//     dfs(root.right, depth + 1);
//   }
//   dfs(root, 1);
//   return max;
// }

function maxDepth(root) {
  if (!root) return 0;
  let queue = [root];
  let depth = 0;
  while (queue.length) {
    let size = queue.length;
    for (let i = 0; i < queue.size; i++) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    depth++;
  }
  return depth++;
}

//!是否是相同树
function isSameTree(p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  return (
    p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  );
}

//!翻转二叉树
function invertTree(root) {
  if (!root) return null;
  let temp = root.left;
  root.left = root.right;
  root.right = temp;
  invertTree(root.left);
  invertTree(root.right);
  return root;
}

//!二叉树直径
var diameterOfBinaryTree = function (root) {
  let res = 0;
  function dfs(root) {
    if (!root) return 0;
    const leftDep = dfs(root.left);
    const rightDep = dfs(root.right);
    res = Math.max(res, leftDep + rightDep);
    return Math.max(leftDep, rightDep) + 1;
  }
  dfs(root);
  return res;
};

//!二叉树层序遍历
var levelOrder = function (root) {
  if (!root) return [];
  let res = [];
  let queue = [root];
  while (queue.length) {
    let levelSize = queue.length;
    let currentVal = [];
    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();
      currentVal.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    res.push(currentVal);
  }
  return res;
};
