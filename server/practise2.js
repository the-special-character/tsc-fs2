//practice
const user = {
  id: 1,
  courseName: "react",
  trainerName: "Devang",
  Gender: "Male",
  Age: 20,
};

// // const arr = [1,2,3,4,5,6,7,8]
// // console.log(arr[0]);

//    //1  - dot notation                                                   //Read
// console.log(user.Gender);

// // //2- destructioring
// const {id,Age}=user;
// console.log(id);

// // //3--Array notation
// console.log(user["courseName"]);

// const courses = [
//   {
//     id: 1,
//     courseName: "react",
//     trainerName: "Devang",
//   },
//   {
//     id: 2,
//     courseName: "node",
//     trainerName: "Yagnesh",
//   },

//   {
//     id: 3,
//     courseName: "python",
//     trainerName: "Parth",
//   },
// ];
// //read
// //   const [x,y,z] = courses
// //   console.log(x);

// //   console.log(x.id);

// // Add

// //mutably ADD
// courses.push({ id: 4, courseName: "python", trainerName: "Bharat" });
// console.log(courses);

// //imutably add

// // const course2 = [
// //   ...courses.slice(0, 2),
// //   { id: 4, courseName: "python", trainerName: "Parth" },
// //   ...courses.slice(2),
// // ];
// // console.log(course2);


//                     //update

// const course3 = [
//   ...courses.slice(0, 2),
//   {...courses[2],courseName:'java'},
//   ...courses.slice(3),
// ];
// console.log(course3);
// // console.log(courses);

const {id,...user2} = user;
console.log(user2);

const user3 = {...user,selary:5000000000,Age:25}
console.log(user3);

delete user3.id;
console.log(user3);


