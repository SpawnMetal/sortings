const {Compare, defaultCompare, swap} = require('../lib/lib')

/**
 * Сортировка слиянием
 * Алгоритм сортировки слиянием это один из алгоритмов «разделяй и властвуй»). Другими словами, он делит исходный массив на более мелкие массивы, пока каждый маленький массив не будет содержать всего одну позицию, а затем сливает маленькие массивы в более крупный и отсортированный.
 * Временная сложность в наилучшем и наихудшем случае — O(N Log N)
 */

function mergeSort(arr, compare = defaultCompare) {
  if (arr.length > 1) {
    const {length} = arr
    const middle = Math.floor(length / 2)
    const left = mergeSort(arr.slice(0, middle), compare)
    const right = mergeSort(arr.slice(middle, length), compare)
    arr = merge(left, right, compare)
  }

  return arr
}

function merge(left, right, compare) {
  let i = 0
  let j = 0
  const result = []

  while (i < left.length && j < right.length) {
    result.push(
      compare(left[i], right[j]) === Compare.LESS_THAN ? left[i++] : right[j++]
    )
  }

  return result.concat(i < left.length ? left.slice(i) : right.slice(j))
}

module.exports = mergeSort
