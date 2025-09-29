import quotes from './src/data/quotes.js'
import { handleQuote } from './src/handlers/quote.js'
import { toggleFavorite, hideBtn } from './src/handlers/favorites.js'

let currentQuote = null

function setCurrentQuote(quote) {
  currentQuote = quote
}

const favoriteBtn = document.getElementById('favoriteBtn')
const favoritesContainer = document.getElementById('favorites-container')

hideBtn(favoriteBtn)

favoriteBtn.addEventListener('click', () =>
  toggleFavorite(currentQuote, favoriteBtn, favoritesContainer)
)

const newQuoteBtn = document.getElementById('newQuote')

newQuoteBtn.addEventListener('click', () =>
  handleQuote(quotes, setCurrentQuote)
)

export { favoriteBtn }
