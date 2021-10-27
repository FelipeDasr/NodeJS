function soma(x, callback){
    return setTimeout(() => {
        callback(null, x + 5000)
    }, 3000)
}

function resolveSoma(err, resultado){
    if(err) throw err
    console.log(resultado)
}

soma(5000, resolveSoma) 