Function.prototype.myBind = function (context, ...args) {
  const fn = this; //Person

  function bound() {
    const isNew = this instanceof bound; //BoundPerson
    const finalThis = isNew ? this : context;
    return fn.apply(finalThis, [...args, ...newArgs]);
  }
  bound.prototype = Object.create(fn.prototype);
  return bound;
};

//再次强调，谁调用this，this就指向谁

function Person(name) {
  this.name = name;
}
const BoundPerson = Person.bind({});
const p = new BindPerson("a");

// 1 bind 先记住原函数
// 2 返回新函数
// 3 新函数执行时判断是否 new
// 4 决定 this 指向
