import {DioAccount} from './DioAccount.js';

export class CompanyAccount extends DioAccount {
    constructor(name:string, accountNumber:number){
        super(name, accountNumber )
    }
    getLoan = (amount: number): void =>{
        if(this.validateStatus()){
            this.balance += amount; // Acrescenta o valor do empréstimo
            console.log(`Loan granted, New balance is ${this.balance}`)
        } else {
            console.log('Account is inactive')
        }
    }
}