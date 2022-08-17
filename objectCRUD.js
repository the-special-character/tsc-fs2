const gender = "other";

const data = {
    firstName: "Yagnesh",
    lastName: "Modh",
    age: 33,
    gender: "male",
    age: 34
}


const newData = {...data, occupation: 'business', age: 33 };



const {gender:dataGender, ...rest} = data;

console.log(rest);

console.log(gender);

console.log(dataGender);

// data.occupation = "business";

// data.age = 35;

// delete data.gender;

// console.log(data);