import {CompanyAccount} from './class/CompanyAccount.js';
import {PeopleAccount} from './class/PeopleAccount.js';
import {InterestAccount} from './class/InterestAccount.js';

const peopleAccount = new PeopleAccount(1,'artur',10)
console.log(peopleAccount)
peopleAccount.deposit()
const companyAccount = new CompanyAccount('company',2)
companyAccount.deposit()
console.log(companyAccount)
const interestAccount = new InterestAccount('interest',3)
interestAccount.depositInterest(100)
console.log(interestAccount)
