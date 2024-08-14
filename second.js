var id = 5; // :type = prevents future bugs
var company = "Acme corp";
var published = true;
var ids = [1, 2, 3, 4, 5]; // array with numbers or elements with number types
var names = ["Ivan", "Petar", "Gosho", "Sasho"]; // array of string type elements
// ONLY IN SPECIFIC OR EXTREME SCENARIOS
var x = "start typescrit"; // any = defined value;
var xArr = ["typescript", 0, true]; // array with any type elements
// const concatValues = (a: string, b: string) => {
//     return a + b;
// }
// function(): return type {} OR const somefunc = (): return type => {}
var concatValues = function (a, b) {
    return a + b;
};
console.log(concatValues("hello", " world"));
//console.log(concatValues(5, 10)); // error for numbers
console.log(concatValues("5", "10")); // error for numbers
// all fields are required
var User = {
    id: 2,
    name: "Tseco",
    age: 27,
};
// all fields are required
var SecUser = {
    id: 2,
    name: "Tseco Sec",
};
//Error managing baby level
if (!SecUser.age) {
    console.log("No age is defined for ".concat(SecUser.name, "."));
}
else {
    console.log("The age for ".concat(SecUser.name, " is ").concat(SecUser.age, "."));
}
//Error managing baby level
if (!User.age) {
    console.log("No age is defined for user");
}
else {
    console.log("The age for ".concat(User.name, " is ").concat(User.age, "."));
}
var ThirdUser = {
    id: 2,
    name: "Tseco",
    greet: function (message) {
        console.log(message);
    }
};
ThirdUser.greet("Hello");
