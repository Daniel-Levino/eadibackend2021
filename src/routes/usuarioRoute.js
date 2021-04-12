module.exports = function (app) {
    const usuarioController = require('../controller/usuarioController')

    app.route('/usuario')
        .get(usuarioController.listAll)
        .post(usuarioController.createOne)

    app.route('/usuario/:id')
        .get(usuarioController.listOne)
        .put(usuarioController.updateOne)
        .delete(usuarioController.deleteOne)
}