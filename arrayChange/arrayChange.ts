function arrayChange(inputArray: number[]): number {

    let newPrev: number = 0;
    
    let diff: number = inputArray.reduce((acc, cur, i, arr): number => {

        if (cur < newPrev) {
            newPrev = cur + (newPrev - cur);
            
            return acc + (newPrev - cur) + 1;
        }

        if (cur === newPrev) {
            newPrev = cur + 1;
            
            return acc + 1;
        }

        newPrev = cur;
        return acc;
    }, 0);

    /*inputArray.forEach((el, i, arr) => {
         

        if (el - 1 > arr[i-1]) {
            el--;
            if (!(el - 1 === arr[i-1])) {
                el++;
            }

        }
        
    });*/
    
    return diff;
}

console.log(arrayChange([1, 1, 1]));
console.log(arrayChange([1, 3, 5]));
console.log(arrayChange([-1, 1, 5, 5])); // Needs support for negative input values