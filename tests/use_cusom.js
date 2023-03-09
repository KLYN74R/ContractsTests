import ContractInstance from '../test-4-no-async-imports/pkg/test_custom.js'
import fs from 'fs'


const bytes = fs.readFileSync('C:/Users/Acer/MyProjects/Klyntar/KlyntarVMTests/test-4-no-async-imports/pkg/test_1_simple_object_bg.wasm');


let contract = new ContractInstance({},bytes)

contract.setUpContract()

//console.log(contract)

let myObject = contract.takeObject(contract.wasm.send_example_to_js())

console.log(myObject)

let data = await contract.takeObject(contract.wasm.receive_example_from_js(contract.addHeapObject(myObject)))

console.log(data)


console.log(contract.takeObject(contract.wasm.send_example_to_js()))
console.log(contract.takeObject(contract.wasm.send_example_to_js()))