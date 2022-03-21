/** Insertion sort */

/**
 * 
 * @description In CLRS, the input array starts with '1', but in programming we start with '0', so in while use '>= 0'
 * @param {*} arr number[]
 * @returns number[]
 */
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const target = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > target) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = target;
  }
  return arr;
}
