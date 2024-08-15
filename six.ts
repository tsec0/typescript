type UserRole2 = "contributor" | "member" | "admin";

type User2 = {
    id: number;
    username: string;
    role: UserRole2;
}

type UpdatedUser2 = {
    id?: number,
    username?: string,
    role?: UserRole2
}

type User2Result = User2 | undefined;

const users: User2[] = [
    {id: 1, username: "john_doe", role: "member" },
    {id: 2, username: "john_doe2", role: "admin" },
    {id: 3, username: "guest_user", role: "contributor" },
    {id: 4, username: "charlie_brown", role: "member"}]; // Array<Person>

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

updateUser(1, {username: "new_john_doe "});
updateUser(4, {role: "contributor" });

console.log(users);
