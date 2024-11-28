// 1. new Promise
// 2. Executor

// 3 status
// 1. Pending -> Memory leak
// 2. Fulfilled
// 3. Rejected
var promise = new Promise(
  // Executor
  function(resolve, reject){
    // Logic
    // Thành công: resolve()
    // Thất bại: reject()
    
    // Fake call API
    reject('Co loi');
  }
);

promise
  .then(function (courses) {
    console.log(courses);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log('Done!');
  })