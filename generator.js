class Auth {
    #login() {
        console.log("login");
    }

    #logout() {
        console.log("logout");
    }

    *authFlow() {
        yield this.#login();
        yield this.#logout()
    }
}


const auth = new Auth();

const authflow = auth.authFlow();

for (const iterator of authflow) {
    console.log(iterator);
}


// authflow.next()

// authflow.return()

// authflow.next()

// authflow.next()

// const authflow1 = auth.authFlow();

// authflow1.next()


// auth.logout()
// auth.login()


// function* add() {
//    const a = yield 1;

//    yield a + 5;
// }

// const gen = add();

// console.log(gen.next().value);

// console.log(gen.next(4).value);

function* xyz() {
  try {
    yield 1;

    yield 2;

    yield 3;
  } catch (error) {
    console.log(error);
  }
}

const gen = xyz();

for (const iterator of gen) {
    console.log(iterator);
}

// console.log(gen.next());
// gen.throw(new Error("error"))
// // gen.return();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
