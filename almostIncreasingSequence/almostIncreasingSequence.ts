function almostIncreasingSequence(sequence: number[]): boolean {
    let bool = false;

    for (let i = 0; i < sequence.length; i++) {
        let cur = sequence[i];
        
        sequence.splice(i, 1);
        
        let newSeq = sequence.map((cur: number, i: number) => {
            return (cur < sequence[i+1]);
        });

        newSeq.pop();

        if (newSeq.every((cur) => cur === true)) {
            bool = true;
            break;
        }

        sequence.splice(i, 0, cur);
    };

    return (bool);
}

console.log(almostIncreasingSequence([1, 3, 2, 1])) 
console.log(almostIncreasingSequence([1, 3, 2])) 
console.log(almostIncreasingSequence([1, 3, 2, 4])) 