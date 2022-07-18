const { DataTypes } = require("sequelize");

const pool = require("../db/conn");
const Categoria = require("./Categoria");
const Conta = require("./Conta");
const Grupo = require("./Grupo");
const TipoPagamento = require("./TipoPagamento");

const Movimentacao = pool.define(
  "tbl_movimentacao2",
  {
    tipo: {
      type: DataTypes.INTEGER,
      required: true,
    },
    descricao: {
      type: DataTypes.STRING,
      required: true,
    },
    data: {
      type: DataTypes.DATE,
      required: true,
      defaultValue: Date.now,
    },
    valor: {
      type: DataTypes.DECIMAL(10, 2),
      required: true,
    },
    observacao: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

Movimentacao.belongsTo(Categoria, {
  foreignKey: "categoria_id",
  as: "Categoria",
});
Movimentacao.belongsTo(Conta, { foreignKey: "conta_id", as: "Conta" });
Movimentacao.belongsTo(Grupo, { foreignKey: "grupo_id", as: "Grupo" });
Movimentacao.belongsTo(TipoPagamento, {
  foreignKey: "tipopagamento_id",
  as: "TipoPagamento",
});

module.exports = Movimentacao;
