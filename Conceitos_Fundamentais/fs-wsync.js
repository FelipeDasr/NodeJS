const fs = require('fs')

console.log(process.hrtime()[0]/60, '\nAntes da leitura do Arquivo')

const dados = fs.readFile('file.txt', (err, data) => {
    if(err) throw err
    console.log('Terminei a leitura')
})

console.log(process.hrtime()[0]/60, '\ndepois da leitura do Arquivo')