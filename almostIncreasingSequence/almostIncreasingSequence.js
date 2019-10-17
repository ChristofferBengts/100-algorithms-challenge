function almostIncreasingSequence(sequence) {
    var bool = false;
    for (var i = 0; i < sequence.length; i++) {
        var cur = sequence[i];
        sequence.splice(i, 1);
        var newSeq = sequence.map(function (cur, i) {
            return (cur < sequence[i + 1]);
        });
        newSeq.pop();
        if (newSeq.every(function (cur) { return cur === true; })) {
            bool = true;
            break;
        }
        sequence.splice(i, 0, cur);
    }
    ;
    return (bool);
}
console.log(almostIncreasingSequence([1, 3, 2, 1]));
console.log(almostIncreasingSequence([1, 3, 2]));
console.log(almostIncreasingSequence([1, 3, 2, 4]));
