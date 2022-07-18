const { DataTypes } = require("sequelize");

const pool = require("../db/conn");

const Conta = pool.define(
  "tbl_conta",
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

module.exports = Conta;
