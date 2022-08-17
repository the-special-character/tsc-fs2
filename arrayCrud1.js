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

const [,,, ...rest] = users;

console.log(rest);

const index = 1;

const updatedUsers = [
    ...users.slice(0, index),
    {
            name: "Parth",
            age: 21,
            gender:  'male'
        },
        ...users.slice(index + 1)
]
console.log(updatedUsers);

// const newUsers = [{
//     name: "Kishan",
//     age: 21,
//     gender:  'male'
// }, ...users, {
//     name: "Parth",
//     age: 21,
//     gender:  'male'
// },];

// console.log(newUsers);