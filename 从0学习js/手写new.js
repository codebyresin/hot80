function myNew(fn, ...args) {
  //   const obj = {};
  //   obj.__proto__ = fn.prototype;
  const obj = Object.create(fn.prototype);
  const res = fn.apply(obj, args);
  return res instanceof Object ? res : obj;
}

const obg = new Object();
