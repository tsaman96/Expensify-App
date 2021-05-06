// 
// object destructuring
// 
// const person = {
//   name: 'saman',
//   age: 26,
//   location: {
//     city: 'Muzaffarpur',
//     temprature: 40
//   }
// }
// const { name:firstName='Anonymous', age} = person;
// const { temprature, city} =person.location;
// console.log(`${firstName} is ${age}`);
// console.log(`It's ${temprature} in ${city}`);
// const book = {
//   title: 'Engineering Mathematics',
//   author: 'B.S Agarwal',
//   publisher:{
   
//   }
// }
// const { name: publisherName='self-published'} =book.publisher;
// console.log(publisherName);
//
//array destructuring
//
const address = ['38 kamal lane Azad Road', 'Muzaffarpur', 'Bihar', '842001'];
const [street, city, state, zip] = address;
console.log(`you are in ${city} ${state}`);

const item = ['coffee (hot)', '$10', '$15', '$20'];
const [coffee, ,medCost] =item;
console.log(`Here a medium ${coffee} costs ${medCost}`);
// a = {name: 'cat', color: 'white'}
// b= {age: 1, ...a, color: 'black'}