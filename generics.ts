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
set.add("1");

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