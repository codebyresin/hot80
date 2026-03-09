function limitRequest(tasks, limit = 3) {
  let i = 0;
  let running = 0;
  let result = [];
  return new Promise((resolve) => {
    function run() {
      if (i === tasks.length && running === 0) {
        resolve(result);
        return;
      }
      while (running < limit && i < tasks.length) {
        const currentIndex = i++;
        running++;
        tasks[currentIndex]()
          .then((res) => {
            result[currentIndex] = res;
          })
          .finally(() => {
            running--;
            run();
          });
      }
    }
    run();
  });
}
