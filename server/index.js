// const  express = require('express');

// const app = express();

// // app.get('/', (req,res) => {
// //     console.log(req.query);
// //     res.send(`hello from dhruvik`);
// // });

// // app.get('/test', (req,res) => {
// //     res.send(`hello from dhruvik under test`);
// // });

// // app.put('/:abc', (req,res) => {
// //     console.log(req.params);
// //     res.send(`hello from dhruvik under method put`);
// // });

// // app.put('/:id/:idnum', (req,res) => {
// //     console.log(req.params);
// //     res.send(`hello from dhruvik under put method twice`);
// // });

// // app.get('/:id/:idnum', (req,res) => {
// //     console.log(req.params);
// //     res.send(`hello from dhruvik under put method twice`);
// // });

// const courses= [
//     {
//         id : 1,
//         CourseName : 'node',
//         CourseTrainer: 'Yagnesh'
//     },
//     {
//         id : 2,
//         CourseName : 'react',
//         CourseTrainer: 'Yagnesh'
//     },
//     {
//         id : 3,
//         CourseName : 'flutter',
//         CourseTrainer: 'Yagnesh'
//     },
//     {
//         id : 4,
//         CourseName : 'react-native',
//         CourseTrainer: 'Yagnesh'
//     }
// ]

// app.use(express.json());

// app.post('/course',(req,res) => {
//     console.log('received');
//     const newdata={...req.body,id:courses.length+1};
//     courses.push(newdata);
//     res.send(newdata);

// });

// app.get('/course',(req,res)=>{
//     res.send(courses);
// })

// app.put('/course/:id',(req,res)=>{
//     const {id }=req.params;
//     const index=courses.findIndex(x => x.id===Number(id));
//     console.log(index);
//     const updatedData={...req.body, id: Number(id)}
//     courses.splice(index,1,updatedData);
//     res.send(updatedData);
// })

// app.patch('/course/:id',(req,res) => {
//     const {id} = req.params;
//     const ind=courses.findIndex( x => x.id === Number(id));
//     const updatedData = { ...courses[ind], ...req.body};
//     courses.splice(ind, 1 ,updatedData);
//     res.send(updatedData);
// });

// app.delete('/course/:id',(req,res) => {
//     const {id} = req.params;
//     const index1 = courses.findIndex( x => x.id === Number(id));
//     courses.splice(index1, 1);
//     res.send(`record deleted.....`)
// })
// app.get()
// app.get('/courses',(req,res) => {
//     res.send(courses);
// })

// app.get('/courses/:id',(req,res) => {
//     const {id}  = req.params;
//    console.log(id);
//    const result=courses.find((x)=>x.id === Number(id))
//    res.send(result)
// });

// app.get('/course',(req,res) => {
//     if(!Object.keys(req.query).length){
//         res.send(courses);
//         return true;
//     }

//     const records=courses.filter((x)=>{
//         const arr=Object.keys(req.query);
//         let result1=true;
//         for (let i = 0; i < arr.length; i += 1) {
//             const element = arr[i];
//             result1= result1 && x[element] === req.query[element];
//         }
//         return result1;
//     });
//     res.send(records);
//     return true;
// })

// app.listen('3002','localhost',()=>{
//     console.log('server started');
// })

console.log(`hello.....`);
