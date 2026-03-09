const promiseStates = {
  PENDING: "pending",
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
};

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
  _resolve() {}
}
