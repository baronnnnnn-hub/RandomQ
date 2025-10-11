function displayCurrentQuote(quote) {
  const { text, author, isFavorite, id } = quote
  const quoteEl = document.getElementById('quote')
  const quoteTextElement = document.getElementById('quote-text')
  const quoteAuthorEl = document.getElementById('quote-author')
  quoteEl.dataset.currentQuoteId = id
  quoteTextElement.textContent = text
  quoteAuthorEl.textContent = '— ' + author
}

export { displayCurrentQuote }
