import { favoriteBtn } from '../../index.js'

function toggleFavorite(quote, btn, container) {
  quote.isFavorite = !quote.isFavorite
  const { text, author, isFavorite } = quote
  toggleFavoriteBtnIcon(isFavorite, btn)

  if (isFavorite) {
    showFavoriteQoute(text, author, container)
  } else {
    removeFavoriteQuote(text)

    if (container.children.length === 0) {
      container.classList.remove('active')
    }
  }
}

function handleFavorite(isFavorite) {
  showBtn(favoriteBtn)
  toggleFavoriteBtnIcon(isFavorite, favoriteBtn)
}

function toggleFavoriteBtnIcon(isFavorite, btn) {
  btn.classList.toggle('fa', isFavorite)
  btn.classList.toggle('far', !isFavorite)
}

function showBtn(btn) {
  btn.style.display = 'inline-block'
}

function hideBtn(btn) {
  btn.style.display = 'none'
}

function showFavoriteQoute(text, author, container) {
  container.classList.add('active')
  const favoriteCard = document.createElement('div')
  favoriteCard.classList.add('favorite-card')
  favoriteCard.innerHTML = `<p>${text}</p>
    <p class = "author">${author}</p>`
  container.appendChild(favoriteCard)
}

function removeFavoriteQuote(text) {
  const favoriteCards = document.querySelectorAll('.favorite-card')
  favoriteCards.forEach((card) => {
    if (card.textContent.includes(text)) {
      card.remove()
    }
  })
}

export { handleFavorite, toggleFavorite, hideBtn }
