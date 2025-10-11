//мутація масиву шляхом видалення об'єкту з специфічним айді
function removeObjectFromArrayByID(arr, id) {
  arr.splice(
    arr.findIndex((el) => el.id === id),
    1
  )
}

export { removeObjectFromArrayByID }
