const express = require("express");
const routerFinances = express.Router();

// Controller
const {
  createCategoria,
  categorias,
  deleteCategoria,
  updateCategoria,
  createConta,
  contas,
  updateConta,
  deleteConta,
  createGrupo,
  grupos,
  updateGrupo,
  deleteGrupo,
  createTipoPagamento,
  tipoPagamento,
  updateTipoPagamento,
  deleteTipoPagamento,
  createMovimentação,
  movimentacao,
} = require("../controllers/FinancesController");

// Middlewares

// Routes
// Categorias
routerFinances.post("/createCategoria", createCategoria);
routerFinances.get("/categorias", categorias);
routerFinances.put("/categorias/update/", updateCategoria);
routerFinances.delete("/categorias/delete/:id", deleteCategoria);

// Conta
routerFinances.post("/createConta", createConta);
routerFinances.get("/contas", contas);
routerFinances.put("/contas/update/", updateConta);
routerFinances.delete("/contas/delete/:id", deleteConta);

// Grupo
routerFinances.post("/createGrupo", createGrupo);
routerFinances.get("/grupos", grupos);
routerFinances.put("/grupos/update/", updateGrupo);
routerFinances.delete("/grupos/delete/:id", deleteGrupo);

// Tipo de Pagamento
routerFinances.post("/createTipoPagamento", createTipoPagamento);
routerFinances.get("/tipoPagamento", tipoPagamento);
routerFinances.put("/tipoPagamento/update/", updateTipoPagamento);
routerFinances.delete("/tipoPagamento/delete/:id", deleteTipoPagamento);

// Movimentação
routerFinances.post("/createMovimentacao", createMovimentação);
routerFinances.get("/movimentacao", movimentacao);

module.exports = routerFinances;
