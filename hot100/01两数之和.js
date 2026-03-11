// 哈希

const map = new Map();
for (let i = 0; i < arr.length; i++) {
  let need = target - arr[i];
  if (map.has(need)) {
    return [map.get(need), i];
  }
  map.set(nums[i], i);
}
