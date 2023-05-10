function convertToUpperCase(str: string | string[]): string | string[] | undefined {
    if(typeof str === 'string'){
        return str.toUpperCase();
    }
    else if(Array.isArray(str)){
        return str.map(element => element.toUpperCase());
    }
}

console.log(convertToUpperCase(["hello", "world"]));