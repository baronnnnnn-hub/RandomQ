import { handleFavorite } from './favorites.js'
import { generateRandomInt } from '../utils/math.js'

function handleQuote(quotes, favoriteQuotes, setCurrentQuote) {
  const randomQuote = choseRandomQuote(quotes)
  //перевірка чи є айді цитати серед айді улюблених цитат
  if (favoriteQuotes.find((quote) => quote.id === randomQuote.id)) {
    randomQuote.isFavorite = true
  }

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

function findQuoteById(quotes, id) {
  return quotes.find((quote) => quote.id === id)
}

export { handleQuote, displayQuote, findQuoteById }
