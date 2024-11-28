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
    
    resolve();
  }
);

// promise
//   .then(function () {
//     return 1;
//   })
//   // nếu việc 1 trả về ko phải promise -> việc 2 chạy ngay lập tức, nếu việc 1 trả về promise -> việc 2 phải đợi xong
//   .then(function (data) {
//     console.log(data);
//     return 2;
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(function () {
//     console.log('Done!');
//   });


// function sleep(ms){
//   return new Promise(function(resolve){
//     setTimeout(resolve, ms);
//   });
// }

// sleep(1000)
//   .then(function(){
//     console.log(1)
//     return sleep(1000);
//   })
//   .then(function(){
//     console.log(2)
//     return new Promise(function(resolve, reject){
//       reject('Co loi');
//     });
//   })
//   .then(function(){
//     console.log(3)
//     return sleep(1000);
//   })
//   .then(function(){
//     console.log(4)
//     return sleep(1000);
//   })
//   .catch(function(err){
//     console.log(err)
//   });

// var promise = new Promise(function(resolve, reject){
  // Logic
  // resolve('Success!');
  // reject('Error!')
// });

// Thư viện: output luôn luôn là một promise

// var promise = Promise.resolve('Success!');

// promise
//   .then(function(result){
//     console.log('result:', result);
//   })
//   .catch(function(err){
//     console.log('err:', err);
//   });


var promise1 = new Promise(
  function(resolve) {
    setTimeout(function(){
      resolve([1]);
    }, 1000);
  }
)

// var promise2 = new Promise(
//   function(resolve) {
//     setTimeout(function(){
//       resolve([2, 3]);
//     }, 2000);
//   }
// )
var promise2 = Promise.reject('Co loi');

Promise.all([promise1, promise2])
  .then(function(result){
    var result1 = result[0];
    var result2 = result[1];
    console.log(result1.concat(result2));
  })
  .catch(function(error){
    console.log(error)
  });