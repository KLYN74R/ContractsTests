use wasm_bindgen::prelude::*;


#[wasm_bindgen]
extern "C" {

    #[wasm_bindgen(js_namespace = network_module)]
    fn get_my_other_ip()->String;

    #[wasm_bindgen(js_namespace = network_module)]
    fn get_leet_value()->i32;


    #[wasm_bindgen(js_namespace = lalalend)]
    fn makeCall();


}


#[wasm_bindgen]
pub fn get_my_qwerty()->String{

    //Make HTTP query
    makeCall();

    let _ = get_leet_value();

    get_my_other_ip()+"+QWERTY+"

}