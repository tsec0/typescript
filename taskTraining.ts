type Pizza = {
    id: number,
    name: string,
    price: number,
}

type Order = {
    id: number,
    pizza: Pizza,
    status: "ordered" | "completed",
}

const menu: Pizza[] = [
    {id: 1, name: "Margarita", price: 8 },
    {id: 2, name: "Peperoni", price: 12 },
    {id: 3, name: "Hawaiian", price: 9 },
    {id: 4, name: "Veggie", price: 10 },] // Array<Pizza>

let cashInRegister: number = 100;
let nextOrderId: number = 1;

const orderQueue: Order[] = []; // Array<Order>

function addNewPizza(pizzaObj: Pizza): void{
    menu.push(pizzaObj);
}

type PizzaUnion = Pizza | undefined;

function placeOrder(pizzaName: string): Order | any {
    const selectedPizza:PizzaUnion = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    if(!selectedPizza){
        console.error(`The ${pizzaName} does not exist in the menu.`);
        return
    }
    cashInRegister += selectedPizza.price;
    const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered"}
    orderQueue.push(newOrder);
    return newOrder;
}

type OrderUnion = Order | undefined;

function completedOrder(orderId: number): Order {
    const order:OrderUnion = orderQueue.find(order => order.id === orderId);
    if(!order){
        console.error(`The ${orderId} does not exist in the order queue.`);
        throw new Error();
    } else {
        order.status = "completed";
    }
    return order;
}

// type narrowing
function getPizzaDetail(identifier: string | number): PizzaUnion | TypeError {
    if(typeof identifier === "string"){
        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase());
    } else if(typeof identifier === "number") {
        return menu.find(pizza => pizza.id === identifier);
    } else {
        throw new TypeError("Pameter `identifier` must be a string or a number")
    }
}

console.log(getPizzaDetail("nonono")); // because of undefined from find arr method

addNewPizza({id: 5, name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({id: 6, name: "BBQ Chicken", price: 12 });
addNewPizza({id: 7, name: "Spicy Sausage", price: 11 });

placeOrder("Chicken Bacon Ranch")
completedOrder(1);

console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);
