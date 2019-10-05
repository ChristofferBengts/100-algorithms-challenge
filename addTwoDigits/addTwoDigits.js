function addTwoDigits(n) {
    var num = n.toString().split("");
    return num.reduce(function (init, cur) {
        return parseInt(init) + parseInt(cur);
    });
}
console.log(addTwoDigits(29));
