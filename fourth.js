// unauthorized, user does not exist, wrong credentials, internal
var LoginError;
(function (LoginError) {
    LoginError["Unauthorized"] = "unauthorized";
    LoginError["NoUser"] = "nouser";
    LoginError["WrongCredentials"] = "wrongcredentials";
    LoginError["Internal"] = "internal";
})(LoginError || (LoginError = {}));
var printErrorMsg = function (error) {
    if (error == LoginError.Unauthorized) {
        console.log("User is not authorized");
    }
    else if (error == LoginError.NoUser) {
        console.log("No user was found");
    }
    else if (error == LoginError.WrongCredentials) {
        console.log("User has entered wrong credentials");
    }
    else if (error == LoginError.Internal) {
        console.log("Internal server error. Check server");
    }
    else {
        console.log("Unknown error");
    }
};
printErrorMsg(LoginError.WrongCredentials);
// Generics - T => generic type - reusing classes or objects
var StorageContainer = /** @class */ (function () {
    function StorageContainer() {
        this.contents = [];
    }
    StorageContainer.prototype.addItem = function (item) {
        this.contents.push(item);
    };
    StorageContainer.prototype.getItem = function (idx) {
        return this.contents[idx];
    };
    return StorageContainer;
}());
var companies = new StorageContainer();
companies.addItem("TsecoTech");
companies.addItem("EchoBr");
companies.addItem("AscendTech");
console.log(companies.getItem(0));
var netWorth = new StorageContainer();
netWorth.addItem(23);
netWorth.addItem(56);
netWorth.addItem(76);
console.log(netWorth.getItem(0));
var employee = {
    employeeId: 123,
    startDate: new Date(),
    name: "Tseco",
    department: "SD",
};
employee.name = "Ivanee";
console.log(employee);
