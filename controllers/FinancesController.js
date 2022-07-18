const pool = require("../db/conn");
const Categoria = require("../models/Categoria");
const Conta = require("..//models/Conta");
const Grupo = require("..//models/Grupo");
const TipoPagamento = require("../models/TipoPagamento");
const Movimentacao = require("../models/Movimentacao");

// Categoria
const createCategoria = async (req, res) => {
  const { descricao } = req.body;

  await Categoria.create({ descricao });

  res.json({ message: `A categoria ${descricao} foi criada.` });
};

const categorias = async (req, res) => {
  const categorias = await Categoria.findAll({ raw: true });

  res.json(categorias);
};

const updateCategoria = async (req, res) => {
  const { id, descricao } = req.body;

  const categoriaData = {
    id,
    descricao,
  };

  await Categoria.update(categoriaData, { where: { id: id } });

  res.status(201).json({ message: "Categoria atualizada." });
};

const deleteCategoria = async (req, res) => {
  const { id } = req.params;

  await Categoria.destroy({ where: { id: id } });

  res.status(200).json({ message: "Categoria excluída." });
};

// Conta
const createConta = async (req, res) => {
  const { descricao } = req.body;

  await Conta.create({ descricao });

  res.json({ message: `A conta ${descricao} foi criada.` });
};

const contas = async (req, res) => {
  const contas = await Conta.findAll({ raw: true });

  res.json(contas);
};

const updateConta = async (req, res) => {
  const { id, descricao } = req.body;

  const contaData = {
    id,
    descricao,
  };

  await Conta.update(contaData, { where: { id: id } });

  res.status(201).json({ message: "Conta atualizada." });
};

const deleteConta = async (req, res) => {
  const { id } = req.params;

  await Conta.destroy({ where: { id: id } });

  res.status(200).json({ message: "Conta excluída." });
};

// Grupo
const createGrupo = async (req, res) => {
  const { descricao } = req.body;

  await Grupo.create({ descricao });

  res.json({ message: `O grupo ${descricao} foi criado.` });
};

const grupos = async (req, res) => {
  const grupos = await Grupo.findAll({ raw: true });

  res.json(grupos);
};

const updateGrupo = async (req, res) => {
  const { id, descricao } = req.body;

  const grupoData = {
    id,
    descricao,
  };

  await Grupo.update(grupoData, { where: { id: id } });

  res.status(201).json({ message: "Grupo atualizado." });
};

const deleteGrupo = async (req, res) => {
  const { id } = req.params;

  await Grupo.destroy({ where: { id: id } });

  res.status(200).json({ message: "Grupo excluído" });
};

// Tipo de pagamento
const createTipoPagamento = async (req, res) => {
  const { descricao } = req.body;

  await TipoPagamento.create({ descricao });

  res.json({ message: `O tipo de pagamento ${descricao} foi criado.` });
};

const tipoPagamento = async (req, res) => {
  const tipoPagamento = await TipoPagamento.findAll({ raw: true });

  res.json(tipoPagamento);
};

const updateTipoPagamento = async (req, res) => {
  const { id, descricao } = req.body;

  const tipoPagamentoData = {
    id,
    descricao,
  };

  await TipoPagamento.update(tipoPagamentoData, { where: { id: id } });

  res.status(201).json({ message: "Tipo de pagamento atualizado." });
};

const deleteTipoPagamento = async (req, res) => {
  const { id } = req.params;

  await TipoPagamento.destroy({ where: { id: id } });

  res.status(200).json({ message: "Tipo de pagamento excluído." });
};

// Movimentação
const createMovimentação = async (req, res) => {
  //const categoria = req.body.categoria - id;

  const {
    tipo,
    descricao,
    data,
    valor,
    observacao,
    categoria_id,
    conta_id,
    grupo_id,
    tipopagamento_id,
  } = req.body;

  const movimentacao = {
    tipo,
    descricao,
    data,
    valor,
    observacao,
    categoria_id,
    conta_id,
    grupo_id,
    tipopagamento_id,
  };

  await Movimentacao.create(movimentacao);

  res.json({ message: `Movimentação criada com sucesso` });
};

const movimentacao = async (req, res) => {
  const movimentacao = await Movimentacao.findAll({ raw: true });

  res.json(movimentacao);
};

module.exports = {
  createCategoria,
  categorias,
  updateCategoria,
  deleteCategoria,
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
};
