function alternatingSums(a: number[]): number[] {
    let sum1 = 0;
    let sum2 = 0;
    
    a.forEach( (element, index) => {
        if (index % 2) {
            sum2 += element;      
        } else {
            sum1 += element;
        }
    });
    return [sum1, sum2];
}

console.log(alternatingSums([50, 60, 60, 45, 70]))