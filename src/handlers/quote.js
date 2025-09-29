import { handleFavorite } from './favorites.js'
import { generateRandomInt } from '../utils.js'

function handleQuote(quotes, setCurrentQuote) {
  const randomQuote = choseRandomQuote(quotes)
  setCurrentQuote(randomQuote)
  displayQuote(randomQuote)
}

function displayQuote(quote) {
  const { text, author, isFavorite } = quote
  const quoteEl = document.getElementById('quote')
  const quoteAuthorEl = document.getElementById('quote-author')
  quoteEl.textContent = text
  quoteAuthorEl.textContent = '— ' + author
  handleFavorite(isFavorite)
}

function choseRandomQuote(quotes) {
  const randomIndex = generateRandomInt(quotes.length)
  const randomQuote = quotes[randomIndex]
  return randomQuote
}

export { handleQuote }
