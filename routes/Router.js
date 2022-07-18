const express = require("express");
const router = express();
const routerFinances = express();

router.use("/api/users", require("./UserRoutes"));
routerFinances.use("/api/finances", require("./FinancesRoutes"));

//teste route
routerFinances.get("/", (req, res) => {
  res.send("API Gerenciador Financeiro Working");
});

module.exports = routerFinances;
