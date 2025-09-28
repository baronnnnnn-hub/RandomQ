import { handleQuote } from './src/handlers/quote.js'

const newQuoteBtn = document.getElementById('newQuote')

newQuoteBtn.addEventListener('click', handleQuote)
