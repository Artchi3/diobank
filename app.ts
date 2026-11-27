import {CompanyAccount} from './class/CompanyAccount.js';
import {PeopleAccount} from './class/PeopleAccount.js';
import {InterestAccount} from './class/InterestAccount.js';

const peopleAccount = new PeopleAccount(1, 'artur', 10);
peopleAccount.deposit();
peopleAccount.withdraw(5);
console.log(`Saldo da conta pessoa: ${peopleAccount.getBalance()}`);

const companyAccount = new CompanyAccount('company', 2);
companyAccount.deposit();
companyAccount.getLoan(100);
companyAccount.withdraw(50);
console.log(`Saldo da conta empresa: ${companyAccount.getBalance()}`);

const interestAccount = new InterestAccount('interest', 3);
interestAccount.deposit();
interestAccount.depositInterest(100);
interestAccount.withdraw(20);
console.log(`Saldo da conta com rendimento: ${interestAccount.getBalance()}`);
