const loadQuote = () => {
    // console.log('quotes loading');
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote(data))
}
const displayQuote = quote => {
    // console.log(quote);
    const blockQuote = document.getElementById('quote');
    blockQuote.innerHTML = quote.quote;
}
loadQuote();