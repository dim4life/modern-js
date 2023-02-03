const myname = 'Felipe Gavilan';
const country = "Dominican Republic";

const greeting = "Hello, " + myname + ", how are you?";

const greeting2 = `Hello, ${myname}, how are you` //same output but cleaner than greeting, known as backticks

const add = (a,b) => a+b;
const message = `Hello, ${myname}
This is a message for you.

The sum of 2 and 2 is ${add(2,2)}

Bye bye`;

console.log(message);

// console.log(greeting)
// console.log(greeting2)