function myPromiseRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((pro, index) => {
      Promise.resolve(pro)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}
