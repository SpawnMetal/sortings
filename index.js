const bubbleSort = require('./bubble')
const selectionSort = require('./selection')
const insertionSort = require('./insertion')
const mergeSort = require('./merge')
const quickSort = require('./quick')

const obj = [
  {
    f: bubbleSort,
    arr: [1, 3, 7, 5],
  },
  {
    f: selectionSort,
    arr: [7, 2, 9, 1],
  },
  {
    f: insertionSort,
    arr: [2, 4, 9, 10, 3, 5],
  },
  {
    f: mergeSort,
    arr: [5, 1, 9, 10, 7, 1],
  },
  {
    f: quickSort,
    arr: [7, -2, 4, 1, 6, 5, 0, 12, -4, 2],
  },
]

for (let i of obj) {
  const sort = i.f
  let arr = i.arr

  arr = sort(arr)
  console.log(`${sort.name} =`, arr)
}
