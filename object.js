const data = {
  firstName: 'Yash',
  lastName: 'Prajapati',
  age: 20,
  gender: 'Male',
};

//Object descructuring

// const {age,gender} = data
// console.log(age);
// console.log(gender);

//remove mutable

// delete data.gender;
// console.log(data);

//remove immutable

const { age, gender, ...rest } = data;

console.log(rest);

//add mutable

// data.occupation = "IT services"

//add immutable

// const newdata = {...data,occupation:"Bussiness"}
// console.log(newdata);
// console.log(data);

// const newdata = Object.assign({},data,{occupation: "bussiness"});

// console.log(newdata);

//update immutable

// const Newdata = {...data,age:21}
// console.log(Newdata);
// const newData = Object.assign({}, data, {age:22});

// console.log(newData);

// const key = "firstName";

//dot notation

// console.log(data);

//array notation

// console.log(data[key]);
