// Ways to declare a variable
// var, let, const

let firstName = "John";
const lastName = "Doe";

console.log(firstName, lastName);

var age = 30;

console.log(age);

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// Multi-Word Formatting
// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase

// Re-assigning Variables

age = 31;
console.log(age);

let score;

score = 1;

console.log(score);

if (true) {
    score = score + 1;
}

console.log(score);

const x = 100;

// x = 200;
// Will result in error

const arr = [1, 2, 3, 4];

// arr = [1, 2, 3, 4, 5];
// Will result in error

arr.push(5);
console.log(arr);

const person = {
    name: "Lyam",
};
person.name = "Charlie";
person.email = "charlie@gmail.com";
console.log(person);

let a, b, c;

const d = 10,
    e = 20,
    f = 30;

console.log(d);
console.log(a );
