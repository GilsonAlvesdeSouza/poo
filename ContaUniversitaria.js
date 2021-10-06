import ContaBancaria from "./ContaBancaria.js";

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero, saldo, ) {
        super(agencia, numero, saldo);
        this.tipo = 'universitária';
    }

    sacar(valor){
        if(valor > 500){
            return "Operação não permitida contate seu gerente!";
        }
        this.saldo -= valor;
        return `Operação realizada com sucesso! seu saldo é: ${this.saldo}`;
    }
}

export default ContaUniversitaria;