import MOD from './pkg/WasmJSRustSerdeKLYNTAR.js'


setTimeout(()=>{


    let [myObj,energyUsed1] = MOD.getObject("Hello",130,33,"KLYNTARKLYNTARKLYNTARKLYNTARKLYNTARKLYNTARKLYNTARKLYNTARKLYNTARKLYNTARKLYNTARKLYNTARKLYNTARKLYNTARKLYNTARKLYNTARKLYNTAR");

    console.log('Obj ',myObj,`(energy ${energyUsed1})`);
    
    let [coordsSum,energyUsed2] = MOD.getCoordsSum(myObj);

    console.log('CoordsSum ',coordsSum,`(energy ${energyUsed2})`);

    let [myObj2,energyUsed3] = MOD.getObject("Cool",1337,777,"KLY");

    console.log('Finally ',myObj2,`(energy ${energyUsed3})`);

},0)