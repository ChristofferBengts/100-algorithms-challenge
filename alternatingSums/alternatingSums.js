function alternatingSums(a) {
    var sum1 = 0;
    var sum2 = 0;
    a.forEach(function (element, index) {
        if (index % 2) {
            sum2 += element;
        }
        else {
            sum1 += element;
        }
    });
    return [sum1, sum2];
}
console.log(alternatingSums([50, 60, 60, 45, 70]));
