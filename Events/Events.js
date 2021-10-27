const EventEmitter = require('events')

class Evento extends EventEmitter {

}

const meuEvento = new Evento()

meuEvento.on('seguranca', (x, y) => {
    console.log('Executando evento "segurança": ', x, y)
})

meuEvento.emit('seguranca', 'UserAdmin', ' Alterou Salário')