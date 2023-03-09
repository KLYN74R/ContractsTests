import * as MOD from '../test-1-simple-object/pkg/test_1_simple_object.js'

let myObject = MOD.send_example_to_js()

console.log(myObject)

MOD.receive_example_from_js(myObject)