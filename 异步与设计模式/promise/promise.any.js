function myPromiseAny(promises) {
  return new Promise((resolve, reject) => {
    let rejectCount = 0;
    const erroes = [];
    if (!Array.isArray(promises)) {
      throw new TypeError("Argument must be an array");
    }
    promises.forEach((pro, index) => {
      Promise.resolve(pro)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          rejectCount++;
          erroes[index] = err;
          if (rejectCount === erroes.length) {
            reject(erroes);
          }
        });
    });
  });
}
