function promisify(callback) {
  return new Promise(function (resolve, reject) {
    callback(function (err, res) {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}

module.exports = promisify;