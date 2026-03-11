//把非零的元素往前面放，后面补零
function fn(nums) {
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== 0) {
    }
  }
}

// 一个指针负责“找非零数”，另一个指针负责“记录下一个非零数该放哪”
//1,0,0,3,12
//1,3,0,0,12
//1,3,12,0,0
