function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
    let result = false;

    if (yourLeft+yourRight === friendsLeft+friendsRight) {
        return true;
    };

    return result;
}

// use switch statement instead?

console.log(areEquallyStrong(10, 15, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 9))
