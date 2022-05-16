const {Compare, defaultCompare, swap} = require('../lib/lib')

/**
 * Сортировка пузырьком
 * Алгоритм: Сравнивает два соседних значения и меняет их местами, если первое значение больше второго
 * Временная сложность в наилучшем случае — O(N), в наихудшем — O(N^2)
 */
function bubbleSort(arr, compare = defaultCompare) {
  const {length} = arr

  for (i = 0; i < length; i++)
    for (j = 0; j < length - 1 - i; j++)
      if (compare(arr[j], arr[j + 1]) === Compare.BIGGER_THAN)
        swap(arr, j, j + 1)

  return arr
}

module.exports = bubbleSort
