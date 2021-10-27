operacao = (x) => {
    return new Promise((resolve, reject) => {
        if(Number(x) == NaN || Number(x) == undefined) {
            reject('Ta de brincadeira')
        }
        setTimeout(() => {
            resolve(x*3)
        }, 3000)
    })
}

async function main(){
    try {
        const resultado = await operacao(47)
        console.log(`Resultado com async await: ${resultado}`)
    } catch (error) {
        console.log(`Problemas: ${error}`)
    }
}

main()