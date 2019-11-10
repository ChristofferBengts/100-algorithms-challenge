function areSimilar(a: number[], b: number[]): boolean {
   
    let bool = false;
        
        if (a.join('') === b.join('')) {
            bool = true;
        } else {
            for (let i = 0; i < a.length; i++) {             
                let newB = [...b];
                let newA = [...a];

                // Swap (wrong way)
                newB[i] = b[i+1];
                newB[i+1] = b[i];
                //newA[i] = a[i+1];
                // should be something like newB[i] = newB.length-i

                // cases when array.length = 3
                // 1. element 0 <> element 1
                // 2. element 0 <> element 2
                // 3. element 1 <> element 2

                console.log(newA);
                console.log(newB);

                if (newA.join('') === b.join('')) {
                    bool = true;
                    break;
                }    
            }
        }
    

    return  bool;
}

//console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
//console.log(areSimilar([1, 2, 2], [2, 1, 1]));
//console.log(areSimilar([3, 2, 1], [2, 2, 1]));

// Wrong solution, needs to swap values instead of replacing