import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyANMvj8lHgkEpTPGrONEvjZZVbuAoANhDk",
    authDomain: "emi-expensify.firebaseapp.com",
    databaseURL: "https://emi-expensify.firebaseio.com",
    projectId: "emi-expensify",
    storageBucket: "emi-expensify.appspot.com",
    messagingSenderId: "sender-id",
    appId: "app-id",
    measurementId: "G-measurement-id",
  };

// // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


const database = firebase.database();

export {firebase, googleAuthProvider, database as default};
// const database = firebase.database();
// database.ref().set({
//     username: "Emily",
//     email: "hangktt@adasiaholdings.com",
//     age: 24,
//     location: {
//         city: "HCM",
//         postcode: 70000
//     }
// });

// database.ref("age").set(18);
// database.ref("location/city").set("Hanoi");
// var ref = database.ref("location");
// ref.once("value", function(snapshot){
//     console.log(snapshot.val());
// })

//Promise
// const promise = new Promise((resolve, reject)=>{
//     setTimeout(()=> {
//         // resolve("Message sent successfully");
//         reject("internet interrupted");
//     }, 3000);
// });
// console.log("start");
// promise.then((data)=>{
//     console.log(data);
// }).catch(error => {
//     console.log(error);
// })

// console.log("end");

// const database = firebase.database();


//set
// database.ref().set({
//     name: "Emi",
//     age: 24,
//     location: {
//         city: "HCM",
//         postcode: 70000
//     }
// })

//Update
// database.ref("age").set(20);
// database.ref("location/city").set("Hanoi");
// database.ref().update({
//     age: 26,
//     name: "Emi Khuc",
//     job: "Dev",
//     "location/city": "SG"
// }).catch((e) => {
//     console.log("errors: ", e);
// })
// console.log("Start");
//delete
// database.ref("job").remove();
// database.ref("age").set(null);
// //Read
// database.ref().once("value", snapshot =>{
//     console.log(snapshot.val());
// })
//updat lien tuc
// database.ref().on("value", snapshot => {
//     console.log(snapshot.val());
// });

// setTimeout(()=>{
//    database.ref("location/city").set("Phu Quoc");
// }, 2000)

// setTimeout(()=>{
//     database.ref("location/city").set("Quy Nhon");
//     database.ref().off();
//  }, 4000)

//  setTimeout(()=>{
//     database.ref("location/city").set("baria");
//  }, 6000)

// const expenses = [
//     {description: "buy house", 
//     amount: 4000, 
//     createdAt: 1000},
//     {description: "buy car", 
//     amount: 2000, 
//     createdAt: 1500},
//     {description: "buy book", 
//     amount: 300, 
//     createdAt: 500}
// ];


// // database.ref().set(expenses);
// // database.ref().remove();
// // database.ref().push({description: "buy book", 
// // amount: 300, 
// // createdAt: 500});
// // database.ref().on("value", (snapshot) => {
// //     let exps = [];
// //     snapshot.forEach((xp)=>{
// //         exps.push({
// //             id: xp.key,
// //             ...xp.val()
// //         })
// //     })
// //     console.log(exps);
// // })
// database.ref().on("child_removed", (snapshot)=>{
//     console.log(snapshot.val());
// })
