// union 
var printID = function (id) {
    console.log("ID: ".concat(id));
};
printID(12122123);
printID("safdasda");
var signContract = function (employee) {
    console.log("Contract signed by " + employee.name + "with email " + employee.email);
};
signContract({
    name: "Tseco",
    creditScore: 800,
    id: 34,
    email: "some@some.bg",
});
