class ContaBancaria {
    constructor(agencia, numero, tipo, saldo = 0) {
        this._agencia = agencia;
        this._numero = numero;
        this._tipo = tipo;
        this._saldo = saldo;
    }


    get agencia() {
        return this._agencia;
    }

    set agencia(value) {
        this._agencia = value;
    }

    get numero() {
        return this._numero;
    }

    set numero(value) {
        this._numero = value;
    }

    get tipo() {
        return this._tipo;
    }

    set tipo(value) {
        this._tipo = value;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(value) {
        this._saldo = value;
    }

    sacar(valor){
        if(valor > this._saldo){
            return `Operação não permitida o valor do saque é maior que o saldo disponível`;
        }
        this._saldo -= valor;
        return `Operação realizada com sucesso! Seu novo saldo é ${this._saldo}`;
    }

    depositar(valor){
        this._saldo += valor;
        return `Deposito realizado com sucesso! Seu novo saldo é ${this._saldo}`;
    }
}

export default ContaBancaria;