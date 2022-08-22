

// Abstraction
// encapsulation
// Polimorphysm
// inheritance

class User {
    isEmployee = false;

    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }


    set firstName(a) {
        this._firstName = User.changeNameCase(a);
    }

    get firstName() {
        return this._firstName;
    }


    set lastName(b) {
        this._lastName = User.changeNameCase(b);
    }

    get lastName() {
        return this._lastName;
    }


    static changeNameCase = (value) => {
        if(!value) return ''
        return `${value[0].toUpperCase()}${value.slice(1)}`
    }

    #fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    getUserInfo() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            fullName: this.#fullName(),
            isEmployee: this.isEmployee
        }
    }

    changeName = (firstName, lastName) => {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const name = "yagnesh";

console.log(User.changeNameCase(name));

const user1 = new User("yanesh", "modh");
const user2 = new User("virat", "kohli");
console.log(user1.firstName);
// console.log(user1.#fullName());
user1.changeName("yagnesh", "modh")
console.log(user1.getUserInfo());

console.log(user2.firstName);
console.log(user2.fullName());
console.log(user2.getUserInfo());

// const user1 = {
//     firstName: 'Yagnesh',
//     lastName: 'Modh',
//     fullName() {
//         return `${this.firstName} ${this.lastName}`
//     },
//     getUserInfo() {
//         return {
//             firstName: this.firstName,
//             lastName: this.lastName,
//             fullName: this.fullName()
//         }
//     }
// }


// const user2 = {
//     firstName: 'Virat',
//     lastName: 'Kohli',
//     fullName() {
//         return `${this.firstName} ${this.lastName}`
//     },
//     getUserInfo() {
//         return {
//             firstName: this.firstName,
//             lastName: this.lastName,
//             fullName: this.fullName()
//         }
//     }
// }

// console.log(user1.firstName);
// console.log(user1.lastName);
// console.log(user1.fullName());
// console.log(user1.getUserInfo());

// console.log(user2.firstName);
// console.log(user2.lastName);
// console.log(user2.fullName());
// console.log(user2.getUserInfo());