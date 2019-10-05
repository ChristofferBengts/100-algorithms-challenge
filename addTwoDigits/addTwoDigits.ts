function addTwoDigits(n: any): number {
    let num = n.toString().split("");

    return num.reduce(function (init:string, cur:string): number {
        let a = parseInt(init);
        let b = parseInt(cur);

        return a + b;
    })
}

console.log(addTwoDigits(29));