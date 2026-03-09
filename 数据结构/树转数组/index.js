const tree = [
  {
    id: 1,
    name: "A",
    children: [
      { id: 2, name: "B" },
      {
        id: 3,
        name: "C",
        children: [{ id: 4, name: "D" }],
      },
    ],
  },
];
const res = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 3, name: "C" },
  { id: 4, name: "D" },
];

/**
 * 递归
 * @param {*} tree
 * @returns
 */
// function treeToArray(tree) {
//   const res = [];
//   function traverse(node) {
//     node.forEach((item) => {
//       const { children, ...rest } = item;
//       res.push(rest);
//       if (children && children.length) {
//         traverse(children);
//       }
//     });
//   }
//   traverse(tree);
//   return res;
// }
// console.log(treeToArray(res));

/**
 * 添加parentId
 * @param {*} tree
 * @param {*} parentId
 * @returns
 */
// function treeToArray(tree, parentId = null) {
//   let result = [];
//   tree.forEach((node) => {
//     const { children, ...rest } = node;
//     result.push({ ...rest, parentId });
//     if (children) {
//       result = result.concat(treeToArray(children, node.id));
//     }
//   });
//   return result;
// }

/**
 * @栈
 * @param {*} tree
 * @returns
 */
function treeToArray(tree) {
  const stack = [...tree];
  const result = [];
  while (stack.length) {
    const node = stack.shift();
    const { children, ...rest } = node;
    result.push(rest);
    if (children) {
      stack.unshift(...children);
    }
  }

  return stack;
}
console.log(treeToArray(tree));
