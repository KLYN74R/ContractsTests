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


let obj1 = wasmMetered.exports.__newString(JSON.stringify({alias:"Biba"})),

    obj2 = wasmMetered.exports.__newString(JSON.stringify({alias:"Boba"}));



let result=wasmMetered.exports.getCommonAliasAndMagnitudeSum(obj1,obj2);

let cat_string = wasmMetered.exports.__getString(result);


console.log(cat_string);

console.log('Energy spent => ',result * 1e-4)