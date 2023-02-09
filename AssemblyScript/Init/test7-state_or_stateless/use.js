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


let result=wasmMetered.exports.getMyData();

let my_string = wasmMetered.exports.__getString(result);

console.log(my_string);

console.log('Energy spent => ',gasUsed * 1e-4)

// Now try to set
wasmMetered.exports.setMyData(wasmMetered.exports.__newString('Second value'))

console.log('\n============= After changes=============\n')

let result2=wasmMetered.exports.getMyData();

let my_string2 = wasmMetered.exports.__getString(result2);

console.log(my_string2);

console.log('Energy spent => ',gasUsed * 1e-4)
