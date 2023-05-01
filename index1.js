
let currentQuoteIndex = 0;
async function fetchQuote(){
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json;
    return data;
}
async function nextQuote(){
    const quoteData = await fetchQuote();
    currentQuoteIndex++;
    if (currentQuoteIndex >= quoteData.length){
        currentQuoteIndex = 0;
    }
    const quoteElement = document.getElementById('quote');
    quoteElement.textContent = quoteData[currentQuoteIndex].text;
}
const nextButton = document.getElementById('next-button');
nextButton.addEventListener('click',newQuote);
nextQuote();