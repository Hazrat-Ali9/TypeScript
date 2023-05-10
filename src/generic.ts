type myArray<T> = Array<T>
// T = number
// Array<number>

const myNumbers: myArray<number> = [1, 2, 3, 4, 5];
const myStrings: myArray<string> = ['a', 'xyz', 'abc', 'pqr'];
const myBoolean: myArray<boolean> = [true, false, false, true];

type dataType = {name: string, age:number};

const ourInfo:myArray<dataType> = [
    {name: "fahim", age: 70},
    {name: "mir", age: 60},
    {name: "mezba", age: 50}
]

// tuple in generic
type MyGenType<X, Y, Z> = [X, Y, Z];

const A: MyGenType<string, number, number> = ['hero', 34, 30];
const B: MyGenType<number, number, string> = [45, 34, 'abc'];
const C: MyGenType<number, string, boolean> = [45, 'khan', true];

// generic in function
const printInfo = <P, Q>(param1:P, param2:Q):P =>{
    console.log(`param1: ${param1}, param2: ${param2}`)
    return param1;
}

console.log(printInfo<string, number>('fahim', 32))
// printInfo<boolean, number>(true, 32)
// printInfo<boolean, string>(true, 'hello')


// generic in interface

interface IMe<T, U> {
    name: string;
    age: T; // 23, 23years
    mark: U;
}

const me:IMe<string, number> = {
    name: "Firoz",
    age: "23 years",
    mark: 34 
}


// keyof
type MovieType = {
    name: string;
    duration: number;
    category: string;
}

// type test = 'name' | 'duration' | 'category'
// const myTest:test = 'name'
const data:MovieType = {
    name: "Agni 2",
    duration: 310,
    category: "Action"
}

type myMoviesType = keyof MovieType // 'name' | 'duration' | 'category'
const myText11:myMoviesType = 'name'
console.log(data[myText11])
