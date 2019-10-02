function addBorder(picture) {
    var longestItem = 0;
    var retArr = picture.map(function (i) {
        if (i.length > longestItem) {
            longestItem = i.length;
        }
        return "*" + i + "*";
    });
    var firstLastRow = "**";
    for (var i = 0; i < longestItem; i++) {
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
