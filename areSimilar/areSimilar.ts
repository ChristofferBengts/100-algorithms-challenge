function areSimilar(a: number[], b: number[]): boolean {
   
    let bool = false;
        
        if (a.join('') === b.join('')) {
            bool = true;
        } else {
            // Swap every element in array with every other element in array once
            for (let i = 0; i < b.length; i++) {             
                let cur = i;

                for (let i = 0; i < b.length; i++) {             
                    let newB = [...b];
                    // Swap        
                    newB[cur] = b[b.length - (i + 1)];
                    newB[b.length - (i + 1)] = b[cur];
                    // Check if same
                    if (newB.join('') === a.join('')) {
                        bool = true;
                        break;
                    }    
                }

                if (bool) {
                    break;
                }
            }
        }
        
    return  bool;
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
console.log(areSimilar([3, 2, 1], [2, 2, 1]));
console.log(areSimilar([3, 2, 2], [2, 2, 3]));
console.log(areSimilar([1, 4, 3, 2, 5], [1, 2, 3, 4, 5]));
console.log(areSimilar([1, 2, 7, 4, 5, 6, 3, 8, 9, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));