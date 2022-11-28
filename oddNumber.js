function checkOddNuber(number) {

    let qaliq = 0;

    while (number > 1) {
        qaliq = number % 10;
        number = parseInt((number - qaliq) / 10);
        if (qaliq % 2 == 1) {
            return true;
        }
    }
    return false;
}
console.log(checkOddNuber(3728482));