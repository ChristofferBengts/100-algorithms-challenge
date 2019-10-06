function adjacentElementsProduct(inputArray) {
    var largestProduct = 0;
    inputArray.forEach(function (cur, i) {
        if (cur * inputArray[i - 1] > largestProduct) {
            largestProduct = cur * inputArray[i - 1];
        }
        ;
    });
    return largestProduct;
}
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
