import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDU4WaZ2CUkEDiHnsdLd0LOpj6KbzNkCPI",
  authDomain: "expensify-236d2.firebaseapp.com",
  databaseURL: "https://expensify-236d2-default-rtdb.firebaseio.com",
  projectId: "expensify-236d2",
  storageBucket: "expensify-236d2.appspot.com",
  messagingSenderId: "917136319461",
  appId: "1:917136319461:web:83638755dcb538ac22050c",
  measurementId: "G-B3ZJ546WQK"
};
firebase.initializeApp(firebaseConfig);
const dataBase = firebase.database();


export {firebase, dataBase as default};

// dataBase.ref('expenses').push({
//   description: 'Books',
//   amount: 500,
//   note: '',
//   createAt: 'April'
// });
// dataBase.ref('expenses').push({
//   description: 'Pens',
//   amount: 200,
//   note: 'blue pen',
//   createAt: 'Jan'
// });
// dataBase.ref('expenses').push({
//   description: 'notebooks',
//   amount: 400,
//   note: 'classmate',
//   createAt: 'may'
// });
// dataBase.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
// dataBase.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
// dataBase.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
// // dataBase.ref('expenses').once('value').then((snapshot) => {
// //  const expenses = [];
// //  snapshot.forEach((childSnapshot) => {
// //   expenses.push({
// //     id: childSnapshot.key,
// //     ...childSnapshot.val()
// //   });
// //  });
// //  console.log(expenses);
// // });
// // dataBase.ref('expenses').on('value', (snapshot) => {
// //   const expenses = [];
// //   snapshot.forEach((childSnapshot) => {
// //    expenses.push({
// //      id: childSnapshot.key,
// //      ...childSnapshot.val()
// //    });
// //   });
// //   console.log(expenses);
// //  });

// // dataBase.ref('notes').push({
// //   title:'course topics',
// //   body: 'React JSX, Js'
// // })
// // dataBase.ref().on('value', (snapshot) => {
// //   const val = snapshot.val();
// //   console.log(`${val.name} is an ${val.job.title} at ${val.job.company} `)
// // });

// // dataBase.ref()
// // .once('value')
// // .then((snapshot)=> {
// //   console.log(snapshot.val());
// // })
// // .catch((e) => {
// //   console.log('Error fatching data')
// // })
// // dataBase.ref().set({
// //   name: 'Tahera Saman',
// //   age: 26,
// //   stressLevel: 9,
// //   job: {
// //     title: 'Intern',
// //     company: 'PayU'
// //   },
// //   location: {
// //     city: 'Muzaffarpur',
// //     country: 'India'
// //   }
// // }).then(() => {
// //   console.log('data is saved');
// // }).catch((e)=> {
// //   console.log('this is failed', e)
// // });

// // dataBase.ref().update({
// //   stressLevel: 9,
// //   'job/company': 'Amazon',
// //   'location/city': 'Banglore'
// // })
// // const dataBase = firebase.database();
// // dataBase.ref('age').set(25);
// // dataBase.ref('location/city').set('New Delhi');
// // dataBase.ref('attributes').set({
// //   height: 5,
// //   weight: 53
// // }).then(() => {
// //   console.log('data is saved');
// // }).catch((e)=> {
// //   console.log('This is failed', e);
// // })
// // dataBase.ref('isSingle').remove().then(()=>{
// //   console.log('data is saved 2');
// // }).catch((e)=>{
// //   console.log('data failed 2')
// // })