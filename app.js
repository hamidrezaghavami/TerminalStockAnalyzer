import 'dotenv/config';
import chalk from 'chalk';

async function analyzerStock (symbol) { 
    try {
        
        console.log(chalk.blue.bold(`Searching for ${symbol.toUpperCase()}...`));
        
        // fetching API key
        const response = await fetch(`https://financialmodelingprep.com/api/v3/quote/${symbol.toUpperCase()}?apikey=${process.env.STOCK_API_KEY}`);
        const data = await response.json();
        
        if ( data && data.length > 0 ) {

            const change = data[0].changesPercentage;
            const priceColor = change >= 0 ? chalk.green : chalk.red;

            console.log(chalk.yellow("----------------------------------"));
            console.log(`STOCK: ${chalk.white.bold(data[0].symbol)}`);
            console.log(`PRICE: ${priceColor(data[0].price)}`);
            console.log(`CHANGE: ${priceColor(change + "%")}`);
            console.log(chalk.yellow("----------------------------------"));
        } else { 
            console.log(chalk.red("Stock not found."));
        }    
    } catch (error) { 
        console.error(chalk.red("Error fetching data. Check your connection or API key."))
    }
}

export { analyzerStock };

if (process.argv[1] === import.meta.filename) {
    const ticker = process.argv[2];
    
    if (!ticker) { 
        console.log("Usage: node app.js [ticker]");
        process.exit();
    }
    analyzerStock(ticker);
}