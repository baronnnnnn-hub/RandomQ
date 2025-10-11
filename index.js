import { displayCurrentQuote } from './src/handlers/currentQuote.js'
import {
  hideBtn,
  showBtn,
  showFavoriteQuote,
  toggleFavoriteCard,
  removeFavoriteCard,
} from './src/handlers/favorites.js'
import {
  localStorageSetItem,
  localStorageGetItem,
} from './src/utils/localStorage.js'
import { removeObjectFromArrayByID } from './src/utils/array.js'
import { getRandomQuote } from './src/handlers/randomQuote.js'

const CURRENT_QUOTE_KEY = 'currentQuote'
const FAVORITE_QUOTE_KEY = 'favoriteQuotes'

const randomQuoteBtn = document.getElementById('random-quote-btn')
const quoteFavoriteBtn = document.getElementById('quote-favorite-btn')
const favoritesContainer = document.getElementById('favorites-container')

let currentQuote = null
const favoriteQuotes = []

function removeFavoriteQuote(id, container) {
  //Видалення улюбленої цитати
  //видалення улюбленої карточки поточної цитати при натисканні на видалити на улюбленій карточці
  if (id === currentQuote.id) {
    toggleCurrentQuote()
  } else {
    //видалення  при натисканні на видалити на улюбленій карточці, з улюблених
    removeObjectFromArrayByID(favoriteQuotes, id)
    removeFavoriteCard(id) // видалення із масиву улюблених цитат
    localStorageSetItem(FAVORITE_QUOTE_KEY, favoriteQuotes)
  }
  //Видалення контейнера для улюблених цитат коли їх немає
  if (container.children.length === 0) {
    container.classList.remove('active')
    // const currentQuote = document.querySelector('[data-current-quote-id]')
    // const currentQuoteId = currentQuote.dataset.currentQuoteId
  }
}

function toggleCurrentQuote() {
  //обновляємо текущу цитату
  //синхронізуємо стан застосунку і змінюємо стан isFavorite
  currentQuote.isFavorite = !currentQuote.isFavorite
  //змінюємо відображення іконки
  showBtn(currentQuote.isFavorite)
  // зберігаємо поточну цитату в Lacal Storage
  localStorageSetItem(CURRENT_QUOTE_KEY, currentQuote)

  //коли цитата вибрана як улюблена, обновляємо
  //синхронізація та оновлення масиву улюблені цитати
  if (currentQuote.isFavorite) {
    favoriteQuotes.push({ ...currentQuote })
  } else {
    removeObjectFromArrayByID(favoriteQuotes, currentQuote.id)
  }
  //обновляэмо веб відображення показ або видалення улюбленої карточки
  toggleFavoriteCard(currentQuote, favoritesContainer)
  //зберігання улюблених цитат до local storage
  localStorageSetItem(FAVORITE_QUOTE_KEY, favoriteQuotes)
}

function setCurrentQuote(quote) {
  // записуємо нову цитату в додаток та записуємо копію цитати в currentQuote
  currentQuote = { ...quote }
  //перевірка чи є айді цитати серед айді улюблених цитат та задаємо isFavorite
  currentQuote.isFavorite = !!favoriteQuotes.find(
    (favoriteQuote) => favoriteQuote.id === currentQuote.id
  )
  // відображеємо поточну цитату в UI
  displayCurrentQuote(currentQuote)
  // відображення іконки улюблене і вибір стану її
  showBtn(currentQuote.isFavorite)
  // зберігаємо поточну цитату в Lacal Storage
  localStorageSetItem(CURRENT_QUOTE_KEY, currentQuote)
}

// скриваємо кнопну при засускі застосунку
hideBtn()

quoteFavoriteBtn.addEventListener('click', toggleCurrentQuote)

randomQuoteBtn.addEventListener('click', () =>
  setCurrentQuote(getRandomQuote())
)

function init() {
  const favoriteQuotesFromStorage = localStorageGetItem(FAVORITE_QUOTE_KEY)
  if (favoriteQuotesFromStorage) {
    favoriteQuotesFromStorage.forEach((quote) => {
      favoriteQuotes.push(quote)
      showFavoriteQuote(quote, favoritesContainer)
    })
  }
  const currentQuoteFromStorage = localStorageGetItem(CURRENT_QUOTE_KEY)
  if (currentQuoteFromStorage) {
    setCurrentQuote(currentQuoteFromStorage)
  }
}

window.addEventListener('load', init)

export { quoteFavoriteBtn, removeFavoriteQuote }
