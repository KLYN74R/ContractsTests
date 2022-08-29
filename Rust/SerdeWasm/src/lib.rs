//Code to challenge ROT13 -> base64 -> ROT13 -> Plaintext

use wasm_bindgen::prelude::*;
use rot13;
use base64;



#[wasm_bindgen]
pub fn getBase64(plain:&str)->String{

    base64::encode(plain.as_bytes())

}


#[wasm_bindgen]
pub fn getRot13(plain:&str)->String{

    rot13::rot13(plain)

}