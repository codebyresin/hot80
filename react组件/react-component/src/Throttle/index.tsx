import { useCallback, useEffect, useRef } from "react";

type throttleFn<T extends (...args: any[]) => any> = (
  ...args: Parameters<T>
) => ReturnType<T> | undefined;

export function useThrottle<T extends (...args: any[]) => any>(
  fn: T,
  options: {
    interval: number;
    leading?: boolean;
    trailing?: boolean;
  },
): {
  throttledFn: throttleFn<T>;
} {
  const { interval, leading = false, trailing = false } = options;

  const lastTimeRef = useRef<number>(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fnRef = useRef<T>(fn);
  useEffect(() => {
    fnRef.current = fn;
  }, [fn]);

  const throttledFn = useCallback(
    (...args: Parameters<T>): ReturnType<T> | undefined => {
      const nowTime = new Date().getTime();
      const remainTime = interval - (nowTime - lastTimeRef.current);
      if (remainTime <= 0) {
        const result = fnRef.current(...args);
        lastTimeRef.current = nowTime;
        return;
      }
      if (!timerRef.current && trailing) {
        timerRef.current = setTimeout(() => {
          timerRef.current = null;
        });
      }
      // 这里实现节流逻辑，控制函数调用的频率
      // 可以使用 setTimeout 来实现节流效果
      // 具体实现细节可以根据需求进行调整
      return undefined; // 返回函数的结果或者 undefined
    },
    [fn, options],
  );
  return {
    throttledFn,
  };
}
const Throtttle = () => {
  return <div className="card">节流组件</div>;
};
export default Throtttle;
