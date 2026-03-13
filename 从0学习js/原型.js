function myInstanceOf(left, right) {
  let proto = Object.getPrototypeOf(left);
  while (proto) {
    if (proto === right.prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
  return false;
}

//js的原型链，让对象通过prototype形成的链式结构，属性访问沿着
// 原型链向上查找，实现了方法共享与继承

function A() {
  //   return {
  //     b: function () {
  //       console.log(1);
  //     },
  //   };
}
const a = new A();

console.log(a.__proto__); //{}
console.log(A.prototype); //{}
console.log(a.__proto__ === A.prototype); //true
console.log(A.prototype.__proto__); //[Object: null prototype] {}
console.log(Object.prototype.__proto__); //null
