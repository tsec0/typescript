// can pass type to other types!
type MyGenericType<TypeData> = {
    data: TypeData;
}
type Example1 = MyGenericType<{firstName: string;}>
type Example2 = MyGenericType<string>

export {}

// can create functions with a type helper
// mapped over the top, and pass the type to them
// manually...

const makeFetch = async <TData>(url: string): Promise<TData> => {
    return fetch(url).then((res) => res.json());
};

// "/api/endpoint" -> runtime argument
// { firstName: string; lastName: string } -> type argument
makeFetch <{ firstName: string; lastName: string }>("/api/endpoint").then((resp) => {
    console.log(resp);
});

export {};

// can pass type parameters to
// other parts of JS, like Set and Map
const set = new Set<number>();

set.add(1);

// We want this to err!
// set.add("1"); -> it shows error

export {};

// it is not necessary to pass the types to a generic function!
// can infer 
const addIdToObject = <T>(obj: T) => {
    return {
        ...obj,
        id: "123",
    };
};

const result = addIdToObject({
    firstName: "Tseco",
    lastName: "Dikov",
})

console.log(result);

export {};

// get (request) promise return type
// Awaited<ReturnType<T>> - take sth that you pass and call await on it
type GetPromiceReurnType<T extends (...args: any) => any> = 
    Awaited<ReturnType<T>>; // can pass functions 

// pass a promice string - it returns the string
// pass a promice number (sth) - it returns the number (sth)
// aaand so on ...

// the same is here , but we have a function which returns a string (number, sth)
type Result1 = ReturnType<() => string>

// this is a type helper that takes a function and returns a promise
// which returns the return type of sth and get the awaited version
type Result = GetPromiceReurnType<() => Promise <{
    id: number;
    firstName: string;
    lastName: string;
}>>;

//type ErrorLine = GetPromiceReurnType<string> - should set string

// Sometimes you need to constrain the generic
// that gets passed in

// should extend with a record -> 
// Record -> dynamic keys of strings which you specify the value to
const getKeyWithHiestValue = <TObj extends Record<string, number>>(obj: TObj): {
        key: keyof TObj;
        value: number;
    } => {
        const keys = Object.keys(obj) as Array<keyof TObj>;
        
        let highestKey: keyof TObj = keys[0];
        let highestValue = obj[highestKey];

        for(const key of keys){
            if(obj[key] > highestValue){
                highestKey = key;
                highestValue = obj[key];
            }
        }

        return {
            key: highestKey,
            value: highestValue,
        }
    }

const result1 = getKeyWithHiestValue({
    a: 1,
    b: 2,
    c: 3,
});

// Overdrive types inside of the generic function with assertion
const typedObjectKeys = <TObj extends {}>(obj: TObj) => {
        return Object.keys(obj) as Array<keyof TObj>; // as is sometimes not useful
    }

const result2 = typedObjectKeys({
    name: "John",
    age: 30,
});

export {};

// Tip number 8
const getValue = <TObj, TKey extends keyof TObj>(obj: TObj, key: TKey) => {
    if (key === "bad"){
        throw Error(`Don't access the bad key`);
    }
    return obj[key];
}

const objex = {
    a: 1,
    b: "some-string",
    c: true,
}

const result4 = getValue(objex, "c"); // autocomplete is runing ok / infer what we pass 
console.log(result4);

// Tip number 9 // specify a default parameter
export const createSet = <T = string>() => {
    return new Set<T>();
}

const numberSet = createSet<number>();
const stringSet = createSet<string>();

const otherStringSet = createSet();

// Tip number 10 External libraries -> ZOD
// as schema for types

import { z } from "zod";

// const makeZodSafeFetch = <TData>(
//     url: string,
//     schema: z.Schema
// ): Promise<TData> => {
//     return fetch(url).then((res) => res.json()).then(res => {
//         return schema.parse(res);
//     });
// }

const makeZodSafeAsync = async <TData>(
    url: string,
    schema: z.Schema<TData>
): Promise<TData> => {
    const res = await fetch(url);
    const res_1 = await res.json();
    return schema.parse(res_1);
}
const result7 = makeZodSafeAsync<{
    // the type
    firstName: string;
    lastName: string;
    id: number;
}>("/api/endpoint", z.object({
    firstName: z.string(),
    lastName: z.string(),
    id: z.number(),
})).then((res) => {
    console.log(res);
})
