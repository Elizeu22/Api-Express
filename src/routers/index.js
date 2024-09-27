import express from "express"
import rotas from '../routers/corretoraRouters.js';



const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send());

    app.use(express.json(), rotas);
};


export default routes


