const { DataTypes } = require("sequelize");

const pool = require("../db/conn");

const Grupo = pool.define(
  "tbl_grupo",
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

module.exports = Grupo;
