module.exports = function (app){
    const cursoController = require('../controller/cursoController')

    app.route('/curso')
        .get(cursoController.listAll)
        .post(cursoController.createOne)

    app.route('/curso/:id')
        .get(cursoController.listOne)
        .put(cursoController.updateOne)
        .delete(cursoController.deleteOne)
}