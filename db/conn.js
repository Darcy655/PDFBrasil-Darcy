const { Sequelize } = require("sequelize");

const pool = new Sequelize("financasWebPDFB", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

/*try {
  pool.authenticate();
  console.log("Conectamos com sucesso ao banco!");
} catch (err) {
  console.log("Não foi possível conectar:", error);
}*/

module.exports = pool;

/*const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "ls-8d8d78433fbfa9c1ea7303a7e91c4a5e9e12dccd.chzovf5z7xrx.us-east-1.rds.amazonaws.com",
  //host: "54.200.26.177",
  user: "PDFBrasil",
  password: "PDFBrasil0",
  database: "financasWebPDFB",
});

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "uq-gq-pa",
});

console.log("Conectou ao MySql");

module.exports = pool;*/
