function adjacentElementsProduct(inputArray: number[]): number {
    let largestProduct = 0;

    inputArray.forEach((cur, i) => {

        if (cur * inputArray[i-1] > largestProduct) {
            largestProduct = cur * inputArray[i-1];
        };

    })

    return largestProduct;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));