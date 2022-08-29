import loader from '@assemblyscript/loader'
import metering from 'wasm-metering'
import fs from 'fs';


let wasm = fs.readFileSync('./test.wasm');

const meteredWasm = metering.meterWASM(wasm,{
    meterType: 'i32'
})


const limit = 20_000_000
let gasUsed = 0

let wasmMetered = await loader.instantiate(meteredWasm,{
    'metering': {
      'usegas': (gas) => {
        gasUsed += gas
        if (gasUsed > limit) {
          throw new Error('out of gas!')
        }
      }
    }
  });


let result=wasmMetered.exports.getMapping();

// let cat_string = wasmMetered.exports.__getString(result);


console.log(result);

console.log('Energy spent => ',gasUsed * 1e-4)