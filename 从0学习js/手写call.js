Function.prototype.myCall = function (context, ...args) {
  context = context || globalThis;
  const key = Symbol();
  context[key] = this;
  const result = context[key](...args);
  delete context[key];
  return result;
};
// 1 把函数挂到对象上
// 2 执行
// 3 删除
// fn.call(Object, arg1, arg2);
//让 fn 在 obj 上执行
// obj.fn(arg1,arg2)

function saying(a, b) {
  let name = "resin";
  console.log(this.name, a, b);
  return function fn() {
    console.log(this.name);
  };
}
const obj = {
  name: "code",
};

saying.myCall(obj, 1, 2);
saying(1, 2);
