import 'dotenv/config';
import chalk from chalk;

const ticker = Process.argv[2];

if (!ticker) { 
    console.log("Usage: node app.js [ticker]");
    process.exit();
}

async function analyzerStock (symbol) { 
    try {
        console.log(chalk.blue.bold(`Searching for ${symbol.toUpperCase()}...`));

        // fetching API key
        const response = await fetch(`https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${process.env.STOCK_API_KEY}`);
        const data = await response.json();

        if ( data.length > 0 ) {
            console.log(chalk.yellow("----------------------------------"));
            console.log(`STOCK: ${chalk.white.bold(data[0].symbol)}`);
            console.log(`PRICE: ${priceColor(data[0].price)}`);
            console.log(`CHANGE: ${priceColor(change + "%")}`);
            console.log(chalk.yellow("----------------------------------"));
        } else { 
            console.log("Stock not found.");
        }    
    } catch (error) { 
        console.error("Error fetching data. Check your connection or API key.")
    }
}

analyzerStock(ticker);