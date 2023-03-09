import * as MOD from '../test-4-no-async-imports/pkg/test_1_simple_object.js'

let myObject = MOD.send_example_to_js()

console.log(myObject)

// let data = await MOD.receive_example_from_js(myObject)

// console.log(data)