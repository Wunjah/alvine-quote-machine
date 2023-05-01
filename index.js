function getQuote(){
    fetch('https://api.quotable.io/random')
    .then(response=> response.json())
    .then(data => {
        const quote = data.content;
        const author = data.author;
        const quoteBox = document.getElementById('quote-box');
        quoteBox.innerHTML = `
        <p>${quote}</p>
        <p>- ${author}</p>
        `;
    })
    .catch(error => console.log(error));
}
document .addEventListener('DOMContentLoaded', () => {
    getQuote();
});
function nextQuote(){
    getQuote();
}


const newQuoteButton = document.querySelector('#new-quote');
newQuoteButton.addEventListener('click', nextQuote);