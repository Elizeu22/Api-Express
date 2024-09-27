
import mongoose from "mongoose"


const corretoraSchema = new mongoose.Schema({
    id:{type:mongoose.Schema.Types.ObjectId},
    bairro:{type: String},
    cep:{type: String},
    cnpj:{type:String},
    codigo_cvm:{type: String},
    complemento:{type: String},
    data_inicio_situacao:{type: String},
    data_patrimonio_liquido:{type: String},
    data_registro:{type: String},
    email:{type: String},
    logradouro:{type: String},
    municipio:{type: String},
    nome_social:{type: String},
    nome_comercial:{type: String},
    pais:{type: String},
    status:{type: String},
    telefone:{type: String},
    type:{type: String},
    uf:{type: String},
    valor_patrimonio_liquido:{type: String}
});


const corretorasAtivas = mongoose.model("corretoras",corretoraSchema)


export default corretorasAtivas















