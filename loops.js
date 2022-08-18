
const arr = [...Array(10000000).keys()];

console.time("for")
for (let i = 0; i < arr.length; i++) {
}
console.timeEnd("for")

console.time("while")
let j = 0;
while (j< arr.length) {
    j++
}
console.timeEnd("while")

console.time("dowhile")
let k = 0;
do {
    k++;
} while (k < arr.length);
console.timeEnd("dowhile")

console.time("forEach")
arr.forEach(element => {
});
console.timeEnd("forEach")

// arr.forEach(element => {
//     console.log(element);
// });

// let j = 0;
// do {
//     console.log('hello');
//     j++;
// } while (false);

// const newArr = [];

// // let j = 0;
// while (false) {
//     console.log(arr[j]);
//     newArr.push(arr[j])
//     j++;
// }

// console.log(newArr);

// for (let i = 0; i < arr.length; i = i + 2) {
//     console.log(arr[i]);
//     // if(arr[i] % 2 === 0){
//     //     console.log(arr[i])
//     // }
// }




// const arr = [1,2,3,4,5,6,7, 8];

// console.log(arr.length/2);


// console.log(arr[4]); 

// for (let index = 0; index < arr.length/2; index++) {
//     const element = arr[index];
//     console.log(element);
//     if(element === 3) {
//         console.log(true);
//         break;
//     }
// }

let result  = false;

// O(N)

// O(logN)

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
    if(element === 4) {
        result = true;
        break;
    }
}

console.log(result);

