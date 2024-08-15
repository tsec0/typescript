// NEW COURSE
// Primitive types => string , number, boolean
var name_b = "Bob";
var number = 4;
var isFalse = false;
// literal type
var myName = "Tseco"; // no reassigning
var userRole = "guest";
var otherUser = {
    username: "Tseco",
    role: "member",
};
var fav_food = "pizza";
var person1 = {
    name: "Tom",
    age: 42,
    isStudent: true,
};
var person2 = {
    name: "Ivan",
    age: 44,
    isStudent: false,
    address: {
        street: "12 Ivan Petkov",
        city: "Sofia",
        country: "BG",
    }
};
// person.address?.street -> optional chaning
function displayinfo(person) {
    var _a;
    console.log("".concat(person.name, " lives at ").concat((_a = person.address) === null || _a === void 0 ? void 0 : _a.street));
}
displayinfo(person1);
// Arrays
var ages = [100, 101]; // array of numbers => number[]
var booleans = [true, false]; // array of booleans => boolean[]
// custom type arrays
var people = [person1, person2]; // array of type Person => Person[]
// OR
var people2 = [person1, person2]; // Array interface of type Person => Array<Person>
