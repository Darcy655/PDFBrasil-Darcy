const { DataTypes } = require("sequelize");

const pool = require("../db/conn");

const TipoPagamento = pool.define(
  "tbl_tipopagamento",
  {
    descricao: {
      type: DataTypes.STRING,
      required: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = TipoPagamento;
