# 📈 Terminal Stock Analyzer

A professional Node.js terminal application designed for traders to perform instant stock analysis. This tool fetches real-time financial data, provides color-coded market insights, and follows modern development best practices!!.

## 🚀 Features
* **Real-Time Data:** Fetches live prices using the Financial Modeling Prep API.
* **Visual Insights:** Uses **Chalk** for instant Green/Red visual cues on market changes.
* **Secure Architecture:** Implements `.env` support to keep API keys private and secure.
* **Modern Stack:** Built with ES Modules (`import/export`) and automated testing.

## 🛠️ Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/hamidrezaghavami/TerminalStockAnalyzer.git](https://github.com/hamidrezaghavami/TerminalStockAnalyzer.git)
   cd TerminalStockAnalyzer

### Install Independencies:
npm install

### Configure Environment:
API Key: Copy `.env.example` to a new file named `.env` and paste your FMP API key there.

Run: node app.js `[Stock symbol based on FMP website]`

### 💻 Usage: 
Run the analyzer by providing a stock ticker (e.g., AAPL, TSLA, BTC) as a command-line argument:
node app.js AAPL
Note: You can also use npm start AAPL if you have configured your package.json scripts.

### 🧪 Testing:
This project uses Jest for automated logic verification. To run the test suite:
npm test

### 📄 License:
This project is licensed under the MIT License.
---

**Next Step:** Now that your README is ready, would you like me to show you how to add a "Table" view so you can compare multiple stocks at the same time?
