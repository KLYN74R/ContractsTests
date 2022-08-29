use wasm_bindgen::prelude::*;

use base64;



#[wasm_bindgen]
pub fn getBase64(plain:&str)->String{

    let plusLaLa = &(plain.to_owned() + "LALLALAL");

    base64::encode(plusLaLa.as_bytes())

}