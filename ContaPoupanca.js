import ContaBancaria from "./ContaBancaria.js";

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero, saldo,) {
        super(agencia, numero);
        this.tipo = 'poupança';
        this.saldo = saldo;
    }
}

export default ContaPoupanca;