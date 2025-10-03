import quotes from './src/data/quotes.js'
import { handleQuote } from './src/handlers/quote.js'
import { toggleFavorite, hideBtn } from './src/handlers/favorites.js'

let currentQuote = null

function setCurrentQuote(quote) {
  currentQuote = quote
}

const quoteFavoriteBtn = document.getElementById('quote-favorite-btn')
const favoritesContainer = document.getElementById('favorites-container')

hideBtn()

quoteFavoriteBtn.addEventListener('click', () =>
  toggleFavorite({
    quote: currentQuote,
    btn: quoteFavoriteBtn,
    container: favoritesContainer,
  })
)

const newQuoteBtn = document.getElementById('newQuote')

newQuoteBtn.addEventListener('click', () =>
  handleQuote(quotes, setCurrentQuote)
)

export { quoteFavoriteBtn }
