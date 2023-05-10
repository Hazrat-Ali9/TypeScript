// type assertion
const thinkSomething:unknown = 34.43535;
//const result = (thinkSomething as number)
console.log((thinkSomething as string).length)

const myLuckyNum = (num: string | number): number | string =>{
    if(typeof num === 'string'){
        return "This is string";
    }
    return num;
}