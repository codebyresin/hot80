const STATUS = {
  PENDING: "pending",
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
};

class MyPromise {
  constructor(executor) {
    const resolve = (value) => {
      if (STATUS.PENDING === "pending") {
        this.status = STATUS.FULFILLED;
        this.value = value;
        this.onFulfilledCallbacks.forEach((fn) => fn(this.value));
      }
    };
    const reject = (reason) => {
      if (this.status === PENDING) {
        this.status = STATUS.REJECTED;
        this.reason = reason;
        // 执行所有暂存的回调
        this.onRejectedCallbacks.forEach((fn) => fn(this.reason));
      }
    };

    this.status = STATUS.PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then(onFulfilled, onRejected) {
    if (this.status === "fulfilled") {
      onFulfilled(this.value);
    }
    if (this.status === "rejected") {
      onRejected(this.reason);
    }
    if (this.status === "pending") {
      this.onFulfilledCallbacks.push(onFulfilled);
      this.onRejectedCallbacks.push(onRejected);
    }
    return new MyPromise((resolve, reject) => {});
  }
}

const myPromise = new MyPromise((resolve, reject) => {
  console.log("1. 开始执行异步任务...");
  setTimeout(() => {
    console.log("2. 任务完成！");
    resolve("数据加载成功");
  }, 1000);
});

myPromise.then((data) => {
  console.log("3. 收到数据:", data);
});

console.log("4. 主线程继续执行，不会等待...");
