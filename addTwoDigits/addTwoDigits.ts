function addTwoDigits(n: any): number {
    let num = n.toString().split("");

    return num.reduce((init:string, cur:string) => {
        return parseInt(init) + parseInt(cur);
    })
}

console.log(addTwoDigits(29));
