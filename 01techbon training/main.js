// 1) // Logical (AND) - Logical (OR) --------------------------------------
let a = true;
let b = false;

// console.log(a && b);
console.log(a && "AND Operator");
console.log(b || "OR Operator");

// 2)  //Template literals --------------------------------------

let name = "Masab";
let age = 30;

// console.log('My name is'+ name +'and I am'+ age +'years old.');
console.log(`My name is ${name} and I am ${age} years old.`);

// 3) // Ternary operator --------------------------------------

let isStudent = true;
if (isStudent) {
  console.log("Student");
} else {
  console.log("Not a student");
}

console.log(isStudent ? "Student" : "Not a student");

// 3) // Object destructoring --------------------------------------

let id = 1;
let username = "test";
let password = "password";

let user = {
  // id: id,
  // username: username,
  // password: password

  //if we have same name key and value
  id,
  username,
  password,
};

let user2 = {
  id: 2,
  username: "test2",
  password: "password2",
  confirmPassword: "confirm password",
};
console.log(user);

//// wihout destructuring
let conformation = user2.confirmPassword;
console.log(conformation);

// with destructuring

let { confirmPassword } = user2;
console.log(confirmPassword);

//// Array destructuring --------------------------------------

let numbers = [1, 2, 3, 4, 5];

// without destructuring

let firstNum = numbers[0];
let secondNum = numbers[1];
console.log(firstNum, secondNum);

// with destructuring
let [first, second] = numbers;
console.log(first, second);

// 4) // Default parameters, spread and rest operators --------------------------------------

//// default Parameters
function mulOfTwoNumbers(a = 1, b = 2) {
  return a * b;
}
console.log(mulOfTwoNumbers()); // 2
console.log(mulOfTwoNumbers(10, 20)); // 200

//// spread opreator
let numArray = [1, 2, 3, 4, 5];
console.log(...numArray); // 1, 2, 3, 4, 5
console.log([...numArray]); // [1, 2, 3, 4, 5]

let newNumArray = [...numArray, 6, 7, 8];

console.log([...newNumArray]); // [1, 2, 3, 4, 5, 6, 7, 8]

//// rest operator

//// without rest operator
function greetInfo1(a, b, c, d, e) {
  console.log(a, b, c, d, e);
}

greetInfo1("simple ", 1, 2, 3, 4, 5); // 1, 2, 3, 4, 5

//// with rest operator
function greetInfo2(a, ...b) {
  console.log(a, ...b); // rest operator, [1, 2, 3, 4, 5, 6]
}
greetInfo2("rest operator ", 1, 2, 3, 4, 5);

// 5) // Array Methods -> map, filter, find, some, every, includes, indexOf, findIndex --------------------------------------

const personArray = [
  { id: 1, name: "Umar", age: 30 },
  { id: 2, name: "Musa", age: 40 },
  { id: 3, name: "Faisal", age: 50 },
  { id: 4, name: "Umair", age: 40 },
];

//// map() -----------
//// The map() method creates a new array by performing a function on each array element.
// map() creates a new array from calling a function for every array element. map() does not execute the function for empty elements.
let getAllNames = personArray.map((singlePerson, index) => {
  console.log(index, singlePerson.name);

  // return singlePerson.name;
  return `${singlePerson.name} age is ${singlePerson.age}`;
});

console.log(getAllNames); // [ 'Umar', 'Musa', 'Faisal' ]

//// find() -----------
//// The find() method returns the value of the first array element that passes a test function.
let getPersonOfAge = personArray.find((singlePerson, index) => {
  return singlePerson.age > 30 && singlePerson.age === 50;
});

console.log(getPersonOfAge); // { id: 3, name: 'Faisal', age: 50 }

//// filter() -----------
//// The filter() method creates a new array with array elements that pass a test.
let getAllPersonofAge = personArray.filter((singlePerson, index) => {
  return singlePerson.age === 40;
});

console.log(getAllPersonofAge); // [{id: 2, name: 'Musa, age: 40}, {id: 4, name: 'Umair', age: 40}]

//// some() -----------
// // The some() method checks if any of the array element pass a test (condition). -> Means that if some array elements satisfied the condition then it will return true otherwise false
let checkSomeMethode = personArray.some((singlePerson) => {
  return singlePerson.age > 40;
});
console.log(checkSomeMethode); // true if some elements are satisfied by the condition otherwise false

//// every() -----------
// // The every() method checks if all the array elements pass a test (condition). Means that if all elements satisfy the condition then it will return true otherwise false
let checksEveryMethode = personArray.every((singlePerson) => {
  return singlePerson.age > 25;
});
console.log(checksEveryMethode); // true if all elements are satisfied by the condition otherwise false

//// includes() -----------
// // The includes() method allows us to check if an element is present in an array then it will return true otherwise false

let fruitArray = ["apple", "orange", "banana", "pineapple"]; // mango
let checksIncludeMethode = fruitArray.includes("orange");
console.log(checksIncludeMethode); // true

//// indexOf() -----------
// The indexOf() method searches an array for an element value and returns its position.
// if it finds the element then it will return the position of that element
// otherwise it will return `-1` which means element doesn't exist

let checksIndexOfMethode = fruitArray.indexOf("orange");

console.log(checksIndexOfMethode); // 1

//// findIndex() -----------
// // The findIndex() method returns the index of the first array element that passes a test function.
// If it finds the element then it will return the position of that element
// otherwise it will return `-1` which means element doesn't exist

let checksFindIndexMethode = fruitArray.findIndex((fruit) => {
  return fruit === "orange";
});

console.log(checksFindIndexMethode); // 1

// 6) // async await API call example

// async makes a function return a Promise
// await makes a function wait for a Promise

let getListOfProducts = document.querySelector(".product-list");
function renderProducts(getProducts) {
  getListOfProducts.innerHTML = getProducts
    .map(
      (singleProduct) =>
        `<li> <h3 style='margin: 0'>${singleProduct.title}</h3> <p style='margin-top: 6px'>${singleProduct.description}</p></li>`
    )
    .join("");
}
async function fetchDataFromApi() {
  try {
    const getResponse = await fetch("https://dummyjson.com/products", {
      method: "GET",
    });
    const result = await getResponse.json();

    console.log("result", result);
    if (result?.products?.length > 0) {
      renderProducts(result?.products);
    }
  } catch (error) {
    console.error("Error fetching data", error);
  }
}

fetchDataFromApi();




// -------------------------------------------------------------------------------------------------
