const heroObj:{
    heroName: string;
    readonly age: number;
    profession: string;
    isMarried?: boolean;
} = {
    heroName: "Khan",
    age: 32,
    profession: "Actor",
    isMarried: false
}

const {heroName} = heroObj;
console.log(heroName);