const list = [
  { id: 1, name: "部门1", parentId: 0 },
  { id: 2, name: "部门2", parentId: 1 },
  { id: 3, name: "部门3", parentId: 1 },
  { id: 4, name: "部门4", parentId: 2 },
];

const resList = [
  {
    id: 1,
    name: "部门1",
    parentId: 0,
    children: [
      {
        id: 2,
        name: "部门2",
        parentId: 1,
        children: [{ id: 4, name: "部门4", parentId: 2, children: [] }],
      },
      { id: 3, name: "部门3", parentId: 1, children: [] },
    ],
  },
];

function listToTree(list) {
  const map = new Map();
  const result = [];
  list.forEach((item) => {
    map.set(item.id, { ...item, children: [] });
  });
  list.forEach((item) => {
    const node = map.get(item.id);
    if (item.parentId === 0) {
      result.push(node);
    } else {
      const parent = map.get(item.parentId);
      if (parent) {
        parent.children.push(node);
      }
    }
  });
  return result;
}

/**
 * @递归
 */
function buildTree(list, parentId) {
  const result = [];
  for (const item of list) {
    if (item.parentId === parentId) {
      const node = {
        ...item,
        children: buildTree(list, item.id),
      };
      result.push(node);
    }
  }
  return result;
}
