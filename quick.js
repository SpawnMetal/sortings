const {Compare, defaultCompare, swap} = require('../lib/lib')

/**
 * Быстрая сортировка
 * Быстрая сортировка это один из наиболее часто используемых алгоритмов сортировки
 * Алгоритм:
 * 1. Выбираем значение в массиве, которое назовем опорным. Обычно это значение в середине массива.
 * 2. Осуществляем операцию распределения, в результате которой значения меньше опорного смещаются влево от опорного, а большие — вправо от него.
 * 3. Повторяем первые два шага для каждого подмассива (левого и правого), пока массивы не будут полностью отсортированы.
 * Временная сложность в наилучшем случае — O(N), в наихудшем — O(N^2)
 */
const quickSort = arr => {
  if (arr.length < 2) return arr
  else {
    // Опорная точка для деления массива, выбирается случайно
    const pivotPosition = Math.floor(Math.random() * arr.length)
    const pivot = arr[pivotPosition]
    // Значения меньшие, либо равные опорному попадают в новый массив less
    const less = arr.filter((value, index) => {
      const isPivot = index === pivotPosition
      return !isPivot && value <= pivot
    })
    const more = arr.filter(value => value > pivot) // Значения, которые больше опорного попадают в новый массив less

    return [...quickSort(less), pivot, ...quickSort(more)]
  }
}

module.exports = quickSort
