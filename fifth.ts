// NEW COURSE

// Primitive types => string , number, boolean
let name_b: string = "Bob";
let number: number = 4;
let isFalse: boolean = false;

// literal type
const myName = "Tseco"; // no reassigning

// enum type
type UserRole = "guest" | "member" | "admin";
let userRole: UserRole = "guest";

type User = {
    username: string,
    role: "guest" | "member" | "admin",
}
let otherUser: User = {
    username: "Tseco",
    role: "member",
};

// custom types;
type Food = string;
let fav_food: Food = "pizza";

// custom object type
type Address = {
    street: string,
    city: string,
    country: string,
}

type Person = {
    name: string,
    age: number,
    isStudent: boolean,
    address?: Address, // optional => ?
}

let person1: Person = {
    name: "Tom",
    age: 42,
    isStudent: true,
}

let person2: Person = {
    name: "Ivan",
    age: 44,
    isStudent: false,
    address: {
        street: "12 Ivan Petkov",
        city: "Sofia",
        country: "BG",
    }
}

// person.address?.street -> optional chaning
function displayinfo(person: Person){
    console.log(`${person.name} lives at ${person.address?.street}`)
}
displayinfo(person1);

// Arrays
let ages: number[] = [100, 101]; // array of numbers => number[]
let booleans: boolean[] = [true, false]; // array of booleans => boolean[]

// custom type arrays
let people: Person[] = [person1, person2]; // array of type Person => Person[]
// OR
let people2: Array<Person> = [person1, person2]; // Array interface of type Person => Array<Person>
