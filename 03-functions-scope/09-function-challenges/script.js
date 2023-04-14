// function getCelsius(tempF) {
//     return (tempF - 32) * (5 / 9);
// }

const getCelsius = (tempF) => (tempF - 32) * (5 / 9);

console.log(`The temperature is ${getCelsius(32)} \xB0C`); // The temperature is 0 °C

const minMax = (arr) => ({
    min: Math.min(...arr),
    max: Math.max(...arr),
});

console.log(minMax([1, 2, 3, 4, 5]));

(function (length, width) {
    console.log(
        `The area of a rectangle with a length of ${length} and a width of ${width} is ${
            length * width
        }.`
    );
})(10, 5);
