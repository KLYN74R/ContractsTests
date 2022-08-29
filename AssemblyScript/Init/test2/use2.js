import loader from '@assemblyscript/loader'
import fs from 'fs';

(async () => {
    
    let module = await loader.instantiate(fs.readFileSync('./test2.wasm')); 


    let obj1 = module.exports.__newString(JSON.stringify({alias:"Biba"})),

        obj2 = module.exports.__newString(JSON.stringify({alias:"Boba"}));



    let result=module.exports.getCommonAliasAndMagnitudeSum(obj1,obj2);

    let cat_string = module.exports.__getString(result);
   

   console.log(cat_string);
   
})();