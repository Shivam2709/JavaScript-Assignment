
function rentCost (numDays, carType) {
    let rentalCost = 0;

    switch(carType) {
        case "economy":
            rentalCost = 4000;
            break;
        case "midsize":
            rentalCost = 10000;
            break;
        case "luxury":
            rentalCost = 20000;
            break;
        default:
            return "Invalid car type";
    }

    return rentalCost * numDays;
}

console.log(rentCost(3, "economy"));
console.log(rentCost(5, "midsize"));
console.log(rentCost(2, "invalid"));