function alphabeticShift(inputString: string): string {
    const [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];
    let newArray= [];

    inputString.split("").forEach(element => {
        let currentValue = eval(element);
        console.log(currentValue);

        // Create array using letters as indexes directly?

        newArray += currentValue;
        
    });

    let newString = "";

    return newString;
}

console.log(alphabeticShift('crazy'));