const {Compare, defaultCompare, swap} = require('../lib/lib')

/**
 * Сортировка выбором
 * Алгоритм: В основе сортировки выбором лежит следующий подход: мы находим минимальное значение в структуре данных и помещаем его на первую позицию, затем находим второе минимальное значение и помещаем его на вторую позицию и так далее
 * Временная сложность в наилучшем и наихудшем случае — O(N^2)
 */
function selectionSort(arr, compare = defaultCompare) {
  const {length} = arr
  let minIndex

  for (let i = 0; i < length - 1; i++) {
    minIndex = i

    for (let j = i; j < length; j++)
      if (compare(arr[minIndex], arr[j]) === Compare.BIGGER_THAN) minIndex = j

    if (i !== minIndex) swap(arr, i, minIndex)
  }

  return arr
}

module.exports = selectionSort
