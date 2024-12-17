import express from "express";
import db from "./config/banco.js"

import { Produto } from "./models/produto.js";

import { router } from "./routes/produto_router.js";

const app = express()

app.use(express.urlencoded({extended:tru}))

await db.sync()

try {
    await db.authenticate()
    console.log('Conexao com o mysql não estabelecida')

} catch (error) {
    console.log('Conexao com o mysql não estabelecida')
}

app.use(router)
app.use(Produto)

app.listen(8080, () => console.log("Servidor funcionando em http://localhost:8080"))