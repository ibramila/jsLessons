const date = new Date();

function myFunction() {
    let name = prompt("Please enter your name");
    let surname = prompt("Please enter your surname")
    let currentYear = date.getFullYear() - age;
    do {
        var age = prompt("Please enter your age");
    } while (!parseInt(age));
    if (name != null && surname != null && age != null) {
        document.getElementById("demo").innerHTML =
            name + " " + surname + ", you are born in " + currentYear;
    }
}
myFunction();
// console.log(param, currentYear);