const cursoModel = require('../models').Curso

exports.listAll = (req, res) => {
    cursoModel.findAll()
        .then(curso => {res.send(curso)})
        .catch(error => {res.send(error)})
}

exports.createOne = (req,res) => {
    const {titulo, descricao, url_image, idUsuario} = req.body

    cursoModel.create({titulo, descricao, url_image, idUsuario})
        .then(curso => {res.send(curso)})
        .catch(error => {res.send(error)})
}
exports.listOne = (req,res) => {
    cursoModel.findAll({where: {id: req.params.id}})
        .then(curso => {res.send(curso)})
        .catch(error => {res.send(error)})
}

exports.updateOne = (req,res) => {
    const {titulo, descricao, url_image, idUsuario} = req.body

    cursoModel.update(
        {titulo, descricao, url_image, idUsuario},
        {where: {id: req.params.id}})
        .then(curso => {res.send(curso)})
        .catch(error => {res.send(error)})
}

exports.deleteOne = (req,res) => {
    cursoModel.destroy({where: {id: req.params.id}})
        .then(curso => 
            {res.json({
                message: "Curso deletado com sucesso",
                data: curso
            })
        })
        .catch(error => {res.send(error)})
}