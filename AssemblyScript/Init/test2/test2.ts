import {JSON} from "assemblyscript-json";


class Vector2D {

    //Coordinates
    x: f32;
    y: f32;

    //Vector moniker
    alias:string;

    constructor(x: f32, y: f32, alias:string) {
        
        this.x = x;
        this.y = y;
        this.alias=alias;

    }


    Magnitude(x:f32,y:f32): f32 {

        return Mathf.sqrt(x * x + y * y);
    
    }


    add(vec2: Vector2D): Vector2D {
        
        this.x += vec2.x;
        this.y += vec2.y;
        return this;
        
    }

}

//Accept 2 vectors and return object with concatenated aliases and sum of Magnitude
export function getCommonAliasAndMagnitudeSum(vector1:string,vector2:string):string {


    //Deserialize
    let v1: JSON.Obj = <JSON.Obj>(JSON.parse(vector1)),
    
        v2: JSON.Obj = <JSON.Obj>(JSON.parse(vector2));



    //Concat aliases
    let alias1 = v1.getString("alias"),
        alias2 = v2.getString("alias")

    if(alias1!==null && alias2!==null){

        return alias1._str + " & " + alias2._str;

    }else return "Error";


}




// export function deserializeObj(serializedObject:string):Vector2D{

//     let obj:JSON.Obj = <JSON.Obj>(JSON.parse(serializedObject));

//     return (<Vector2D>obj);

// }



// export function serializeObj(obj:Vector2D):string{

//     let obj:JSON.Obj = <JSON.Obj>(obj);

//     return JSON.

// }



// // Parse an object using the JSON object
// let jsonObj: JSON.Obj = <JSON.Obj>(JSON.parse('{"hello": "world", "value": 24}'));



// // We can then use the .getX functions to read from the object if you know it's type
// // This will return the appropriate JSON.X value if the key exists, or null if the key does not exist
// let worldOrNull: JSON.Str | null = jsonObj.getString("hello"); // This will return a JSON.Str or null
// if (worldOrNull != null) {
//   // use .valueOf() to turn the high level JSON.Str type into a string
//   let world: string = worldOrNull.valueOf();
// }

// let numOrNull: JSON.Num | null = jsonObj.getNum("value");
// if (numOrNull != null) {
//   // use .valueOf() to turn the high level JSON.Num type into a f64
//   let value: f64 = numOrNull.valueOf();
// }

// // If you don't know the value type, get the parent JSON.Value
// let valueOrNull: JSON.Value | null = jsonObj.getValue("hello");
//   if (valueOrNull != null) {
//   let value = <JSON.Value>valueOrNull;

//   // Next we could figure out what type we are
//   if(value.isString) { 
//     // value.isString would be true, so we can cast to a string
//     let innerString = (<JSON.Str>value).valueOf();
//     let jsonString = (<JSON.Str>value).stringify();

//     // Do something with string value
//   }
// }