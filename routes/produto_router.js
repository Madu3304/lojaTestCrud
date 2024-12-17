import { produto } from "../controllers/produto_controller.js";
import express from "express";

const router = express.Router()

router.get('produto', produto.getProduto)
router.post('produto', produto.createProduto)
router.put('produto/:id_produto', produto.updateProduto)
router.delete('produto/:id_produto', produto.deleteProduto)


export { router }