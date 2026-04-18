// ===============================
// WEEK 2 - JAVASCRIPT (MAD 2)
// ALL CONCEPTS IN ONE FILE
// ===============================


// =======================================
// 1. ARRAYS
// =======================================
console.log("=== ARRAYS ===");

let arr = [10, "Biswajit", true, { age: 21 }];
console.log(arr);
console.log(arr[1]);        // Access element
console.log(arr.length);   // Length


// =======================================
// 2. ITERATION
// =======================================
console.log("\n=== ITERATION ===");

let nums = [1, 2, 3, 4];

for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}

// for...of
for (let n of nums) {
    console.log("for..of:", n);
}


// =======================================
// 3. MAP, FILTER, FIND
// =======================================
console.log("\n=== MAP FILTER FIND ===");

// map
let doubled = nums.map(n => n * 2);
console.log("map:", doubled);

// filter
let even = nums.filter(n => n % 2 === 0);
console.log("filter:", even);

// find
let found = nums.find(n => n > 2);
console.log("find:", found);


// =======================================
// 4. CALLBACK FUNCTION
// =======================================
console.log("\n=== CALLBACK ===");

function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function done() {
    console.log("Done greeting");
}

greet("Biswajit", done);


// =======================================
// 5. COLLECTIONS (MAP & SET)
// =======================================
console.log("\n=== MAP & SET ===");

// Map
let map = new Map();
map.set("name", "Biswajit");
map.set("age", 21);

console.log(map.get("name"));

// Set
let set = new Set([1, 2, 2, 3, 3]);
console.log(set);


// =======================================
// 6. DESTRUCTURING
// =======================================
console.log("\n=== DESTRUCTURING ===");

// Array destructuring
let [a, b] = [10, 20];
console.log(a, b);

// Object destructuring
let student = { name: "Biswajit", age: 21 };
let { name, age } = student;
console.log(name, age);


// =======================================
// 7. GENERATOR
// =======================================
console.log("\n=== GENERATOR ===");

function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

let g = gen();
console.log(g.next());
console.log(g.next());
console.log(g.next());


// =======================================
// 8. MODULE (EXPLANATION ONLY)
// =======================================
// export function add(a, b) {
//     return a + b;
// }

// import { add } from "./file.js";


// =======================================
// 9. OBJECTS
// =======================================
console.log("\n=== OBJECTS ===");

let person = {
    name: "Biswajit",
    age: 21,
    greet() {
        console.log("Hello " + this.name);
    }
};

person.greet();

// Object helpers
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));


// =======================================
// 10. CALL, APPLY, BIND
// =======================================
console.log("\n=== CALL APPLY BIND ===");

function sayHello() {
    console.log("Hello " + this.name);
}

let user = { name: "Biswajit" };

// call
sayHello.call(user);

// apply
function sum(a, b) {
    console.log(a + b);
}
sum.apply(null, [2, 3]);

// bind
let boundFunc = sayHello.bind(user);
boundFunc();


// =======================================
// 11. PROTOTYPE INHERITANCE
// =======================================
console.log("\n=== PROTOTYPE ===");

let parent = {
    greet() {
        console.log("Hello from parent");
    }
};

let child = Object.create(parent);
child.greet();


// =======================================
// 12. CLASS
// =======================================
console.log("\n=== CLASS ===");

class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log("Hi " + this.name);
    }
}

let p1 = new Person("Biswajit");
p1.greet();


// =======================================
// 13. ASYNCHRONY
// =======================================
console.log("\n=== ASYNCHRONY ===");

console.log("Start");

setTimeout(() => {
    console.log("Async Task Done");
}, 2000);

console.log("End");


// =======================================
// 14. CALL STACK DEMO
// =======================================
console.log("\n=== CALL STACK ===");

function h() {
    console.log("h executed");
}

function gFunc() {
    h();
}

function fFunc() {
    gFunc();
}

fFunc();


// =======================================
// 15. JSON
// =======================================
console.log("\n=== JSON ===");

let obj = { name: "Biswajit", age: 21 };

// object → JSON
let jsonData = JSON.stringify(obj);
console.log(jsonData);

// JSON → object
let parsed = JSON.parse(jsonData);
console.log(parsed.name);