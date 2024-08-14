// NEW COURSE
// Primitive types => string , number, boolean
var name_b = "Bob";
var number = 4;
var isFalse = false;
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
function displayinfo(person) {
    var _a;
    console.log("".concat(person.name, " lives at ").concat((_a = person.address) === null || _a === void 0 ? void 0 : _a.street));
}
displayinfo(person1);
