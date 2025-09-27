import quotes from './src/quotes.js'
import {
  removeFavoriteQuote,
  showFavoriteQoute,
  toggleFavoriteIcon,
} from './src/favoritesHandler.js'

const quoteEl = document.getElementById('quote')
const quoteAuthorEl = document.getElementById('quote-author')
const newQuoteBtn = document.getElementById('newQuote')
const toggleFavoriteBtn = document.getElementById('makeFavoriteBtn')
const favoritesContainer = document.getElementById('favorites-container')

let currentQuoteIndex

function generateRandomQuote() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length)
  const randomQvote = quotes[currentQuoteIndex]
  quoteEl.textContent = randomQvote.text
  quoteAuthorEl.textContent = '— ' + randomQvote.author
  toggleFavoriteIcon(randomQvote.isFavorite, toggleFavoriteBtn)
  toggleFavoriteBtn.style.display = 'inline-block'
}

function toggleFavorite() {
  const currentQuote = quotes[currentQuoteIndex]
  currentQuote.isFavorite = !currentQuote.isFavorite
  toggleFavoriteIcon(currentQuote.isFavorite, toggleFavoriteBtn)

  if (currentQuote.isFavorite) {
    showFavoriteQoute(
      currentQuote.text,
      currentQuote.author,
      favoritesContainer
    )
  } else {
    removeFavoriteQuote(currentQuote.text)
    if (favoritesContainer.children.length === 0) {
      favoritesContainer.classList.remove('active')
    }
  }
}

newQuoteBtn.addEventListener('click', generateRandomQuote)
toggleFavoriteBtn.addEventListener('click', toggleFavorite)
// Показати першу цитату при завантаженні
generateRandomQuote()
