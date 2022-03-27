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
