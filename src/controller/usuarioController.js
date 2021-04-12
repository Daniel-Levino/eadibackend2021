const usuarioModel = require('../models').Usuario

exports.listAll = (req, res)=>{
    usuarioModel.findAll()
        .then(usuarios => {res.send(usuarios)})
        .catch(error => {res.send(error)})
}
exports.createOne = (req, res) => {
    const {nome, email, senha, tipo} = req.body

    usuarioModel.create({nome,email,senha,tipo})
    .then(usuario => {res.send(usuario)})
    .catch(error => {res.send(error)})
}
exports.listOne = (req,res) => {
    usuarioModel.findAll({where: {id:req.params.id}})
    .then(usuario => {res.send(usuario)})
    .catch(error => {res.send(error)})
}

exports.updateOne = (req,res) => {
    const {nome, email, senha, tipo} = req.body
    usuarioModel.update(
        {nome, email, senha, tipo},
        {where:{id: req.params.id}})
        .then(usuario => {res.send(usuario)})
        .catch(error => {res.send(error)})
}

exports.deleteOne = (req,res) => {
    usuarioModel.destroy({where:{id:req.params.id}})
    .then(usuario => {
        res.json({
            message: "Usuario deletado com sucesso",
            data: usuario
        })
    })
}