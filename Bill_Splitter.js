
function calculateBill (costs, numPeople) {

    const totalBill = costs.reduce((acc, cost) => acc + cost, 0);

    const billPerson = totalBill / numPeople;

    return{totalBill, billPerson};
}

const costs = [25, 15, 10, 8, 12];
const numPeople = 4;

const {totalBill, billPerson} = calculateBill(costs, numPeople);

console.log(`Total bill: Rs. ${totalBill}`);
console.log(`Bill per person: Rs. ${billPerson}`);
