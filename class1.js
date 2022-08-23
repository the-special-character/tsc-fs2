class User {
    isPermenantEmployee = false;

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
            isPermenantEmployee: this.isPermenantEmployee
        }
    }


    changeName = (firstName, lastName) => {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

// adding User structure in Super User
class SuperUser extends User {
    constructor() {
        super("mighty", "god")
    }

    hireEmployee() {
        console.log("employee hired");
    }

    getUserInfo() {
        const data = super.getUserInfo()

        console.log(data);
        return {...data, isPermenantEmployee: true }
    }
}

class Admin extends User {
    
}

const u = new User("yagnesh", "modh");

console.log(u.getUserInfo());

const sa = new SuperUser();
console.log(sa.getUserInfo());

console.log(sa.hireEmployee());