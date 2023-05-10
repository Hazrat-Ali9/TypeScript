// normal function
function heroNormalFunc(a:number, b:number):string{
    const sum = a+b;
    return `Sum: ${sum}`;
}

//console.log(heroNormalFunc(2, 3));

// arrow function
const heroArrowFunc = (c:number, d:number):string => {
    return `Total: ${c+d}`;
}

console.log(heroArrowFunc(4, 5));
