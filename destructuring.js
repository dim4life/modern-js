let person = {
    firstName: "Felipe",
    lastName: "Gavilan",
    age: 999,
    currentDate: new Date(),
};

// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person.age; // instead of using this method try using destructuring

const {firstName, lastName, age} = person; // destructuring

// console.log(firstName, lastName, age);

getAddress = () => {
    return {
        street: 'street 1',
        country: 'country 1',
        state: 'state 1'
    };
}

const {street, country} = getAddress();

printName = (person) => {
    console.log(person.firstName);
} //destructure the parameter of a function
 
printName2 = ({firstName}) => {
    console.log(firstName);
}

// printName2(person);

const arr = [1,2,3,4];

const [first, second,,fourth] = arr;

console.log(second);