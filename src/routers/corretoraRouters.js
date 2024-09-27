import express from "express"
import CorretoraController from "../controllers/corretora.js"


const rotas = express.Router();

rotas.get("/corretoras",CorretoraController.listarCorretora);
rotas.get("/corretoras/:cnpj",CorretoraController.listarCorretoraPorCNPJ);
rotas.post("/corretoras",CorretoraController.cadastrarCorretora);
rotas.put("/corretoras/:cnpj",CorretoraController.atualizarCorretora);
rotas.delete("/corretoras/:cnpj",CorretoraController.deletarCorretora);


export default rotas;
