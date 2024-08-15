type UserRole2 = "contributor" | "member" | "admin";

let nextUserId: number =  1;

type User2 = {
    id: number;
    username: string;
    role: UserRole2;
}

type UpdatedUser2 = Partial<User2> // any of the data in User2

// type UpdatedUser2 = {
//     id?: number,
//     username?: string,
//     role?: UserRole2
// }

type User2Result = User2 | undefined;

const users: User2[] = [
    {id: nextUserId++, username: "john_doe", role: "member" },
    {id: nextUserId++, username: "john_doe2", role: "admin" },
    {id: nextUserId++, username: "guest_user", role: "contributor" },
    {id: nextUserId++, username: "charlie_brown", role: "member"}]; // Array<Person>

function fetchUserdetails(username: string): User2 {
    const user: User2Result = users.find(user => user.username === username);
    if(!user){
        throw new Error(`User with username: ${username} is not found!`);
    }
    return user; // if the returned value differs from User2 type it will get underlined
    // return user.username;
}// :string

function updateUser(id: number, updates: UpdatedUser2): void {
    // find by id user
    const foundUser = users.find(user => user.id === id)
    if(!foundUser){
        console.error("User not found!");
        return
    }
    // Object.assign will update the found user in place
    Object.assign(foundUser, updates);
}

// Omit is a type in which an object property is optional => "id" - optional
// optional chaning => |
function addNewUser(newUser: Omit<User2, "id" | "user">): User2 {
    const user: User2 = {
        id: nextUserId++,
        ...newUser
    }
    users.push(user);
    return user;
}

updateUser(1, {username: "new_john_doe "});
updateUser(4, {role: "contributor" });

addNewUser({ username: "joe_schmoe", role: "member" });

console.log(users);
