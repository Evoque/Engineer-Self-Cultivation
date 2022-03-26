/**
 *
 * @param {*} arr assumes that the input args is sorted
 * @param {*} v   need to find the index of v in arr
 */
function binarySearchIterative(arr, v) {
  const arrLen = arr.length;
  if (arrLen === 0 || v < arr[0] || arr[arrLen - 1] < v) return null;

  let startIdx = 0,
    endIdx = arrLen - 1;
  let targetIdx = -1;
  while (endIdx - startIdx > 1 && targetIdx === -1) {
    const midIdx = startIdx + parseInt((endIdx - startIdx) / 2);
    const tempItem = arr[midIdx];
    if (tempItem === v) targetIdx = midIdx;
    // <- search left
    else if (tempItem > v) endIdx = midIdx - 1;
    // -> search right
    else startIdx = midIdx + 1;
  }

  if (targetIdx !== -1) return targetIdx;
  if (arr[startIdx] === v) return startIdx;
  if (arr[endIdx] === v) return endIdx;

  return null;
}
