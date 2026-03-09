async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}

async function async2() {
  console.log("async2");
}

console.log("script start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

async1();

new Promise((resolve) => {
  console.log("promise1");
  resolve();
}).then(() => {
  console.log("promise2");
});

console.log("script end");

// script start
// async1 start
// async2
// promise1
// script end
// async1 end
// promise2
// setTimeout

async function test() {
  try {
    await Promise.reject("error");
  } catch (e) {
    console.log("catch", e);
  }
  console.log("after");
}

test();

// catch error
// after

async function test() {
  try {
    Promise.reject("error");
  } catch (e) {
    console.log("catch");
  }
}

test();
//Uncaught (in promise) error
//try catch 只能捕获同步异常
