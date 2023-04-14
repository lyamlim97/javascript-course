const obj = {
    title: "The Book",
    author: "Bob",
    status: { own: true, reading: false, read: false },
};

const obj2 = {
    title: "How to Sleep",
    author: "Charlie",
    status: { own: true, reading: false, read: false },
};

const obj3 = {
    title: "Cook at Home",
    author: "Maria",
    status: { own: true, reading: false, read: false },
};

const library = [obj, obj2, obj3];

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

const { title: firstBook } = library[0];
console.log(firstBook);

const libraryJSON = JSON.stringify(firstBook);
console.log(libraryJSON);
