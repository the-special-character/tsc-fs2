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

const map = new Map()

map.set("yagnesh", {
    name: "yagnesh",
    age: 33,
    gender: 'male'
})

map.set("anuj", {
    name: 'anuj',
    age: 22,
    gender: 'male'
})

map.set("sejal", {
    name: 'sejal',
    age: 20,
    gender: 'female'
})


console.log(map.has("sejal")); 
// const arr = [1,2,3,4,5,6,7, 5]

// console.log([...new Set(arr)]);

// const set = new Set(arr);

// console.log(set);

// // console.log(set.has(4));

// console.log(set.has({})); 

// set.delete(4);

// console.log(set);

// class Animal {
//     hasLegs() {
//         return true
//     }
// }

// const a = new Animal();
// const b = new Animal();

// console.log(a == b);

// const updatedArray = []

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if(element !== 4) {
//         updatedArray.push(element)
//     }
// }

// console.log(updatedArray);

// arr.splice(3, 1);

// console.log(arr);

// let result = false;

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if(element === 4){
//         result = true;
//         break;
//     }
// }