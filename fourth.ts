// unauthorized, user does not exist, wrong credentials, internal

enum LoginError {
    Unauthorized = "unauthorized",
    NoUser = "nouser",
    WrongCredentials = "wrongcredentials",
    Internal = "internal"
}

const printErrorMsg = (error: LoginError): void => {
    if(error == LoginError.Unauthorized){
        console.log("User is not authorized")
    } else if (error == LoginError.NoUser){
        console.log("No user was found")
    } else if (error == LoginError.WrongCredentials){
        console.log("User has entered wrong credentials")
    } else if (error == LoginError.Internal){
        console.log("Internal server error. Check server")
    } else {
        console.log("Unknown error")
    }
}

printErrorMsg(LoginError.WrongCredentials);

// Generics - T => generic type - reusing classes or objects
class StorageContainer<T>{
    private contents: T[]

    constructor() {
        this.contents = [];
    }

    addItem(item: T): void {
        this.contents.push(item);
    }

    getItem(idx: number): T | undefined {
        return this.contents[idx];
    }
}

const companies = new StorageContainer<string>();
companies.addItem("TsecoTech");
companies.addItem("EchoBr");
companies.addItem("AscendTech");
console.log(companies.getItem(0));

const netWorth = new StorageContainer<number>();
netWorth.addItem(23);
netWorth.addItem(56);
netWorth.addItem(76);
console.log(netWorth.getItem(0));

// readonly 
interface Employees {
    readonly employeeId: number;
    readonly startDate: Date;
    name: string;
    department: string;
}

const employee: Employees = {
    employeeId: 123,
    startDate: new Date(),
    name: "Tseco",
    department: "SD",
}

employee.name = "Ivanee";
console.log(employee);