const EventEmitter = require('events')

class Evento extends EventEmitter {

}

const meuEvento = new Evento()

meuEvento.on('compra_realizada', (name, valor) => {
    console.log(`\nEvento compra_realizada foi chamado: \n\nNome: ${name}\nValor: R$${valor}\n`)
})

meuEvento.emit('compra_realizada', 'Felipe Dasr', 312)