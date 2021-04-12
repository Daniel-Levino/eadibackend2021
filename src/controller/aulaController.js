const aulaModel = require('../models').Aula
const cursoModel = require('../models').Curso
const usuarioModel = require('../models').Usuario

exports.listAll = (req, res) => {
    aulaModel.findAll()
        .then(aula => {res.send(aula)})
        .catch(error => {res.send(error)})
}

exports.createOne = (req,res) => {
    const {titulo,descricao,url_image,url_video,idCurso} = req.body

    aulaModel.create({titulo,descricao,url_image,url_video,idCurso})
        .then(aula => {res.send(aula)})
        .catch(error => {res.send(error)})
}

exports.listOne = (req,res) => {
    aulaModel.findAll({where:{id:req.params.id}})
        .then(aula => {res.send(aula)})
        .catch(error => {res.send(error)})
}

exports.listOneAll = (req,res) => {
    aulaModel.findAll({where:{id:req.params.id},
        include:[
            {model: cursoModel,
            include: [
                {model: usuarioModel}
            ]}
        ]})
        .then(aula => {res.send(aula)})
        .catch(error => {res.send(error)})
}

exports.updateOne = (req,res) => {
    const {titulo,descricao,url_image,url_video,idCurso} = req.body

    aulaModel.update(
        {titulo,descricao,url_image,url_video,idCurso}, 
        {where: {id: req.params.id}})
        .then(aula => {res.send(aula)})
        .catch(error => {res.send(error)})
}

exports.deleteOne = (req,res) => {
    aulaModel.destroy({where:{id: req.params.id}})
        .then(aula => {
            res.json({
                message: "Aula deletada com sucesso",
                data: aula
            })
        })
}