import { handleFavorite } from './favorites.js'
import { generateRandomInt } from '../utils.js'

function handleQuote(quotes, setCurrentQuote) {
  const randomQuote = choseRandomQuote(quotes)
  setCurrentQuote(randomQuote)
  displayQuote(randomQuote)
}

function displayQuote(quote) {
  const { text, author, isFavorite, id } = quote
  const quoteEl = document.getElementById('quote')
  const quoteTextElement = document.getElementById('quote-text')
  const quoteAuthorEl = document.getElementById('quote-author')
  quoteEl.dataset.currentQuoteId = id
  quoteTextElement.textContent = text
  quoteAuthorEl.textContent = '— ' + author
  handleFavorite(isFavorite)
}

function choseRandomQuote(quotes) {
  const randomIndex = generateRandomInt(quotes.length)
  const randomQuote = quotes[randomIndex]
  return randomQuote
}

export { handleQuote }
