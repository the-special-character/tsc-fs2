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

for (const [key, value] of map) {
    console.log(key);
    console.log(value);
}

// O(1)

// console.log(map.get("sejal"));  