// MAIN.JS FOR FRONT-END INTERACTION

// Buttons
const mexcButton = document.getElementById('mexc-btn');
const lbankButton = document.getElementById('lbank-btn');
const bybitButton = document.getElementById('bybit-btn');
const kucoinButton = document.getElementById('kucoin-btn');
const ourbitButton = document.getElementById('ourbit-btn');
const bitunixButton = document.getElementById('bitunix-btn');

// Spot Futures Buttons 
const spotButton = document.getElementById('spot-btn');
const futuresButton = document.getElementById('futures-btn');

// Inputs
const tickerInput = document.getElementById('ticker-input');
const quantityInput = document.getElementById('quantity-input');
const spreadInput = document.getElementById('spread-input');

// Start Button
const startButton = document.getElementById('start-btn');

// Result DIV for user
const resultDiv = document.getElementById('result-div');

// Spot Button
spotButton.addEventListener('click' , async function () { // ??? need correction
    const arbitrageBtn = spotButton; // ??? need correction
    console.log("Spot Arbitrage"); // ??? need correction
    
});

// Futures Button
spotButton.addEventListener('click' , async function () { // ??? need correction
    const arbitrageBtn = futuresButton; // ??? need correction
    console.log("Futures Arbitrage"); // ??? need correction
    
});

// Tiker Converter for Spot and Futures
startButton.addEventListener('click' , async function() {
    const ticker = tickerInput.value;
    const spread = spreadInput.value;
    const quantity = quantityInput.value;
    const arbitrageType = arbitrageBtn; // ??? need correction

    // Spot Symbols 
    const mexcSpotSymbol = ticker.toUpperCase().replace(' ','').replace('TRON','TRX');
    const lbankSpotSymbol = ticker.toLowerCase().replace('usdt', '_usdt').replace(' ','').replace('tron','trx');
    const bybitSpotSymbol = ticker.toLowerCase(); // need correction
    const kucoinSpotSymbol = ticker.toLowerCase(); // need correction
    const ourbitSpotSymbol = ticker.toLowerCase(); // need correction
    const bitunixSpotSymbol = ticker.toLowerCase(); // need correction

    // Futures Symbols 
    const mexcFuturesSymbol = ticker.toUpperCase().replace(' ','').replace('TRON','TRX').replace('USDT', '_USDT');
    const lbankFuturesSymbol = ticker.toUpperCase().replace(' ','').replace('TRON','TRX').replace('USDT', '_USDT');
    const bybitFuturesSymbol = ticker.toLowerCase(); // need correction
    const kucoinFuturesSymbol = ticker.toLowerCase(); // need correction
    const ourbitFuturesSymbol = ticker.toLowerCase(); // need correction
    const bitunixFuturesSymbol = ticker.toLowerCase(); // need correction


    // Result Log to users DIV 
    resultDiv.innerHTML = 
    '</br> MEXC Spot Ticker: ' + mexcSpotSymbol + 
    '</br> MEXC Futures Ticker: ' + mexcFuturesSymbol +  
    '</br> LBANK Spot Ticker: ' + lbankSpotSymbol + 
    '</br> LBANK Futures Ticker: ' + lbankFuturesSymbol +  
    '</br> BYBIT Spot Ticker: ' + bybitSpotSymbol + 
    '</br> BYBIT Futures Ticker: ' + bybitFuturesSymbol +
    '</br> KUCOIN Spot Ticker: ' + kucoinSpotSymbol + 
    '</br> KUCOIN Futures Ticker: ' + kucoinFuturesSymbol +
    '</br> OURBIT Spot Ticker: ' + ourbitSpotSymbol + 
    '</br> OURBIT Futures Ticker: ' + ourbitFuturesSymbol +
    '</br> BITUNIX Spot Ticker: ' + bitunixSpotSymbol + 
    '</br> BITUNIX Futures Ticker: ' + bitunixFuturesSymbol;

    // Form Data
    const formData = new FormData();

    // Symbols 
    formData.append("mexcSpotSymbol" ,  mexcSpotSymbol);
    formData.append("mexcFuturesSymbol" ,  mexcFuturesSymbol);

    formData.append("lbankSpotSymbol" ,  lbankSpotSymbol);
    formData.append("lbankFuturesSymbol" ,  lbankFuturesSymbol);

    formData.append("bybitSpotSymbol" ,  bybitSpotSymbol);
    formData.append("bybitFuturesSymbol" ,  bybitFuturesSymbol);

    formData.append("kucoinSpotSymbol" ,  kucoinSpotSymbol);
    formData.append("kucoinFuturesSymbol" ,  kucoinFuturesSymbol);

    formData.append("ourbitSpotSymbol" ,  ourbitSpotSymbol);
    formData.append("ourbitFuturesSymbol" ,  ourbitFuturesSymbol);

    formData.append("bitunixSpotSymbol" ,  bitunixSpotSymbol);
    formData.append("bitunixFuturesSymbol" ,  bitunixFuturesSymbol);

    // Inputs
    formData.append("userSpread" , userSpread);
    formData.append("userQuantity" , userQuantity);

    // Buttons
    formData.append("mexcButton" , mexcButton);
    formData.append("lbankButton" , lbankButton);
    formData.append("bybitButton" , bybitButton);
    formData.append("kucoinButton" , kucoinButton);
    formData.append("ourbitButton" , ourbitButton);
    formData.append("bitunixButton" , bitunixButton);

    // Market Buttons (Spot, Futures)
    formData.append("spotButton" , spotButton); // need correction
    formData.append("futuresButton" , futuresButton); // need correction


    try{
        const response = await fetch('/sendingInfo', {
            method: "POST",
            body: formData
        })
    }
    catch(e){
        console.log(e);
    }
});