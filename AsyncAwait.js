function PiyushBhaiKaTora() {
    let p = new Promise(function(resolve){
        setTimeout(function(){
            resolve("Bhai Apne Systum chalave Se")
        },1000)
    });
    return p;
}

async function phoneGhuma() {
    let value = await PiyushBhaiKaTora()
    console.log(value);
}

phoneGhuma();