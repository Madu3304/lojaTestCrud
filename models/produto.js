import { Sequelize } from "sequelize";
import db from "../config/banco.js";

const Produto = db.define('produto', {
    id_prouto: {
        type: Sequelize.Integer,
        autoincremente: true,
        PrimaryKey: true,
    },

    nome_pro: {
        type: Sequelize.toString,
        autoincremente: true, 
    },

    estoque_pro: {
        type: Sequelize.toString,
        autoincremente: true, 
    },

    categoria_pro: {
        type: Sequelize.toString,
        autoincremente: true, 
    },

    descricao_pro: {
        type: Sequelize.toString,
        autoincremente: true, 
    }
})


export {Produto}