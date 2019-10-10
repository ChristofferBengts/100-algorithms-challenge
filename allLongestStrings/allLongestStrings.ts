function allLongestStrings(inputArray: string[]): string[] {
    let longestItem = 0;
    let newArr = [];

    inputArray.forEach((i:string) => {
        if (i.length > longestItem) {
            longestItem = i.length;
        };
    })

    inputArray.forEach((i:string) => {
        if (i.length === longestItem) {
            newArr.push(i);
        }
    })

    return newArr;
}

console.log(allLongestStrings(["aba", "aa", "ada", "vd", "aba"]));