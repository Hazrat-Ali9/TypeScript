// of guard
type typeOfData = number | string;
const doSomething = (a: typeOfData):typeOfData =>{
    if(typeof a === 'number'){
        return a;
    }
    return a;
}

// console.log(doSomething(23))
// console.log(doSomething('hello'))

// in guard
type X = {
    name: string;
    phone: number;
}

type Y = {
    name: string;
    address: string;
    salary: number;
}

const getInfo= (info: X | Y) => {
    if('phone' in info){
        return `Type A: phone: ${info.phone}`;
    }
    else if('salary' in info){
        return `Type B: salary: ${info.salary}`
    }
}

// instance of guard
class P {
    position: string;
    salary: number;

    constructor(position: string, salary: number){
        this.position = position;
        this.salary = salary;
    }

    showDetails(){
        console.log(`Position: ${this.position}`);
    }
}

class Q extends P{
    constructor(position: string, salary: number){
        super(position, salary)
    }
    showSalary(){
        console.log(`Salary: ${this.salary}`)
    }
}

class R extends P{
    constructor(position: string, salary: number){
        super(position, salary)
    }
    showSalarywithPosition(){
        console.log(`Salary: ${this.salary}, Position: ${this.position}`)
    }
}

function findInstance (person: P){
    if(person instanceof Q){
        person.showSalary();
    }
    else if(person instanceof R){
        person.showSalarywithPosition();
    }
}

const p4 = new Q('developer', 23);
const p5 = new R('engineer', 33);

