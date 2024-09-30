import express from "express"
import CorretoraController from "../controllers/corretora.js"
import verificaJwt from "../token.js"



const rotas = express.Router();


rotas.get("/corretoras",verificaJwt,CorretoraController.listarCorretora);
rotas.get("/corretoras/:cnpj",CorretoraController.listarCorretoraPorCNPJ);
rotas.post("/corretoras",CorretoraController.cadastrarCorretora);
rotas.put("/corretoras/:cnpj",verificaJwt,CorretoraController.atualizarCorretora);
rotas.delete("/corretoras/:cnpj",verificaJwt,CorretoraController.deletarCorretora);


export default rotas;
