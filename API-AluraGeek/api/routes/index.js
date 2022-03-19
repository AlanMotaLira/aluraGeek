const bodyParser = require('body-parser')
const produdos = require('./produtosRoutes')
const usuarios = require('./usuariosRoutes')

module.exports = app =>{
    app.use(bodyParser.json(),
    bodyParser.urlencoded({extended:true}),
    produdos,
    usuarios
    )
}