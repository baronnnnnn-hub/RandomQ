import quotes from './quotes.js'

const quoteEl = document.getElementById('quote')
const quoteAuthorEl = document.getElementById('quote-author')
const newQuoteBtn = document.getElementById('newQuote')

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length)
  const randomQvote = quotes[randomIndex]
  quoteEl.textContent = randomQvote.text
  quoteAuthorEl.textContent = '— ' + randomQvote.author
}

newQuoteBtn.addEventListener('click', generateRandomQuote)

// Показати першу цитату при завантаженні
// showQuote()
