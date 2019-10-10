function allLongestStrings(inputArray) {
    var longestItem = 0;
    var newArr = [];
    inputArray.forEach(function (i) {
        if (i.length > longestItem) {
            longestItem = i.length;
        }
        ;
    });
    inputArray.forEach(function (i) {
        if (i.length === longestItem) {
            newArr.push(i);
        }
    });
    return newArr;
}
console.log(allLongestStrings(["aba", "aa", "ada", "vd", "aba"]));
