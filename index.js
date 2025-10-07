import quotes from './src/data/quotes.js'
import {
  handleQuote,
  displayQuote,
  findQuoteById,
} from './src/handlers/quote.js'
import {
  toggleFavorite,
  hideBtn,
  showFavoriteQuote,
} from './src/handlers/favorites.js'
import {
  localStorageSetItem,
  localStorageGetItem,
} from './src/utils/localStorage.js'

const CURRENT_QUOTE_KEY = 'currentQuote'
const FAVORITE_QUOTE_KEY = 'favoriteQuotes'
let currentQuote = null
const favoriteQuotes = []

function setCurrentQuote(quote, shouldToggleIsFavorite = false) {
  if (shouldToggleIsFavorite) {
    quote.isFavorite = !quote.isFavorite
    //change local storage favorite quotes
    if (quote.isFavorite) {
      favoriteQuotes.push({ ...quote })
    } else {
      const index = favoriteQuotes.findIndex(
        (favoriteQuote) => favoriteQuote.id === quote.id
      )
      if (index !== -1) {
        favoriteQuotes.splice(index, 1)
      }
    }
    localStorageSetItem(FAVORITE_QUOTE_KEY, favoriteQuotes)
  }
  currentQuote = quote
  localStorageSetItem(CURRENT_QUOTE_KEY, quote)
}

const quoteFavoriteBtn = document.getElementById('quote-favorite-btn')
const favoritesContainer = document.getElementById('favorites-container')

hideBtn()

quoteFavoriteBtn.addEventListener('click', () =>
  toggleFavorite(
    currentQuote,
    setCurrentQuote,
    quoteFavoriteBtn,
    favoritesContainer
  )
)

const newQuoteBtn = document.getElementById('newQuote')

newQuoteBtn.addEventListener('click', () =>
  handleQuote(quotes, favoriteQuotes, setCurrentQuote)
)

function init() {
  const currentQuoteFromStorage = localStorageGetItem(CURRENT_QUOTE_KEY)
  if (currentQuoteFromStorage) {
    displayQuote(currentQuoteFromStorage)
    const quote = findQuoteById(quotes, currentQuoteFromStorage.id)
    quote.isFavorite = currentQuoteFromStorage.isFavorite
    currentQuote = quote
  }
  const favoriteQuotesFromStorage = localStorageGetItem(FAVORITE_QUOTE_KEY)
  if (favoriteQuotesFromStorage) {
    favoriteQuotesFromStorage.forEach((quote) => {
      favoriteQuotes.push(quote)
      showFavoriteQuote(quote, setCurrentQuote, favoritesContainer)
    })
  }
}

window.addEventListener('load', init)

export { quoteFavoriteBtn }
