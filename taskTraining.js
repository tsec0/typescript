// hoisting is a mistake in JS
var nextPizzaId = 1;
var cashInRegister = 100;
var nextOrderId = 1;
var menu = [
    { id: nextPizzaId++, name: "Margarita", price: 8 },
    { id: nextPizzaId++, name: "Peperoni", price: 12 },
    { id: nextPizzaId++, name: "Hawaiian", price: 9 },
    { id: nextPizzaId++, name: "Veggie", price: 10 },
]; // Array<Pizza>
var orderQueue = []; // Array<Order>
function addNewPizza(pizzaObj) {
    pizzaObj.id = nextPizzaId++;
    menu.push(pizzaObj);
} // void is for not returning a value
addNewPizza({ id: 0, name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ id: 0, name: "BBQ Chicken", price: 12 });
addNewPizza({ id: 0, name: "Spicy Sausage", price: 11 });
function placeOrder(pizzaName) {
    var selectedPizza = menu.find(function (pizzaObj) { return pizzaObj.name === pizzaName; });
    if (!selectedPizza) {
        console.error("The ".concat(pizzaName, " does not exist in the menu."));
        return;
    }
    cashInRegister += selectedPizza.price;
    var newOrder = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" };
    orderQueue.push(newOrder);
    return newOrder;
}
function completedOrder(orderId) {
    var order = orderQueue.find(function (order) { return order.id === orderId; });
    if (!order) {
        console.error("The ".concat(orderId, " does not exist in the order queue."));
        throw new Error();
    }
    else {
        order.status = "completed";
    }
    return order;
}
// type narrowing
function getPizzaDetail(identifier) {
    if (typeof identifier === "string") {
        return menu.find(function (pizza) { return pizza.name.toLowerCase() === identifier.toLowerCase(); });
    }
    else if (typeof identifier === "number") {
        return menu.find(function (pizza) { return pizza.id === identifier; });
    }
    else {
        throw new TypeError("Pameter `identifier` must be a string or a number");
    }
} // TypeError is not needed because it is thrown (broken / stopped) not returned
console.log(getPizzaDetail("nonono")); // because of undefined from find arr method
// placeOrder("Chicken Bacon Ranch");
// placeOrder("Pepperoni");
// completedOrder(1);
// placeOrder("Veggie");
// completedOrder(2);
console.log("Menu:", menu);
// console.log("Cash in register:", cashInRegister);
// console.log("Order queue:", orderQueue);
