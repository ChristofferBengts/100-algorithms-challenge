var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function areSimilar(a, b) {
    if (a.join('') === b.join('')) {
        return true;
    }
    else {
        // Swap every element in array with every other element in array once
        for (var i = 0; i < b.length; i++) {
            var cur = i;
            for (var i_1 = 0; i_1 < b.length; i_1++) {
                var newB = __spreadArrays(b);
                // Swap        
                newB[cur] = b[b.length - (i_1 + 1)];
                newB[b.length - (i_1 + 1)] = b[cur];
                // Check if same
                if (newB.join('') === a.join('')) {
                    return true;
                }
            }
        }
    }
    return false;
}
console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
console.log(areSimilar([3, 2, 1], [2, 2, 1]));
console.log(areSimilar([3, 2, 2], [2, 2, 3]));
console.log(areSimilar([1, 4, 3, 2, 5], [1, 2, 3, 4, 5]));
console.log(areSimilar([1, 2, 7, 4, 5, 6, 3, 8, 9, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
