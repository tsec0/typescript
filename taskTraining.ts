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

// hoisting is a mistake in JS
let nextPizzaId: number =  1;
let cashInRegister: number = 100;
let nextOrderId: number = 1;

const menu: Pizza[] = [
    {id: nextPizzaId++, name: "Margarita", price: 8 },
    {id: nextPizzaId++, name: "Peperoni", price: 12 },
    {id: nextPizzaId++, name: "Hawaiian", price: 9 },
    {id: nextPizzaId++, name: "Veggie", price: 10 },] // Array<Pizza>

const orderQueue: Order[] = []; // Array<Order>

function addNewPizza(pizzaObj: Omit<Pizza, "id">): Pizza {
    const newPizza: Pizza = {
        id: nextPizzaId ++,
        ...pizzaObj
    }
    menu.push(newPizza);
    return newPizza;
} // void is for not returning a value

// passing the type for the function => Type[] is the array ; Type is the object
// Type is the passed type for the function props 
function addToArray<Type>(array: Type[], item: Type): Type[] {
    array.push(item);
    return array;
}

addToArray(menu, {id: nextPizzaId++, name: "Chicken Bacon Ranch", price: 12 });
addToArray(orderQueue, { id: nextOrderId++, pizza: menu[2], status: "completed" });

// addNewPizza({ name: "Chicken Bacon Ranch", price: 12 });
// addNewPizza({ name: "BBQ Chicken", price: 12 });
// addNewPizza({ name: "Spicy Sausage", price: 11 });

type PizzaUnion = Pizza | undefined;

type OrderUnion = Order | undefined;

function placeOrder(pizzaName: string): OrderUnion {
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
function getPizzaDetail(identifier: string | number): PizzaUnion {
    if(typeof identifier === "string"){
        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase());
    } else if(typeof identifier === "number") {
        return menu.find(pizza => pizza.id === identifier);
    } else {
        throw new TypeError("Pameter `identifier` must be a string or a number");
    }
} // TypeError is not needed because it is thrown (broken / stopped) not returned

// console.log(getPizzaDetail("nonono")); // because of undefined from find arr method

// placeOrder("Chicken Bacon Ranch");
// placeOrder("Pepperoni");
// completedOrder(1);
// placeOrder("Veggie");
// completedOrder(2);

console.log("Menu:", menu);
// console.log("Cash in register:", cashInRegister);

console.log("Order queue:", orderQueue);
