/**
 * 
 * 0) WASM optimizations
 * 
 * ```bash
 * 
 * wasm-opt test_1_simple_object_bg.wasm -Oz
 * 
 * ```
 * 
 * 
 * 1) Add function ./js/foo.js to final build
 * 
 */


import * as MOD from '../test-2-async-func/pkg/test_1_simple_object.js'

let myObject = MOD.send_example_to_js()

console.log(myObject)

let data = await MOD.receive_example_from_js(myObject)

console.log(data)