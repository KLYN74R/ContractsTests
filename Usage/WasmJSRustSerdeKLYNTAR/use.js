import MOD from '../../Rust/WasmJSRustSerdeKLYNTAR/pkg/WasmJSRustSerdeKLYNTAR.js'


let myObj = MOD.getObject("Hello",30,33,"KLYNTAR");

console.log('Obj ',myObj);

console.log('CoordsSum ',MOD.getCoordsSum(myObj));
