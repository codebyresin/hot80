function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    let result = [];
    let completedCount = 0;
    promises.forEach((pro, index) => {
      Promise.resolve(pro)
        .then((res) => {
          result[index] = res;
          completedCount++;
          if (completedCount === promises.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}
