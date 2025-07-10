# Quote_Generator
## Date: 10-07-2025
## Objective:
To create a simple quote generator using HTML, CSS, and JavaScript that displays a new random motivational quote each time a button is clicked — similar to daily quote sections on blogs or productivity apps.

## Tasks:

#### 1. Create the HTML Structure:
Add a heading like ```<h1>InspireMe</h1>```

Use a ```<div> or <p>``` to display the quote text.

Use another ```<p> or <span>``` to display the author’s name.

Add a button labeled “Get Quote”.

#### 2. Style the Layout Using CSS:
Center everything on the page using flexbox.

Style the quote box with padding, background color, and rounded borders.

Use a clean font (like Roboto or Open Sans).

Add hover effects for the button.

#### 3. Add JavaScript Functionality:
Store an array of quotes (objects with text and author).

On button click, generate a random index using Math.random().

Display the selected quote and author in the HTML.

Ensure each click updates the quote dynamically using innerText.

#### 4. Enhancements:
Animate the quote change using fade effects.

Add a “Tweet this” button with a share link.
## HTML Code:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>InspireMe - Quote Generator</title>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="container">
    <h1>InspireMe</h1>
    <div id="quote-box">
      <p id="quote">Click the button to get inspired!</p>
      <span id="author">-</span>
    </div>
    <div class="buttons">
      <button onclick="getQuote()">Get Quote</button>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
```
## CSS Code:
```css
body {
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
  background: #f0f4f8;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  text-align: center;
  background: #fff;
  padding: 30px 40px;
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  max-width: 500px;
}

h1 {
  margin-bottom: 20px;
  color: #333;
}

#quote-box {
  transition: opacity 0.5s ease;
}

#quote {
  font-size: 1.4rem;
  margin-bottom: 15px;
  color: #555;
}

#author {
  font-style: italic;
  color: #888;
}

.buttons {
  margin-top: 20px;
}

button {
  padding: 10px 20px;
  margin-right: 10px;
  border: none;
  border-radius: 5px;
  background-color: #3b82f6;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #2563eb;
}
```

## Javascript
```js
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
```

## Output:

## Result:
A simple quote generator using HTML, CSS, and JavaScript that displays a new random motivational quote each time a button is clicked — similar to daily quote sections on blogs or productivity apps is created successfully.
