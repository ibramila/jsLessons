function checkNumber(number) {
    if (number <= 50) {
        for (let i = 1; i <= number; i++)
            if (i % 2 != 0) {
                console.log(i);

            }
    }
    else if (number > 50 && number <= 100) {
        for (let j = 1; j <= number; j++)
            if (j % 5 == 0) {
                console.log(j);

            }
    }
    else {
        for (let k = 1; k <= number; k++)
            if (k % 8 == 0) {
                console.log(k);

            }
    }
}
checkNumber(110);