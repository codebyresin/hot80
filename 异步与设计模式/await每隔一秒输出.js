async function printPeriodically({ message, times }) {
  for (let i = 0; i < times; i++) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(message);
  }
}

printPeriodically({ message: "hello world", times: 5 });
