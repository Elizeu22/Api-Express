import jwt from 'jsonwebtoken';
import corretora from '../models/corretora.js'
import conexaoRabbitMQ from '../rabbitMQProducer.js'
import conexaoConsumer from '../rabbitMQConsumer.js'


class CorretoraController {

    static async listarCorretora(req, res) {
        try {
            const listar = await corretora.find({});
            res.status(200).json(listar);
        }
        catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisicao` });
        }
    }


    static async listarCorretoraPorCNPJ(req, res) {
        try {
            const idcnpj = req.params.cnpj;
            const token = jwt.sign({ idcnpj }, process.env.SECRET, { expiresIn: 600 })
            console.log(token);
            const listarCnpj = await corretora.find({ cnpj: `${idcnpj}` });
            res.status(200).json(listarCnpj);
        }
        catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisicao` });
        }
    }


    static async cadastrarCorretora(req, res) {
        try {

            const validacaoCnpj = req.body.cnpj;

            const verificaCnpj = await corretora.find({ cnpj: `${validacaoCnpj}` });

            if (verificaCnpj.length === 0) {


                const novaCorretora = await corretora.create(req.body);

                conexaoRabbitMQ.conexao(novaCorretora);


                res.status(201).json({ message: "Cadastrado com sucesso", corretora: novaCorretora });

                conexaoConsumer.conexaoConsumer(novaCorretora);
            }
            else {
                res.status(500).json({ message: `falha ao cadastrar os dados CNPJ ja cadastrado,verifique se ja existe` });
            }

        }
        catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar os dados` });
        }
    }


    static async atualizarCorretora(req, res) {
        try {
            const cnpjCorretora = req.params.cnpj;
            await corretora.findOneAndUpdate({ cnpj: `${cnpjCorretora}` }, req.body);
            res.status(200).json({ message: "Atualizado com sucesso" });
        }
        catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao atualizar os dados` });
        }
    }



    static async deletarCorretora(req, res) {
        try {
            const cnpj = req.params.cnpj;
            await corretora.findOneAndDelete({ cnpj: `${cnpj}` });
            res.status(200).json({ messa: "Excluido com Sucesso" });
        }
        catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisicao` });
        }
    }




}

export default CorretoraController