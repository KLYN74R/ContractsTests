use wasm_bindgen::prelude::wasm_bindgen;



#[wasm_bindgen]
extern "C" {

    #[wasm_bindgen(js_namespace = network_module)]
    fn get_my_other_ip()->String;

    #[wasm_bindgen(js_namespace = network_module)]
    fn get_leet_value()->i32;


    #[wasm_bindgen(js_namespace = lalalend)]
    fn makeCall();

    #[wasm_bindgen(js_namespace = storage_module)]
    fn get_from_mapping()->i32;


}


#[wasm_bindgen]
pub fn get_my_qwerty()->String{

    //Make HTTP query
    makeCall();

    let _ = get_leet_value();

    get_my_other_ip()+"+QWERTY+"

}


#[wasm_bindgen]
pub fn get_cool(){

    get_from_mapping();

}