const ID = ['Felipe', 'Emilly', 'Douglas', 'Mariana', 'Eduardo']

buscaNomeBD = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ID[id - 1])
        }, 5000)
    })
}

for (let i = 1; i <= 5; i++) {
    buscaNomeBD(i).then((result) => {
        console.log(`O dono do ID ${i} é -> ${result}`)
    })
}