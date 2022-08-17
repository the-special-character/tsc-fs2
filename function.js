const add = (...params) => {
    console.log(params);
    let sum = 0;
    for (let i = 0; i < params.length; i++) {
        
        const element = params[i];
        console.log(sum);
        console.log(element);
        sum += element;
    }
    return sum;
}

console.log(add(1,2,3,4,5,6));

const arr = [1, 2, 3, 4, 5]

for (let i = 0; i < arr.length; i+2) {
    const element = arr[i];
    console.log(element);
}