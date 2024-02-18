const mongoose = require('mongoose');

// Define the schema for the Stock model
const StockSchema = new mongoose.Schema({
    symbol: {
        type: String,
        required: true,
        unique: true,
    },
    sector: String,
    outstandingShares: String,
    float: String,
    industry: String,
    profitMargin: String,
    targetPrice: String,
    yearHigh: String,
    yearLow: String,
    operating: String,
    ROA: String,
    ROE: String,
    EPS: String,
    revenueTTM: String,
    revenue: String,
    priceToEarning: String,
    priceToSales: String,
    priceToBook: String,
    enterpriseValue: String,
    MA200: String,
    MA50: String,
}, { timestamps: true });

const Stock = mongoose.model('Stock', StockSchema);

// export the model
module.exports = Stock;

