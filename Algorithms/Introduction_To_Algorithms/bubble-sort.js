/**
 * Bubble Sort
 *
 * Input: [5, 1, 4, 2, 8, 9]
 */

/**
 * default to ASC
 */
function bubbleSortASC(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

/**
 * Sum: `i` 表示临界值，遍历剩余的元素，把最大(最小)的移动到`i`处(通过swap)
 */