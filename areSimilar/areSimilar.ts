function areSimilar(a: number[], b: number[]): boolean {
   
    let bool = false;
        
        if (a.join('') === b.join('')) {
            bool = true;
        } else {
            for (let i = 0; i < a.length; i++) {             
                let newB = [...b];

                newB[i] = a[i];

                if (a.join('') === newB.join('')) {
                    bool = true;
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

// Wrong solution, needs to swap values instead of replacing