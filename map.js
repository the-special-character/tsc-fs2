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
        name: 'taimur',
        age: 08,
        gender: 'male'
    },
    {
        name: 'sejal',
        age: 20,
        gender: 'female'
    }
];

const updatedUser = users.map(x => {
    if(x.name === 'anuj') {
        return {...x, age: 21}
    }
    return x;
})

console.log(updatedUser);

// const arr = [1,2,3,4,5,6];

// const newArr = arr.map(x => {
//     if(x % 2 === 0) {
//         return x * 2
//     }
//     return x;
// });

// console.log(newArr);