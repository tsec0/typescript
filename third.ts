type IDFieldtype = string | number; // This is a union => |

// union 
const printID = (id: IDFieldtype): void => {
    console.log(`ID: ${id}`);
}

printID(12122123);
printID("safdasda");


interface BusinessPartner {
    name: string;
    creditScore: number
}

interface UserIdentity {
    id: number;
    email: string;
}

// This is an intersection => &
type Employee = BusinessPartner & UserIdentity

const signContract = (employee: Employee): void => {
    console.log("Contract signed by " + employee.name + "with email " + employee.email);
}

signContract({
    name: "Tseco",
    creditScore: 800,
    id: 34,
    email: "some@some.bg",
})