type HeroTypeA = {
    name: string;
    age?: number;
}

type HeroTypeB = HeroTypeA & {
    salary: number;
    position?: string;
}

const HeroData:HeroTypeB = {
    name: "jalil",
    age: 23,
    salary: 3534,
    position: "Deeveloper"
}

//union -> |
// intersection -> &

const myFavHero:HeroTypeA | HeroTypeB = {
    name: "khan",
    //age: 30,
    salary: 34454,
    //position: "Actor"
}

