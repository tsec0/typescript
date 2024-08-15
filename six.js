var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var nextUserId = 1;
var users = [
    { id: nextUserId++, username: "john_doe", role: "member" },
    { id: nextUserId++, username: "john_doe2", role: "admin" },
    { id: nextUserId++, username: "guest_user", role: "contributor" },
    { id: nextUserId++, username: "charlie_brown", role: "member" }
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
        console.error("User not found!");
        return;
    }
    // Object.assign will update the found user in place
    Object.assign(foundUser, updates);
}
// Omit is a type in which an object property is optional => "id" - optional
function addNewUser(newUser) {
    var user = __assign({ id: nextUserId++ }, newUser);
    users.push(user);
    return user;
}
updateUser(1, { username: "new_john_doe " });
updateUser(4, { role: "contributor" });
addNewUser({ username: "joe_schmoe", role: "member" });
console.log(users);
