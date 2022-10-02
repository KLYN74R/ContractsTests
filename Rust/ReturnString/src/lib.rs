//Code to challenge ROT13 -> base64 -> ROT13 -> Plaintext

use rot13;
use base64;

#[no_mangle]
pub extern "C" fn getBase64(plain:String)->String{

    base64::encode(plain.as_bytes())

}


#[no_mangle]
pub extern "C" fn getRot13(plain:String)->String{

    rot13::rot13(&plain)

}