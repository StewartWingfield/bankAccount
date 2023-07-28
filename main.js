class bankAccount {
    transactions = []
    constructor(accountNumber, owner) {
        this.accountNumber = accountNumber
        this.owner = owner 
    }
    balance() {

    }
    deposit(amt) {

    }
    charge(payee, amt) {

    }
}

class transaction {
    date = new Date().toLocaleDateString()
    constructor(amount, payee)
}

console.log(date)