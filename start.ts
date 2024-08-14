function getFirstElement<ElementType>(array: ElementType[]){
    return array[0];
}

const numbers = [1, 2, 4];
const firstNum = getFirstElement<number>(numbers);

const strings = ["one", "two", 'three'];
const firstStr = getFirstElement<string>(strings);

//const map = new Map<string, number>()

// const map = new Map<string, number>([["asd", 4]]);

// map.set("sdf", 3);

// complicated generics
const map = new Map<string, Map<string, number>>();

// this is a generic
// Data = default value
type ApiResponse<Data = { status: number }> = {
    data: Data // object , array ...
    isErr: boolean
}

type UserResponse = ApiResponse<{ name: string; age: number }>
type BlogResponse = ApiResponse<{ title: string }>
type StatusResponse = ApiResponse<{status: number }>

// passing generic type
const user_response: UserResponse = {
    data: {
        name: "Tsetso",
        age: 27,
    },
    isErr: false,
}

const blog_response: BlogResponse = {
    data: {
        title: "Tsetso",
        // age: 27, -> no second property
    },
    isErr: false,
}

const status_response: StatusResponse = {
    data: {
        status: 404,
        // age: 27, -> no second property
    },
    isErr: false,
}

type SpecificApiRespones<Data extends object> = {
    data: Data
    isError: boolean
}

const specif_response: SpecificApiRespones<{name: string}> = {
    data: {
        name: "something test",
    },
    isError: false,
}

// default value -> status
type SpecificApiResponse<Data extends object = { status: number }> = {
    data: Data
    isError: boolean
}

const response: SpecificApiResponse = {
    data: {
        status: 204,
    },
    isError: false,
}

console.log(firstNum, firstStr);
