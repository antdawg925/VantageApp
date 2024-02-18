// import controller to use model
const StockController = require("../controllers/stock.controller")
console.log(StockController);

module.exports = (app) => {
    app.post("/api/post", StockController.createNewStock);
    app.get("/api/getAll", StockController.findAllStocks);
    app.delete("/api/delete/:id", StockController.deleteStock);
    // app.get("/api/getOne/:id", StockController.findOneStock);
    // app.put("/api/update/:Id", StockController.updateExistingStock)
}