function addBorder(picture: string[]): string[] {
    
    let longestItem = 0;

    let retArr = picture.map(function (i:string) {
        if (i.length > longestItem) {
            longestItem = i.length;
        }
        return "*" + i + "*";
    })

    let firstLastRow = "**";

    for (let i = 0; i < longestItem; i++) {
        firstLastRow += "*";
        
    }

    retArr.unshift(firstLastRow);
    retArr.push(firstLastRow);
    
    return retArr;
    
}

console.log(addBorder(["asf", "afeafe", "af", "lowkoflawf"]));

console.log(addBorder(["abc", "ded"]));

// Find largest item in array
/*function largestItem(mainArr: string[]) {
    let subArr = mainArr.map(function (elem: string) {
        return elem.length;
        
    })

    return subArr.reduce(function (prevLargest: number, currentLargest: number) {
        return (currentLargest > prevLargest) ? currentLargest : prevLargest;
    })
}*/