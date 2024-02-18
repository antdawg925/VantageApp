const express = require('express');
const cors = require('cors');
const puppeteer = require('puppeteer');

const app = express();
const PORT = 8000;
const DB_NAME = 'watchlist_db';

// Middleware
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

// Routes
const routesFunction = require('./routes/stock.routes');
routesFunction(app);

app.get('/scrape', async (req, res) => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        // Navigate to a website
        await page.goto('https://finance.yahoo.com/quote/ALVO/key-statistics?p=ALVO');

        // Wait for some element to ensure the page is fully loaded
        await page.waitForSelector('#Col1-0-KeyStatistics-Proxy');

        // Dynamic part of the selector
        const dynamicSelector = '#Col1-0-KeyStatistics-Proxy > section > div.Mstart\(a\).Mend\(a\) > div.Fl\(end\).W\(50\%\).smartphone_W\(100\%\) > div > div:nth-child(2) > div > div > table > tbody > tr:nth-child(5) > td.Fw\(500\).Ta\(end\).Pstart\(10px\).Miw\(60px\)'; // Replace this with the dynamic part

        // Perform scraping tasks
        const float = await page.$eval(dynamicSelector, (element) =>
            element.textContent.trim()
        );

        // Close the browser
        await browser.close();

        // Send the scraped data as a response
        res.json({
            float,
        });
    } catch (error) {
        console.error('Error during scraping:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// MongoDB setup
const exportedDBFunction = require('./config/mongoose.config');
exportedDBFunction(DB_NAME);

// Start the server
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
