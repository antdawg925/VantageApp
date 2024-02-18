// --------- CONTROLLER ---------- is all CRUD
// Making queries to the db
// using the model
// so we import the model
const Stock = require("../models/stock.model")


// -------------------------------------- CREATE -------------------------------------------------
module.exports.createNewStock = (req, res) => {
    console.log(req.body);
    Stock.create(req.body)
        .then(newStock => res.json(newStock))
        // .catch(err => res.json({ message: 'createNewStock func is having issues', error: err }));
        .catch(err => res.status(400).json({ message: 'createNewStock func is having issues', error: err }));
}

// -------------------------------------- FIND ALL ------------------------------------------------- 
module.exports.findAllStocks = (req, res) => {
    Stock.find()
        .then(allStocks => {
            console.log(allStocks);
            res.json(allStocks);
        })
        .catch(err => res.status(400).json({ message: 'findAllStocks func is having issues' }));
}

// ---------------------------------------- DELETE -------------------------------------------------
module.exports.deleteStock = (req, res) => {
    Stock.findOneAndDelete({ _id: req.params.id })
        .then(result => res.json(result))
        .catch(err => res.status(400).json({ message: "deleteAnExistingStock func is having issues", error: err }));
}