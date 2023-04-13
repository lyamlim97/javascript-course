let x;

const person = {
    name: "John Doe",
    age: 30,
    isAdmin: true,
    address: {
        street: "123 Main st",
        city: "Boston",
        state: "MA",
    },
    hobbies: ["music", "sports"],
};

x = person.name;
x = person["age"];
x = person.address.state;
x = person.hobbies[0];

person.name = "Jane Doe";
person["isAdmin"] = false;

person.hasChildren = true;

person.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
};

person.greet();

delete person.age;

x = person;

const person2 = {
    "first name": "Lyam",
    "last name": "Lim",
};

x = person2["first name"];

console.log(x);
