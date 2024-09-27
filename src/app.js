import express from "express";
import conexaoDatabase from "./DB/db.js";
import routes from "./routers/index.js"


const conexaoBanco = await conexaoDatabase();

conexaoBanco.on("error", (erro) => {
    console.error("erro de conexão", erro);
});

conexaoBanco.once("open", () => {
    console.log("Conexao com o banco feita com sucesso");
})


const app = express();
routes(app);



export default app;