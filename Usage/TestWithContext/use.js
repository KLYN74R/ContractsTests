import MOD from '../../Rust/TestWithContext/pkg/TestWithContext.js'


let str = MOD.get_qwerty();

console.log(str)

// import loader from '@assemblyscript/loader'
// import metering from 'wasm-metering'
// import fs from 'fs'


// //Use release WASM version
// const wasm = fs.readFileSync('../../Rust/TestWithContext/pkg/TestWithContext_bg.wasm')

// console.log(wasm)


// const meteredWasm = metering.meterWASM(wasm,{
//     meterType: 'i32'
// })


// console.log(meteredWasm)

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