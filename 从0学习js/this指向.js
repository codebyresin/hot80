const obj = {
  name: "前端面试",
  // 普通函数
  sayHelloNormal: function () {
    console.log("Normal:", this.name);

    // 在普通函数内部定义一个箭头函数
    const arrowFunc = () => {
      console.log("Arrow:", this.name);
    };

    arrowFunc();
  },

  // 箭头函数作为对象方法
  sayHelloArrow: () => {
    console.log("Method Arrow:", this.name);
  },
};

// 调用
obj.sayHelloNormal(); //普通面试，普通面试
obj.sayHelloArrow(); //普通面试

//普通函数调用，谁调用，this指向谁
// 箭头函数没this，this为上下文得到this，上下文是函数的执行环境
