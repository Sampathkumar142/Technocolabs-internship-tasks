// Kelvin Weather Conversion

// The forecast today is 293 Kelvin.
// To start, create a variable named kelvin and set it equal to 293.
const kelvin = 293;

// Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin.
// Let’s convert Kelvin to Celsius by subtracting 273 from the kelvin variable.
let celsius = kelvin - 273;

// Use this equation to calculate Fahrenheit, then store the answer in a variable named fahrenheit.
// Fahrenheit = Celsius * (9/5) + 32
let fahrenheit = celsius * (9/5) + 32;

// When you convert from Celsius to Fahrenheit, you often get a decimal number.
// Use the .floor() method from the built-in Math object to round down the Fahrenheit temperature.
fahrenheit = Math.floor(fahrenheit);

// Use console.log and string interpolation to log the temperature in fahrenheit to the console.
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Newton = Celsius * (33/100)
let newton = celsius * (33/100);

// Round down the Newton temperature using the .floor() method.
newton = Math.floor(newton);

// Use console.log and string interpolation to log the temperature in newton to the console.
console.log(`The temperature is ${newton} degrees Newton.`);
