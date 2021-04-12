module.exports = function (app) {
    const aulaController = require('../controller/aulaController.js')
    
    app.route('/aula')
        .get(aulaController.listAll)
        .post(aulaController.createOne)
    
    app.route('/aula/:id')
        .get(aulaController.listOne)
        .put(aulaController.updateOne)
        .delete(aulaController.deleteOne)
}