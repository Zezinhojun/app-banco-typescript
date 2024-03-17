import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  getLoan = (value: number): void => {
    if (this.validateStatus())
      this.balance += value
    console.log(`Voce pegou um empréstimo R$ ${value} e seu Saldo agora é R$${this.balance}`)
  }
}
