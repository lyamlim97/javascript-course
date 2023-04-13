const arr = [1, 2, 3, 4, 5];

arr.reverse();
arr.push(0);
arr.unshift(6);

console.log(arr);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

arr3 = [...arr1, ...arr2.slice(1, 6)];

console.log(arr3);
