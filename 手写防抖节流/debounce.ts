/**
 * 手写防抖函数 (TypeScript 版)
 * 包含：this 指向、泛型参数、立即执行、取消功能
 */
function myDebounce<T, A extends any[], R>(
  fn: (this: T, ...args: A) => R,
  delay: number,
  immediate = false,
) {
  let timer: ReturnType<typeof setTimeout> | null = null;

  // 定义返回的函数类型
  type DebouncedFn = ((this: T, ...args: A) => void) & {
    cancel: () => void;
  };
  const debounced: any = function (this: T, ...args: A) {
    // 每次触发都清理之前的定时器
    if (timer) clearTimeout(timer);

    if (immediate) {
      // 如果已经有定时器，说明在等待周期内，不执行
      const callNow = !timer;

      timer = setTimeout(() => {
        timer = null; // 周期结束后重置定时器
      }, delay);

      if (callNow) {
        fn.apply(this, args);
      }
    } else {
      // 普通模式：延迟执行
      timer = setTimeout(() => {
        fn.apply(this, args);
        timer = null;
      }, delay);
    }
  };
  // 挂载取消方法到返回的函数上
  debounced.cancel = function () {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  };
  return debounced as DebouncedFn;
}
