const app = require('./app')

async function main() {
    await app.listen(3000)
    console.log('Servidor criado na porta 3000')
}

main()