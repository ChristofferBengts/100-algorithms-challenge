function alphabeticShift(inputString) {
    var alp = "abcdefghijklmnopqrstuvwxyz";
    var newLetters = [];
    inputString.split("").forEach(function (element) {
        var newPos = alp.indexOf(element) + 1;
        newLetters.push(alp.charAt(newPos));
    });
    return newLetters.join("");
}
console.log(alphabeticShift('crazy'));
