import MOD from '../../Rust/SerdeWasm/pkg/SerdeWasm.js'


let str = MOD.getBase64('HELLO KLYNTAR');

console.log('In base64 ',str)
console.log('In ROT13 ',MOD.getRot13('KLYNTAR VLADARTEM'))




// import loader from '@assemblyscript/loader'
// import metering from 'wasm-metering'
// import fs from 'fs'


// //Use release WASM version
// const wasm = fs.readFileSync('../../Rust/ReturnString/target/wasm32-unknown-unknown/release/ReturnString.wasm')

// console.log(wasm)


// const meteredWasm = metering.meterWASM(wasm,{
//     meterType: 'i32'
// })

// //------------------- Лимиты энергии -------------------

// const energyLimit = 2000000
// let energyUsed = 0


// let wasmMetered = await loader.instantiate(meteredWasm,{
//     'metering': {
//       'usegas': (energy) => {
//         energyUsed += energy
//         if (energyUsed > energyLimit) {
//           throw new Error('No more energy!')
//         }
//       }
//     }

// });


// let hello = wasmMetered.exports.get_hello();

// console.log('Hello ',hello)

// console.log('Base64 => ',wasmMetered.exports.__getString(hello))

// // console.log('Rot13 => ',wasmMetered.exports.__getString(rot13CipherText))
