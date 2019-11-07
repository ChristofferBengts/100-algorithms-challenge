function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {

    let yourStrongest: number = (Math.max(yourLeft, yourRight));
    let friendsStrongest: number = (Math.max(friendsLeft, friendsRight));
    let yourWeakest: number = (Math.min(yourLeft, yourRight));
    let friendsWeakest: number = (Math.min(friendsLeft, friendsRight));

    return yourStrongest === friendsStrongest && yourWeakest === friendsWeakest;
}

console.log(areEquallyStrong(10, 15, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 9))
console.log(areEquallyStrong(9, 16, 15, 10))
