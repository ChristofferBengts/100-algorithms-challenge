function add(param1, param2) {
    return param1 + param2;
}
function add2() {
    var param1 = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        param1[_i] = arguments[_i];
    }
    return param1.reduce(function (previous, current) {
        return previous + current;
    });
}
console.log(add(1, 2));
console.log(add(3, 2));
console.log(add2(1, 2, 3, 4, 5));
console.log(add2(2, 3));
