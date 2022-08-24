const arr = [9,2,3,4,5,6];

const sum = arr.reduce((p, c) => p + c, 0);


const obj = {
    a: undefined,
    b: 2
}

const key = 'c'

obj[key] = [];

// console.log(obj);

// console.log(obj.c);

// console.log(Object.hasOwnProperty.call(obj, 'c'));

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

const users = [
    {
        name: "yagnesh",
        age: 33,
        gender: 'male'
    },
    {
        name: 'jil',
        age: 18,
        gender: 'female'
    },
    {
        name: 'anuj',
        age: 22,
        gender: 'male'
    },
    {
        name: 'nikki',
        age: 18,
        gender: 'female'
    },
    {
        name: 'taimur',
        age: 08,
        gender: 'male'
    },
    {
        name: 'sejal',
        age: 19,
        gender: 'female'
    }
];

// {
//     '00-09':[],
//     "10-19": [],
//     "20-29": [],
//     "30-39": []
// }

const age = Math.floor(22 / 10);

console.log(`${age}0-${age}9`);

// "20-29"

const groupByGender = users.reduce((p, c) => {
    const age = Math.floor(c.age / 10);
    const key = `${age}0-${age}9`;
    if (!Object.hasOwnProperty.call(p, key)) {
        p[key] = []
    }
    p[key].push(c);
    return p;
}, {});

console.log(groupByGender);

// {
//     male: [],
//     female: []
// }

// const index = users.reduce((p, c) => {
//     console.log(p);
//     if(c.gender === 'male') {
//         p.push(c);
//     }
//     return p;
// }, []);

// console.log(index);

//  console.log(sum);

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     sum += element;
// }

// console.log(sum);