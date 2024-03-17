import { DioAccount } from "./DioAccount";

export class NewAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    deposit10More(value: number) {
        if (this.validateStatus())
            this.balance += value + 10
        console.log(`Voce depositou R$${value} + 10 `)

    }
}