function canCargo(fuelFor1Km, currentFuel, neededPathKm) {

    if (currentFuel <= (neededPathKm * fuelFor1Km)) {
        return false;
    }
    else{
        return true;

    }
    

}
console.log(canCargo(1, 40, 30));