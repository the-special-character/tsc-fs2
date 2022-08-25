// 1. callback
// 2. promise
// 3. generator

// console.log("hello");

// setTimeout(() => {
//     console.log("time out");
//  }, 0)

// document.addEventListener("copy", () => {

// })

const loadData = async () => {
  try {
    const loginRes = await fetch("http://localhost:3000/login", {
      method: "POST",
      body: JSON.stringify({
        email: "yagnesh.modh@gmail.com",
        password: "abcd1234",
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const loginJson = await loginRes.json();

    const productsRes = await fetch("http://localhost:3000/660/products", {
      headers: {
        Authorization: `adfd ${loginJson.accessToken}`,
      },
    });

    const productsJson = await productsRes.json();

    if(!productsRes.ok) throw new Error(productsJson);

    console.log(productsJson);

    console.log(loginJson);
  } catch (error) {
    console.log(error.message);
  }
};

loadData();

// fetch("http://localhost:3000/login", {
//     method: "POST",
//     body: JSON.stringify({
//         "email": "yagnesh.modh@gmail.com",
//         "password": "abcd1234"
//     }),
//     headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//     }
// })
// .then(val => val.json())
// .then(json => {
//     fetch("http://localhost:3000/660/products", {
//         headers: {
//             Authorization: `Bearer ${json.accessToken}`
//         }
//     })
//     .then(val => val.json())
//     .then(json1 =>  console.log(json1))
//     .catch(err => {
//         console.log(err.message);
//     })
// })
// .catch(err => {
//     console.log(err.message);
// })

// fetch("http://localhost:3000/660/products")
// .then(val => {
//     return val.json()
// })
// .then(json => {
//     console.log(json);
// })
// .catch(err => {
//     console.log(err.message);
// })

// const p1 = () => {
//     return new Promise((resolve, reject) => {
//             //  get data from server;
//             // resolve("p1 resolved")
//             resolve("p1 rejected")
//     })
// }

// p1()
// .then((val) => {
//     console.log(val);
//     // display data

//     // remove loader
// })
// .catch(err => {
//     console.log(err);
//     // display error message

//     // remove loader
// })
// .finally(() => {
//     console.log("finally");
// })
