export let async_func_1 = async() => {

    return new Promise(resolve => {

        setTimeout(()=>resolve('Hello VladArtem!'),3000)

    })

}