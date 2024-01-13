"use strict";
class Account {
    constructor(id, owner, balance, nickname) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
        this.nickname = nickname;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error('Deposite amount cannot be less than 0');
        }
        else {
            console.log(this.balance += amount);
        }
    }
    widraw(amount) {
        if (amount > this.balance) {
            throw new Error('Invalid amount cannot withdraw more than balance');
        }
        else {
            console.log(this.balance - amount);
        }
    }
}
let account1 = new Account(1, 'Konlan', 1000);
console.log(account1.id);
console.log(account1.owner);
console.log(account1.balance);
const newDeposit = account1.deposit(500);
const newWidrawal = account1.widraw(400);
//# sourceMappingURL=index.js.map