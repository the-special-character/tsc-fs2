//All for object

const data = {
    firstName : "Devang",
    lastName : "Prajapati",
    age : 20,
    Gender : "male",
}

// read data


// 1 dot notation
console.log(data.firstName);
// 2 Array notation
const key = "firstName";
console.log(data[key]);
// 3 destructuring 
const {age} = data
console.log(age);
// if we make a new 
const newData = data
console.log(newData.firstName);


// add ---- with 2 types
//mutabaly

//dot notation
data.occupation = "buisnesss"
console.log(data);


//immutabaly
//spred operator
const anotherData = {...data,value : "none"}
console.log(anotherData);

// update

//mutabaly
data.age = 22
console.log(data);
//imutabaly
const orrData = {...data,value : "EMpty"}
console.log(orrData);

//delete

//mutabaly

delete data.occupation
console.log(data);

//imutabaly

const {firstName,...rest}= data
console.log(rest);
console.log(data);





 

