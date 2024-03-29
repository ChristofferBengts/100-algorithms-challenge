function alphabetSubsequence(s: string): boolean {
    let result: boolean = true;
    let stringArr: string[] = s.split('');

    for (let i = 1; i < stringArr.length; i++) { 
        if (!(stringArr[i].charCodeAt(0) > stringArr[i-1].charCodeAt(0))) {         
            result = false;
            break;
        }
    }
    return result;
}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
