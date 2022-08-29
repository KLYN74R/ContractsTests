import {JSON} from "assemblyscript-json";


// Parse an object using the JSON object
let jsonObj: JSON.Obj = <JSON.Obj>(JSON.parse('{"hello": "world", "value": 24}'));


//Simple return to stringify
export function getObjectJSON(): string {

    return jsonObj.stringify();

}




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