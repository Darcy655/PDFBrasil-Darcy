const { DataTypes } = require("sequelize");

const pool = require("../db/conn");

const Categoria = pool.define(
  "tbl_categoria",
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

module.exports = Categoria;
