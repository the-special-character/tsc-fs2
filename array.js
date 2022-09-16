const users = [
  {
    name: 'Yash',
    age: 20,
    gender: 'male',
  },
  {
    name: 'Debu',
    age: 21,
    gender: 'male',
  },
  {
    name: 'aysha',
    age: 19,
    gender: 'female',
  },
  {
    name: 'lata',
    age: 23,
    gender: 'female',
  },
];

// console.log(users);

// //add mutable
// // users.push({
// //     name:'savan',
// //     age:33,
// //     gender:'male'
// // })

// const index = 1 ;

// add mutable

// users.splice(index,0,{
//     name:"Savan",
//     age: 33,
//     gender:'male'
// })

// console.log(users);

// //update mutable

// users.splice(index,1,{
//     ...users[1],age:51
// })

// console.log(users);

// delete mutable

// users.splice(index,1)

// console.log(users);

// console.log(users);

//remove mutable

// users.pop()
// console.log(users);

// users.shift()  //remove for begin
// console.log(users);

// users.unshift()  //remove for last
// console.log(users);

//add immutable

// const newusers = [{
//     name:"savan",
//     age: 50,
//     gender:'male'
// },...users]

// console.log(newusers);

// const index =1 ;

// const updateusers = [
//     ...users.slice(0,index),
//     {
//         name:"Savan",
//         age: 50,
//         gender: 'Male'
//     },
//     ...users.slice(index)
// ]

// console.log(updateusers);

//update immutabel

// const updateusers2 = [
//     ...users.slice(0,index),
//     {
//         name:"ABC",
//         age: 32,
//         gender:'female'
//     },
//     ...users.slice(index)
// ]

// console.log(updateusers2);

//delete immutable

// const updateusers3 = [
//     ...users.slice(0,index),
//     ...users.slice(index+1)
// ]

// console.log(updateusers3);

//Array descruturing

const [, , , ...rest] = users;
console.log(rest);
