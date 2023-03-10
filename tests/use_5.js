import * as MOD from '../AsyncVMTests/test-7-simple-async/pkg/test_1_simple_object.js'

// let myObject = await MOD.send_example_to_js(331)


for(let i=0;i<100;i++){

    await MOD.send_example_to_js(331)

    console.log('\n======================\n')

}


// let data = await MOD.receive_example_from_js(myObject)

// console.log(data)