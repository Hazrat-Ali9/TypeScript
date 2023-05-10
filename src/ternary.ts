const isHeroAvailable:boolean = true;

// if(isHeroAvailable){
//     console.log("book now");
// }
// else{
//     console.log("you can not book");
// }

const checkAvailablity = isHeroAvailable ? "book now" : "you can not book";
// condition ? true_value : false_value
//console.log(checkAvailablity);

// nullish operator ( ?? )
// check null and undefined
/**
 * null = No input
 * undefined = No input
 * hello = hello
 * 4 = 4
 * true = true
 * false = false
 * "" = ""
 */

const inputSomething:unknown = null;
const checkInput = inputSomething ?? "No input";
console.log(checkInput);