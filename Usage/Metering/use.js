import MOD from './pkg/WasmJSRustSerdeKLYNTAR.js'


setTimeout(()=>{


    let [myObj,energyUsed1] = MOD.getObject("Hello",130,33,"KLYNTAR");

    console.log('Obj ',myObj,`(energy ${energyUsed1})`);
    
    let [coordsSum,energyUsed2] = MOD.getCoordsSum(myObj);

    console.log('CoordsSum ',coordsSum,`(energy ${energyUsed2})`);
    

},1000)
