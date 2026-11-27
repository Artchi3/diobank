import { DioAccount } from "./DioAccount.js";

export class InterestAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    depositInterest = (amount: number): void => {
        if (this.validateStatus()) {
            this.balance += amount + 10; // Acrescenta o valor do depósito mais 10
            console.log(`Deposit made. New balance is ${this.balance}`);
        } else {
            console.log('Account is inactive');
        }
    };
}