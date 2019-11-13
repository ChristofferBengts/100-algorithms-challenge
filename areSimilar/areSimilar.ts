function areSimilar(a: number[], b: number[]): boolean {
   
    let bool = false;
        
        if (a.join('') === b.join('')) {
            bool = true;
        } else {
            for (let i = 0; i < a.length; i++) {             
                let newB = [...b];
                let newA = [...a];

                // Swap

                // 1. element 0 <> element 1
                newB[i] = b[i+1];
                newB[i+1] = b[i];
                if (newB.join('') === a.join('')) {
                    bool = true;
                    break;
                }    
                // 2. element 0 <> element 2
                newB = [...b];
                newB[i] = b[i+2];
                newB[i+2] = b[i];
                if (newB.join('') === a.join('')) {
                    bool = true;
                    break;
                }    
                // 3. element 1 <> element 2
                newB = [...b];
                newB[i+1] = b[i+2];
                newB[i+2] = b[i+1];
                if (newB.join('') === a.join('')) {
                    bool = true;
                    break;
                }    


                //newA[i] = a[i+1];
                // should be something like newB[i] = newB.length-i

                console.log(newA);
                console.log(newB);
            }
        }
    

    return  bool;
}

//console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
//console.log(areSimilar([1, 2, 2], [2, 1, 1]));
//console.log(areSimilar([3, 2, 1], [2, 2, 1]));

// Wrong solution, needs to swap values instead of replacing