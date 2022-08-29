import loader from '@assemblyscript/loader'
import fs from 'fs';

(async () => {
    
    let module = await loader.instantiate(fs.readFileSync('./test1.wasm'));
    
    // необходимо использовать __newString, __getString
    // компиляция с флагом --exportRuntime

    let cat_string = module.exports.__getString(module.exports.getObjectJSON());
   
   console.log(JSON.parse(cat_string));
   
})();