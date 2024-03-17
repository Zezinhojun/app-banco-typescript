import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { NewAccount } from './class/NewAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount.getName());
peopleAccount.deposit(100);
peopleAccount.withdraw(10);
console.log(peopleAccount.getBalance());

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount.getName());
companyAccount.deposit(200);
companyAccount.withdraw(30);
companyAccount.getLoan(300);
console.log(companyAccount.getBalance());

const newAccount: NewAccount = new NewAccount('NewAccount', 30)
console.log(newAccount.getName());
newAccount.deposit(300);
newAccount.withdraw(200);
newAccount.deposit10More(100);
console.log(newAccount.getBalance());
