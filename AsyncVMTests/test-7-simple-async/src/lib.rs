use gloo_utils::format::JsValueSerdeExt;
use serde::{Serialize,Deserialize};
use std::collections::HashMap;
use wasm_bindgen::prelude::*;



#[derive(Serialize, Deserialize)]
pub struct Example {
    pub field1: HashMap<u32, String>,
    pub field2: Vec<Vec<f32>>,
    pub field3: [f32; 4],
}



#[wasm_bindgen]
extern "C" {

    #[wasm_bindgen(js_namespace = network_module)]
    async fn make_http_call(s: &str);

}


async fn hello_world() {

    make_http_call("FromHelloWorld").await;

    // log("Called Hello World");

}

async fn hello_vlad(){

    make_http_call("FromHelloVlad").await;
    
    // log("Called Hello Vlad");

}



#[wasm_bindgen]
pub fn send_example_to_js() -> JsValue {
    
    let mut field1 = HashMap::new();

    field1.insert(0, String::from("ex"));

    hello_vlad();
    hello_world();

    let example = Example {
        field1,
        field2: vec![vec![1., 2.], vec![3., 4.]],
        field3: [1., 2., 3., 4.]
    };

    <JsValue as JsValueSerdeExt>::from_serde(&example).unwrap()

}
