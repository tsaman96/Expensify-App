const promise = new Promise((resolve, reject) => {
  setTimeout(() => {resolve({
    name: 'Tahera Saman',
    age: 26
  })}, 5000)
});
console.log('before');

promise.then((data) => {
  console.log('1', data);
}).catch((error) => {
  console.log('error:',error);
});
console.log('after');