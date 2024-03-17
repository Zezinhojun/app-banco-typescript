export abstract class DioAccount {
  private readonly _name: string
  private readonly _accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this._name = name
    this._accountNumber = accountNumber
  }

  getName = (): string => {
    return this._name
  }

  deposit = (value: number): void => {
    if (this.validateStatus())
      if (value > 0) {
        this.balance += value
        console.log(`Voce depositou R$${value}`)
      }
  }

  withdraw = (value: number): void => {
    if (this.validateStatus())
      if (this.balance <= 0) {
        console.log(`Saldo insuficiente Saldo atual: R$${this.balance}`);
      } else {
        this.balance -= value
        console.log(`Você sacou R$${value} e seu saldo atual é R$${this.balance}`);
      }
  }

  getBalance = (): void => {
    return console.log(`Esse é seu saldo: R$${this.balance}`)
  }

  public validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
