import ColaGenerator from "./js/colaGenerator.js";
import VendingMachineFunc from "./js/vendingMachineFunc.js";

let colaGenerator = new ColaGenerator();
await colaGenerator.setup();
//(async () => {await colaGenerator.loadData()}) //최상위에서 못쓰면 이렇게 해

const VendingMachine = new VendingMachineFunc();
VendingMachine.setup();