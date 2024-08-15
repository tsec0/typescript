type Voter = {
    name: string,
    age: number,
}

const gameScores: number[] = [14, 21, 34, 56, 78, 36];
const favThings: string[] = ["PC", "Desk", "Phone", "Timer", "News letter"];
const voters: Voter[] = [{ name: "Ivan", age: 42}, {name: "Pesh", age: 34}, {name: "Bob", age: 54}];
// Array<Voter>

// Generics - <Type> (<T>) => function fn<T>(a,b){} => function params for Types (T) 
// -> one Type <T> ; two Types <T, K>
// Generic - a type placeholder
// <Type> (<T>) - a generic type

function getLastItem<Type>(array: Type[]): Type | undefined {
    return array[array.length - 1]
} // type "any" shuts off TS => thats why we use generics -> <Type> => function fn<Type>(a,b){}

console.log(getLastItem(gameScores));
console.log(getLastItem(favThings))
console.log(getLastItem(voters));
