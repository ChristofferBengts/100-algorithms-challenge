function alphabeticShift(inputString) {
    var alp = "abcdefghijklmnopqrstuvwxyz";
    var newLetters = [];
    inputString.split("").forEach(function (element) {
        var newPos;
        if (element !== "z") {
            newPos = alp.indexOf(element) + 1;
        }
        else {
            newPos = 0;
        }
        newLetters.push(alp.charAt(newPos));
    });
    return newLetters.join("");
}
console.log(alphabeticShift('crazy'));
