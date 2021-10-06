import ContaBancaria from "./ContaBancaria.js";

class ContaCorrente extends ContaBancaria {

    constructor(agencia, numero, saldo, cartaoCredito = false) {
        super(agencia, numero, saldo);
        this._tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }


    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(value) {
        this._cartaoCredito = value;
    }

}

export default ContaCorrente;