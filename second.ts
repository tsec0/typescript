let id: number = 5; // :type = prevents future bugs
let company: string = "Acme corp";
let published: boolean = true;

let ids: number [] = [1, 2, 3, 4, 5]; // array with numbers or elements with number types
let names: string [] = ["Ivan", "Petar", "Gosho", "Sasho"]; // array of string type elements

// ONLY IN SPECIFIC OR EXTREME SCENARIOS
let x: any = "start typescrit"; // any = defined value;
let xArr: any[] = ["typescript", 0, true]; // array with any type elements


// const concatValues = (a: string, b: string) => {
//     return a + b;
// }

// function(): return type {} OR const somefunc = (): return type => {}
const concatValues = (a: string, b: string): string => {
    return a + b;
}

console.log(concatValues("hello", " world"));
//console.log(concatValues(5, 10)); // error for numbers
console.log(concatValues("5", "10")); // error for numbers

// Interface - blueprint for how objects should look like

// required fields
interface UserInterface {
    id: number;
    name: string;
    age: number;
}

// all fields are required
const User: UserInterface = {
    id: 2,
    name: "Tseco",
    age: 27,
}

// this is wrong , because it is a string
// User.age = "22";

// required and optional(?) fields
interface SecUserInterface {
    id: number;
    name: string;
    age?: number; // undefined or a number
}

// all fields are required
const SecUser: SecUserInterface = {
    id: 2,
    name: "Tseco Sec",
}

//Error managing baby level
if(!SecUser.age){
    console.log(`No age is defined for ${SecUser.name}.`);
} else {
    console.log(`The age for ${SecUser.name} is ${SecUser.age}.`);
}

//Error managing baby level
if(!User.age){
    console.log("No age is defined for user");
} else {
    console.log(`The age for ${User.name} is ${User.age}.`);
}

// defining object in interface
interface UserFnInterface {
    id: number;
    name: string;
    age?: number;
    greet(message: string): void; // the function does not return anything
}

const ThirdUser: UserFnInterface = {
    id: 2,
    name: "Tseco",
    greet(message) {
        console.log(message);
    }
}

ThirdUser.greet("Hello");