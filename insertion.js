const {Compare, defaultCompare, swap} = require('../lib/lib')

/**
 * Сортировка вставками
 * Алгоритм сортировки вставками строит финальный отсортированный массив по одному значению за раз. Процесс выглядит следующим образом:
 * Предполагаем, что первый элемент уже отсортирован.
 * Сравниваем первый элемент со вторым: должно ли второе значение остаться на месте или же оно должно быть вставлено перед первым значением?
 * Далее аналогичное сравнение делается для третьего значения: должно ли оно быть вставлено на первую, вторую или третью позицию? И так далее.
 * Временная сложность в наилучшем случае — O(N), в наихудшем — O(N^2)
 */

function insertionSort(arr, compare = defaultCompare) {
  const {length} = arr
  let temp

  for (let i = 1; i < length; i++) {
    let j = i
    temp = arr[i]

    while (j > 0 && compare(arr[j - 1], temp) === Compare.BIGGER_THAN) {
      arr[j] = arr[j - 1]
      j--
    }

    arr[j] = temp
  }

  return arr
}

module.exports = insertionSort
