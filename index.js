import ContaUniversitaria from "./ContaUniversitaria.js";

const cc = new ContaUniversitaria('2804','124568-9', 200);

cc.depositar(5000);
console.log(cc.sacar(500));

console.log(cc);