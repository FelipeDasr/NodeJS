const ID = ['Felipe', 'Emilly', 'Douglas', 'Mariana', 'Eduardo']

function getName(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(ID[id]), 3000)
    })
}

async function main() {
    for (let i = 0; i < 5; i++) {
        const Name = await getName(i)
        console.log(`O dono do ID ${i} é ${Name}`)
    }
}

main()