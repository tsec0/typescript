type Pizza = {
    name: string,
    price: number,
}

type Order = {
    id: number,
    pizza: Pizza,
    status: string,
}

const menu: Pizza[] = [
    { name: "Margarita", price: 8 },
    { name: "Peperoni", price: 12 },
    { name: "Hawaiian", price: 9 },
    { name: "Veggie", price: 10 },] // Array<Pizza>

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

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ name: "BBQ Chicken", price: 12 })
addNewPizza({ name: "Spicy Sausage", price: 11 })

placeOrder("Chicken Bacon Ranch")
completedOrder(1);

console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);
