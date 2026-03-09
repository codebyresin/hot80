//!例子1
let drink = "Water"; // 全局作用域

function kitchen() {
  let drink = "Milk"; // 厨房作用域

  // 👇 重点：getDrink 函数是在 kitchen 里面定义的（出生的地方）
  function getDrink() {
    console.log(drink);
  }

  return getDrink; // 把函数返回出去
}

function livingRoom() {
  let drink = "Cola"; // 客厅作用域
  const myFunc = kitchen(); // 从厨房拿到了 getDrink 函数
  myFunc(); // 👈 在客厅调用这个函数
}

livingRoom();
// 输出什么？是 "Cola" (调用地的变量) 还是 "Milk" (定义地的变量)？
// 输出 "Milk"，因为 getDrink 函数是在 kitchen 里面定义的（出生的地方），它只能访问 kitchen 作用域中的变量 drink，而不能访问 livingRoom 作用域中的变量 drink。这就是闭包的特性：函数能够记住和访问它被创建时所在得词法作用域，即使这个函数在它的作用域之外执行。

//!例子二
let x = 1;

function outer() {
  let x = 2;
  function inner() {
    console.log(x);
  }
  return inner;
}

let fn = outer();
// 此时 fn 拿着 inner 函数，并且记住了 x=2 的环境

function another() {
  let x = 3;
  fn(); // 在 x=3 的环境里调用 fn
}

another();
// 请问输出 1, 2, 还是 3？
// 2
