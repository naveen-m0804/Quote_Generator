const quotes = [
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
  { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
  { text: "I am not a product of my circumstances. I am a product of my decisions.", author: "Stephen Covey" },
  { text: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett" }
];

function getQuote() {
  const quoteBox = document.getElementById('quote-box');
  const quoteEl = document.getElementById('quote');
  const authorEl = document.getElementById('author');
  const tweetBtn = document.getElementById('tweet');

  quoteBox.style.opacity = 0;

  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selected = quotes[randomIndex];

    quoteEl.innerText = `"${selected.text}"`;
    authorEl.innerText = `– ${selected.author}`;
    //tweetBtn.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent('"' + selected.text + '" - ' + selected.author)}`;

    quoteBox.style.opacity = 1;
  }, 300);
}
