
use serde::{Serialize, Deserialize};
use wasm_bindgen::prelude::*;
use serde_json;


#[derive(Serialize, Deserialize, Debug)]
struct Point {
    alias1: String,
    alias2: String,
    x: i32,
    y: i32,
}



#[wasm_bindgen]
pub fn getObject(alias1:String,x:i32,y:i32,alias2:String)->String{

    let point = Point { alias1, x, y , alias2 };

    // Convert the Point to a JSON string.
    let serialized = serde_json::to_string(&point).unwrap();

    return serialized;

}


#[wasm_bindgen]
pub fn getCoordsSum(jsoned:&str)->i32{

    // Convert the JSON string back to a Point.
    let deserialized: Point = serde_json::from_str(jsoned).unwrap();

    deserialized.x+deserialized.y

}