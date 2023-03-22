// deposite function..!
function deposite(customer, amount) {
    customer.balance += amount;
    console.log(`Deposite of Rs. ${amount} successful. New balance is Rs. ${customer.balance}.`);
}

// Withdraw function....!
function withdraw(customer, amount) {
    if(amount > customer.balance) {
        console.log("Insufficient balance. Cannot withdraw.");
    } else {
        customer.balance -= amount;
        console.log(`Withdrawal of Rs. ${amount} successful. New balance is Rs. ${customer.balance}.`);
    }
}

const customer = {
    name: 'John',
    balance: 5000
};

deposite(customer, 2000);
withdraw(customer, 3000);