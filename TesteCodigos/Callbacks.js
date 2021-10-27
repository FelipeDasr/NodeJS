const ID = ['Felipe', 'Emilly', 'Douglas', 'Mariana', 'Eduardo']


buscaIdBD = (id, callbck) => {
    return setTimeout(() => {
        callbck(null, ID[id-1])
    }, 5000)
}

callbackBuscaIdBD = (err, result) => {
    if(err) throw err
    console.log('Nome: ',result)
}

buscaIdBD(1, callbackBuscaIdBD)