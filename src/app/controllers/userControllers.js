const { user } = require('../../../db/models');

const defaultMessageError = (res, error) => {
    return res.status(500).json({ error: error.message });
}

class userControllers {

    //retorna todos os usuários
    async index(req, res) {
        try{
            const users = await user.findAll();
            return res.status(200).json(users);
        } catch(error){
            defaultMessageError(res, error);
            return res.status(404);
        }
    }

    //retorna um usuário específico com base no id
    async show(req, res) {
        try{
            const id = req.params.id;
            const singleUser = await user.findByPk(id);
            return res.status(200).json(singleUser);
        } catch(error){
            defaultMessageError(res, error);
        }
    }

    //cria um novo usuário
    async create(req, res) {
        try{
            const { nome: UserNome, email: UserEmail, senha: UserSenha } = req.body;
            const userCreated = await user.create({
                    nome: UserNome,
                    email: UserEmail,
                    senha: UserSenha
                });
            return res.status(201).json(userCreated);
        } catch(error){
            defaultMessageError(res, error);
        }
    }

    //atualiza um usuário já existente
    async update(req, res) {
        try{
            const id = req.params.id;
            const {UserNome, UserEmail, UserSenha} = req.body;
            const userUpdated = await user.update({
                    where: id
                },
                {
                    nome: UserNome,
                    email: UserEmail,
                    senha: UserSenha
                });
            return res.status(200).json(userUpdated);
        } catch(error){
            defaultMessageError(res, error);
        }
    }

    //deleta um usuário
    async destroy(req, res) {
        try{
            const id = req.params.id;
            await user.destroy({
                where: {id}
            });
            return res.status(200).json();
        } catch(error){
            defaultMessageError(res, error);
        }
    }
}

module.exports = new userControllers();