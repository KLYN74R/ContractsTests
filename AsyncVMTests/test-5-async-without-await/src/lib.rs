use serde::{Serialize, Deserialize};
use std::collections::HashMap;
use wasm_bindgen::prelude::*;
use gloo_utils::format::JsValueSerdeExt;




#[wasm_bindgen]
extern "C" {

    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);

    #[wasm_bindgen(js_namespace = network_module)]
    async fn make_http_call(s: &str);

}


#[derive(Serialize,Deserialize)]
pub struct Example {
    pub field1: HashMap<u32, String>,
    pub field2: Vec<Vec<f32>>,
    pub field3: [f32; 4],
}


#[derive(Serialize,Deserialize)]
pub struct Square {
    pub field1: HashMap<u32, String>,
    pub field2: Vec<Vec<f32>>,
    pub field3: [f32; 4],
    pub data: i32
}



async fn hello_world(x:&mut f32) {

    *x=123f32;

    make_http_call("FromHelloWorld").await;

    // log("Called Hello World");

}

async fn hello_vlad(x:&mut f32){

    *x=321f32;

    make_http_call("FromHelloVlad").await;
    
    // log("Called Hello Vlad");

}



#[wasm_bindgen]
pub async fn send_example_to_js(extra_val:f32) -> JsValue {

    let mut x_value:f32 = 1337f32;

    let f1 = hello_world(&mut x_value);
    let f2 = hello_vlad(&mut x_value);

    futures::join!(f1,f2);

    let mut field1 = HashMap::new();
    
    field1.insert(0, String::from("ex"));
    
    let example = Example {
        field1,
        field2: vec![vec![1., 2.], vec![3., 4.]],
        field3: [x_value, 2., 3., 4.]
    };

    JsValue::from_serde(&example).unwrap()

}



#[wasm_bindgen]
pub async fn receive_example_from_js(val: JsValue) -> Result<JsValue,JsValue> {

    let example: Example = val.into_serde().unwrap();

    let promise = js_sys::Promise::resolve(&JsValue::NULL);

    let result = wasm_bindgen_futures::JsFuture::from(promise).await?;

    Ok(result)

}