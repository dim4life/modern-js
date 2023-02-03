// example 1:

const sum = (a, b) => a + b;

const numbers = [2, 3];

// console.log(sum(numbers[0], numbers[1])); //one way of passing the arrays

// console.log(sum(...numbers)); // spread operator

// example 2:
const moreNumbers = [1, ...numbers]; // [1, 2, 3]] (array of 1 element)
const morenumber2 = [1, numbers]; // [1, [2, 3]] (difference from first one is that it does not concatenate, array of 2 element)
const morenumbes3 = [1, ...numbers, 4, 5]; // [1, 2, 3, 4, 5]];

// example 3:

const otherNumbers = [4, 5];
const concatenatedArrays = [...numbers, ...otherNumbers]; //[2,3,4,5]

// example 4:

const [first, ...theRemainingValues] = concatenatedArrays;
// console.log(first); //2
// console.log(theRemainingValues); // [3,4,5]

// example 5: 

const concatenatedArraysCloned = [...concatenatedArrays]; //cloned

// example 6:

const person = {
    name: 'Felipe',
    lastName: 'Gavilan'
};

const person2 = {
    ...person, //combine person 1 n 2 spread operator or use person.name etc... spread operator better
    age: 999
};

// console.log(person2);

// example 7

const person3 = {...person2}; //clone object so that values dont change for all the objects
person3.name = 'Scott';
// console.log(person2)
// console.log(person3)

//example 8 (combine spread operator and destructuring for objects)

const {age, ...person4} = person3;

console.log(age)
console.log(person4)
