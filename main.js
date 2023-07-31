class bankAccount {
    constructor(accountNumber, owner) {
        this.accountNumber = accountNumber
        this.owner = owner 
        this.transactions = []
    }
    balance() {
        let newBalance = 0
        for (let i = 0; i < this.transactions.length; i++) {
           newBalance += this.transactions[i].amount
        } return newBalance
    }
    deposit(amt) {
        if (amt > 0) {
            let money = new transaction(amt, this.owner)
            this.transactions.push(money)
        }
    }
    charge(payee, amt) {
        let totalBalance = this.balance()
        if (amt < totalBalance) {
            let chargeTransaction = new transaction(-amt, payee)
            this.transactions.push(chargeTransaction)
        }
    }
}

class transaction {
    constructor(amount, payee){
        this.amount = amount
        this.payee = payee
        this.date = Date()
    }
}

 let newBankAccount = new bankAccount('1', '2')
console.log(newBankAccount) 

console.log(newBankAccount)

newBankAccount.deposit(100) 
console.log(newBankAccount)

newBankAccount.charge('target', 50)
console.log(newBankAccount)

console.log(newBankAccount.balance())
