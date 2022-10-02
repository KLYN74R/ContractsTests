use wasm_bindgen::prelude::*;


#[wasm_bindgen]
extern "C" {

    #[wasm_bindgen(js_namespace = network_module)]
    fn get_my_ip()->String;

}


#[wasm_bindgen]
pub fn get_qwerty()->String{

    get_my_ip()+"QWERTY"

}