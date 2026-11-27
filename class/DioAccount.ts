export abstract class DioAccount {
    private name: string
    private readonly accountNumber: number
    balance: number = 0;
    private status: boolean = true

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
    }
    setName = (name: string): void => {
        this.name = name
        console.log(`Name changed to ${this.name}`)
    }
    getName = (): string => {
        return this.name
    }
    deposit = (): void => {
        if (this.validateStatus()) {
            this.balance += 10; // Acrescenta 10 ao valor do depósito
            console.log(`Deposit made. New balance is ${this.balance}`)
        } else {
            console.log('Account is inactive')
        }
    }
    withdraw = (amount: number): void => {
        if (this.validateStatus() && this.balance >= amount) {
            this.balance -= amount;
            console.log(`Withdraw made. New balance is ${this.balance}`)
        } else {
            console.log('Insufficient funds or account is inactive')
        }
    }
    getBalance = (): number => {
        return this.balance
    }
    protected validateStatus = (): boolean => {
        if(this.status){
            return this.status
        }
        throw new Error('Account is invalid')
    }
} 