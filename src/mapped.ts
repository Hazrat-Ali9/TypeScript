const myLuckyNums = [ 1, 2, 3, 4, 5];
const myLuckyStrings = myLuckyNums.map(num => num.toString());
console.log(myLuckyStrings);

type listOfFriend = {
    friend1: string;
    friend2: string;
    friend3: string;
    friend4: number;
}


type listOfFriendReadOnly = {
    readonly [key in keyof listOfFriend] : listOfFriend[key] 
    // friend1 : string
    // friend2 : string
    // friend3 : string
    // friend4 : number
}

const friendList:listOfFriend = {
    friend1: "abcc",
    friend2: 'def',
    friend3: 'pqr',
    friend4: 23
}

//friendList.friend1 = 'fahim';
console.log(friendList);