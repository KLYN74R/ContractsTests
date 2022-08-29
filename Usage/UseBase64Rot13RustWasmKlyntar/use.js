import loader from '@assemblyscript/loader'
import metering from 'wasm-metering'
import fs from 'fs'


//Use release WASM version
const wasm = fs.readFileSync('../../Rust/ReturnString/target/wasm32-unknown-unknown/release/ReturnString.wasm')

console.log(wasm)


const meteredWasm = metering.meterWASM(wasm,{
    meterType: 'i32'
})

//------------------- Лимиты энергии -------------------

const energyLimit = 2000000
let energyUsed = 0


let wasmMetered = await loader.instantiate(meteredWasm,{
    'metering': {
      'usegas': (energy) => {
        energyUsed += energy
        if (energyUsed > energyLimit) {
          throw new Error('No more energy!')
        }
      }
    }

});


let toGetBase64 = wasmMetered.exports.__newString("Hello KLYNTAR");
let toGetRot13 = wasmMetered.exports.__newString("KLYNTAR is the best");


let base64Encoded = wasmMetered.exports.getBase64(toGetBase64);
let rot13CipherText = wasmMetered.exports.getRot13(toGetRot13);


console.log('Base64 => ',wasmMetered.exports.__getString(base64Encoded))
console.log('Rot13 => ',wasmMetered.exports.__getString(rot13CipherText))


// console.log(`Result:${result}, energy used ${energyUsed * 1e-4}`);

// console.log(`Factorial result:${factorialResult}, energy used ${energyUsed * 1e-4}`);