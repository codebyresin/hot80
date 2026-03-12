//把非零的元素往前面放，后面补零
var moveZeroes = function (nums) {
  let slow = 0;
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
      slow++;
    }
  }
  return nums;
};

//z
var moveZeroes = function (nums) {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[index] = nums[i];
      index++;
    }
  }
  while (index < nums.length) {
    nums[index] = 0;
    index++;
  }
  return nums;
};
// 一个指针负责“找非零数”，另一个指针负责“记录下一个非零数该放哪”
//1,0,0,3,12
//1,3,0,0,12
//1,3,12,0,0
