function myThrottle<T, A extends any[]>(
  fn: (...args: any[]) => any,
  option: {
    interval?: number;
    leading?: boolean;
    trailing?: boolean;
  },
) {
  const { interval = 1000, leading = true, trailing = true } = option;
  let lasetTime: number = 0;
  let timer: ReturnType<typeof setTimeout> | null = null;

  const newThrottle = function (this: T, ...args: A) {
    const nowTime = new Date().getTime();
    if (!lasetTime && !leading) lasetTime = nowTime;

    const remaining = interval - (nowTime - lasetTime);
    if (remaining <= 0) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      fn.apply(this, args);
      lasetTime = nowTime;
      return;
    }
    if (!timer && trailing) {
      timer = setTimeout(() => {
        timer = null;
        lasetTime = !leading ? 0 : new Date().getTime();
        fn.apply(this, args);
      }, remaining);
    }
  };
  newThrottle.cancel = function () {
    if (timer) clearTimeout(timer);
    timer = null;
    lasetTime = 0;
  };
}
