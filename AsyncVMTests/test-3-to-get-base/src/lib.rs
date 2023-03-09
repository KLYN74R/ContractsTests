use gloo_utils::format::JsValueSerdeExt;
use serde::{Serialize, Deserialize};
use std::collections::HashMap;
use wasm_bindgen::prelude::*;



//-------------------- IMPORTS ----------------------


#[wasm_bindgen]
extern "C" {

    #[wasm_bindgen(js_namespace = console)]
    #[no_mangle]
    fn log(s: &str);

    #[wasm_bindgen(js_namespace = async_module)]
    #[no_mangle]
    async fn async_func_1() -> JsValue;

}



#[derive(Serialize,Deserialize,Debug)]
pub struct Example {
    pub field1: HashMap<u32, String>,
    pub field2: Vec<Vec<f32>>,
    pub field3: [f32; 4],
}





#[derive(Serialize,Deserialize,Debug)]
pub struct Square {
    pub field1: HashMap<u32, String>,
    pub field2: Vec<Vec<f32>>,
    pub field3: [f32; 4],
    pub data: i32
}




#[wasm_bindgen]
pub fn send_example_to_js() -> JsValue {
    
    let mut field1 = HashMap::new();
    
    field1.insert(0, String::from("ex"));
    
    let example = Example {
        field1,
        field2: vec![vec![1., 2.], vec![3., 4.]],
        field3: [1., 2., 3., 4.]
    };

    <JsValue as JsValueSerdeExt>::from_serde(&example).unwrap()

}

#[wasm_bindgen]
pub async fn receive_example_from_js(val: JsValue) -> Result<JsValue,JsValue> {

    let example: Example = val.into_serde().unwrap();

    log("Object accepted inside WASM");

    let promise = js_sys::Promise::resolve(&(async_func_1().await));

    let result = wasm_bindgen_futures::JsFuture::from(promise).await?;

    Ok(result)

}

