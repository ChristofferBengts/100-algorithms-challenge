function addTwoDigits(n) {
    var num = n.toString().split("");
    return num.reduce(function (init, cur) {
        var a = parseInt(init);
        var b = parseInt(cur);
        return a + b;
    });
}
console.log(addTwoDigits(29));
