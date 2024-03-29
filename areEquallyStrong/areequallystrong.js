function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    var yourStrongest = (Math.max(yourLeft, yourRight));
    var friendsStrongest = (Math.max(friendsLeft, friendsRight));
    var yourWeakest = (Math.min(yourLeft, yourRight));
    var friendsWeakest = (Math.min(friendsLeft, friendsRight));
    return yourStrongest === friendsStrongest && yourWeakest === friendsWeakest;
}
console.log(areEquallyStrong(10, 15, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 9));
console.log(areEquallyStrong(9, 16, 15, 10));
