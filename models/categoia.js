import { Sequelize } from "sequelize";
import db from "../config/banco.js";

const Categoria = db.define('categoria', {
    id_categoria: {
        type: Sequelize.Integer,
        autoincremente: true,
        PrimaryKey: true,
    },

    nome_categoria: {
        type: Sequelize.toString,
        autoincremente: true, 
    },

    status_categoria: {
        type: Sequelize.toString,
        autoincremente: true, 
    },
})

export {Categoria}