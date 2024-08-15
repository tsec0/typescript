var users = [
    { id: 1, username: "john_doe", role: "member" },
    { id: 2, username: "john_doe2", role: "admin" },
    { id: 3, username: "guest_user", role: "guest" },
]; // Array<Person>
function fetchUserdetails(username) {
    var user = users.find(function (user) { return user.username === username; });
    if (!user) {
        throw new Error("User with username: ".concat(username, " is not found!"));
    }
    return user; // if the returned value differs from User2 type it will get underlined
    // return user.username;
} // :string
function updateUser(id, updates) {
    // find by id user
    var foundUser = users.find(function (user) { return user.id === id; });
    if (!foundUser) {
        throw new Error("User not found!");
    }
    // Object.assign will update the found user in place
    Object.assign(foundUser, updates);
}
updateUser(1, { username: "new_john_doe " });
updateUser(4, { role: "contributor" });
console.log(users);
