// spread operator
const heroArr1:string[] = ['khan', 'jalil', 'siam'];
const heroArr2:string[] = ['alom', 'faruk', 'razzak'];

const [hero1, hero2, xyz] = heroArr1;
/**
 * hero1 = khan
 * hero2 = jalil
 * hero3 = siam
 */
console.log(hero1, hero2, xyz);



heroArr1.push(...heroArr2); // 'alom', 'faruk', 'razzak'
//console.log(heroArr1);

// rest parameter
const heroScore = (...score:number[]):number =>{
    let sum:number = 0;
    score.map(n => {
        sum = sum+n;
    })
    return sum;
}
//console.log(heroScore(1, 4, 5, 3))

const heroString = (...strings: string[]):void => { 
    //strings = ['programming', 'hero', 'apollo', 'web']
    strings.map(str => console.log(str));
}

//heroString('programming', 'hero', 'apollo', 'web');