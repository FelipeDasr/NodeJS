function soma(x){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(x+1000)
        }, 3000)
    })
}

soma(5000).then((result) => {
    console.log('Resultado: ', result)
})