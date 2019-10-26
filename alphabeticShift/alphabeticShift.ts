function alphabeticShift(inputString: string): string {

    const alp = "abcdefghijklmnopqrstuvwxyz";
    let newLetters = [];

    inputString.split("").forEach(element => {
        let newPos = alp.indexOf(element) + 1;

        newLetters.push(alp.charAt(newPos));  
    });

    return newLetters.join("");
}

console.log(alphabeticShift('crazy'));