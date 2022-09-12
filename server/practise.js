const greet = (name) => `Hello,${name}`
console.log(greet("devang"));

const data = (firstName,lastName) =>`my name is ${firstName} ${lastName}`;
console.log(data("Devang","Prajapati")); 



const  Op = {
    fName:"DEVANG",
    lName: "Prajapati",

    // fullName: function() {
    //     return `${this.fName} ${this.lName}`;
    // }

}
console.log(Op.fName);
console.log(Op.lName);
// console.log(Op.fullName());



const all ={...Op, occupation: 'buisness', age:25};
console.log(all);