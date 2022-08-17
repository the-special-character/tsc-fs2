const users = [
    {
        name: "yagnesh",
        age: 33,
        gender: 'male'
    },
    {
        name: 'anuj',
        age: 22,
        gender: 'male'
    },
    {
        name: 'sejal',
        age: 20,
        gender: 'female'
    }
];

const newUsers = [{
    name: 'savan',
gender: 'male',
age: 22
}, ...users, ]
console.log(newUsers);

// console.log(users[1]);

// users.splice(1, 1)


// users.splice(1,0,{
//         name: 'savan',
//         gender: 'male',
//         age: 22
//     }, 
//     {

//     })

    // console.log(users);

// users.unshift({
//     name: 'savan',
//     gender: 'male',
//     age: 22
// });


// console.log(users);


// users.shift()
// console.log(users);