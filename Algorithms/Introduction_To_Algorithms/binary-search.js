/**
 * @param {*} arr assumes that the input args is sorted
 * @param {*} v   need to find the index of v in arr
 * @deprecated
 */
function binarySearchIterative(arr, v) {
  const arrLen = arr.length;
  if (arrLen === 0 || v < arr[0] || arr[arrLen - 1] < v) return null;

  let startIdx = 0,
    endIdx = arrLen - 1;
  let targetIdx = -1;
  while (endIdx - startIdx > 1 && targetIdx === -1) {
    const midIdx = startIdx + parseInt((endIdx - startIdx) / 2);
    if (arr[midIdx] === v) targetIdx = midIdx;
    // <- search left
    else if (arr[midIdx] > v) endIdx = midIdx - 1;
    // -> search right
    else startIdx = midIdx + 1;
  }

  if (targetIdx !== -1) return targetIdx;
  if (arr[startIdx] === v) return startIdx;
  if (arr[endIdx] === v) return endIdx;

  return null;
}

/**
 * Iterative Binary Search
 * @param {*} arr array
 * @param {*} v   the target value
 * @description Standard answers
 * Improve:
 *   1. low & high 相对收敛，while里只需判断low & high的有效性(low <= high)
 *   2. 取index的中值用 (low + high)/2
 *   3. 基于1，一定会涵盖所有的区间，包括特殊区间(两个值)[low, high], (一个值)[low/high]
 */
function iterativeBinarySearch(arr, v) {
  let low = 0;
  let high = arr.length - 1;

  if (v < arr[low] || arr[high] < v) return null;
  if (arr[low] === v) return low;
  if (arr[high] === v) return high;

  while (low <= high) {
    const mid = parseInt((low + high) / 2);
    if (arr[mid] === v) return mid;
    else if (v > arr[mid]) low = mid + 1;
    else high = mid - 1;
  }
  return null;
}
 
/**
 * Binary Search Using Recursive
 * @param {*} arr 
 * @param {*} v 
 * @param {*} low 
 * @param {*} high 
 * @returns number|null
 * @description 
 * Improve: 
 * 1. arr一直往下传递，不用考虑拆分成目标字数组；如要拆分子数组：
 *    1.1 就不用low/high, 需记录一个baseIndex
 *    1.2 每次都需要创建一个新数组(Arr/2), 空间利用上不见得比arr直接传更有优势
 *    1.3 arr本质是引用类型，所以对于arr一直下传造成空间使用过度的忧虑并不存在
 */
function recursiveBinarySearch(arr, v, low, high) {
  if (low > high) return null;
  const mid = parseInt((low + high) / 2);
  if (arr[mid] === v) return v;
  else if (v > arr[mid]) recursiveBinarySearch(A, v, mid + 1, high);
  else recursiveBinarySearch(A, v, low, mid - 1);
}
