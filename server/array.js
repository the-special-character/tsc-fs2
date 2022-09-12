//All for array

const users = [
    {
        name: "Devang",
        age: 20,
        gender: 'male'
    },
    {
        name: 'Sejal',
        age: 20,
        gender: 'female'
    },
    {
        name: 'Parth',
        age: 20,
        gender: 'male'
    },
    {
        name: 'nikki',
        age: 21,
        gender: 'female'
    },
    {
        name: 'harsh',
        age: 21,
        gender: 'male'
    },
    {
        name: 'jil',
        age: 22,
        gender: 'female'
    }
]; 
    // this ia alll by mutablte technice
//add to last
users.push({
    name: 'takshita',
        age: 19,
        gender: 'female'
})
console.log(users);

//delete to end
users.pop()
console.log(users);

//same as push but dont use
// users.unshift(
//     {
//         name: 'Roopa',
//         age: 19,
//         gender: 'female'   
//     }
// )
// console.log(users);

//same as pop but dont use
// users.shift()
// console.log(users);
console.log();

// add  update delete using index


//add
// const  index = 3

users.splice(3,0,{ name: 'Avani',
age: 19,
gender: 'female'})

console.log(users);

//update

users.splice(5,5,{ name: 'jil',
age: 19,
gender: 'female'})
console.log(users);

// update mehod 2  spred operator
users.splice(0,1,{
    ...users[0],
    name:"ara",
    age: 22
    
})
console.log(users);

//delete
users.splice(5,5)
console.log(users);




//all by immutabaly
//add
const newUsers = [{
    name: "bro",
    age: 25,
    gender: 'male'
    
},...users, {
    name: "Devang",
    age: 20,
    gender: 'male'
}]
console.log(newUsers);



//add, update
 
// const index = 1
const updatedUser = [
    users.slice(0,1),
    {
        name: "yagnesh",
         age : 33,
          gender: "male"
    },
    users.slice(1)
]
console.log(updatedUser);


//delete
const index = 0
const Self = [
    users.slice(0,index),
    {
        name: "Devang",
         age : 33,
          gender: "male"
    },
   
    users.slice(index+1)
]
console.log(Self);

//destructuring and delete

const [, ...resta] = users;

console.log(resta);


//adition of any numbers


// const add = (...params) => 
//    { let sum = 0;
//     for (let i = 0; i < params.length; i++) {
//         const element = params[i];
//             sum = sum+element;}
//             return sum;
//     }
//     console.log(add(1,2,3,4,5,10,40));








