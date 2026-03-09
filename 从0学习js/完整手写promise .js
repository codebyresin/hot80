const promiseStates = {
  PENDING: "pending",
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
};

//模拟微任务
function runMicroTask(callback) {
  if (process && process.nextTick) {
    process.nextTick(callback);
  } else if (MutationObserver) {
    const p = document.createElement("p");
    const observer = new MutationObserver(callback);
    observer.observe(p, {
      childList: true,
    });
  } else {
    setTimeout(callback, 0);
  }
}

class myPromise {
  constructor(executor) {
    this._status = promiseStates.PENDING;
    this._value = undefined;
    this._handlers = [];
    try {
      executor(this._resolve.bind(this), this.reject.bind(this));
    } catch (err) {
      this._reject(err);
      console.log(err);
    }
  }
  _runOneHandler(handler) {
    const { executor, status, reject, resolve } = handler;
    runMicroTask(() => {
      if (this._status !== status) return;
      if (typeof executor !== "function") {
        //这是是then返回的promise的
        this._status === promiseStates.FULFILLED
          ? resolve(this._value)
          : reject(this._value);
        return;
      }
      //如果是链式，上一个promise或者then
      try {
        const result = executor(this._value);
        resolve(result);
      } catch (err) {
        reject(err);
      }
    });
  }
  //启动队列
  _runHandlers() {
    if (this._state === promiseStates.PENDING) return;
    while (this._handlers[0]) {
      const handler = this._handlers[0];
      this._runOneHandler(handler);
      this._handlers.shift();
    }
  }
  _changeStates(newStatus, value) {
    if (this._status !== promiseStates.PENDING) return;
    this._state = newStatus;
    this._value = value;
    this._runHandlers();
  }
  _resolve(value) {
    this._changeStates(promiseStates.FULFILLED, value);
  }
  _reject(reason) {
    this._changeStates(promiseStates.REJECTED, reason);
  }
  _pushHandler(executor, status, resolve, reject) {
    this._handlers.push({
      executor,
      status,
      resolve,
      reject,
    });
  }
  then(onFulfilled, onRejected) {
    return new myPromise((resolve, reject) => {
      this._pushHandler(onFulfilled, promiseStates.FULFILLED, resolve, reject);
      this._pushHandler(onRejected, promiseStates.REJECTED, resolve, reject);
      this._runHandlers();
    });
  }
  catch(onRejected) {
    return this.then(null, onRejected);
  }
  finally(onSettled) {
    return this.then(
      (data) => {
        return data;
      },
      (err) => {
        throw err;
      },
    );
  }
  static all(promises) {
    return new myPromise((resolve, reject) => {
      const result = [];
      let computedCount = 0;
      if (promises.length === 0) return resolve([]);
      promises.forEach((pro, index) => {
        myPromise
          .resolve(pro)
          .then((value) => {
            result[index] = value;
            computedCount++;
            if (computedCount === promises.length) resolve(result);
          })
          .catch((err) => {
            reject(err);
          });
      });
    });
  }
}

new Promise((resolve, reject) => {
  resolve(123);
}).then((res) => {
  console.log(res);
});
//123
