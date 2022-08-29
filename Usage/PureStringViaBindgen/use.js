import MOD from '../../Rust/PureStringViaBindgen/pkg/common.js'


let str = MOD.execute('getBase64','HELLO KLYNTAR');

console.log('In base64 ',str)
