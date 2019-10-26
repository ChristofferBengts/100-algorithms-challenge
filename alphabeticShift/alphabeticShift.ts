function alphabeticShift(inputString: string): string {

    const alp: string = "abcdefghijklmnopqrstuvwxyz";
    let newLetters: string[] = [];

    inputString.split("").forEach(element => {
        let newPos: number;
        
        if (element !== "z") {
            newPos = alp.indexOf(element) + 1;
        } else {
            newPos = 0;
        }

        newLetters.push(alp.charAt(newPos));  
    });

    return newLetters.join("");
}

console.log(alphabeticShift('crazy'));