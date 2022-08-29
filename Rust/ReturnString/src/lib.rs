//Code to challenge ROT13 -> base64 -> ROT13 -> Plaintext

use rot13;
use base64;

use wasm_bindgen::prelude::*;


#[no_mangle]
pub extern "C" fn getBase64(plain:&str)->String{

    base64::encode(plain.as_bytes())

}


#[no_mangle]
pub extern "C" fn getRot13(plain:&str)->String{

    rot13::rot13(plain)

}