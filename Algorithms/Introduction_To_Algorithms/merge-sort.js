/**
 * Merge Sort
 */

/**
 * Merges two subarrays of arr[]
 * 1. create two temp arrays - copy from origin array;
 * 2. copy the items in temp arrays to origin array;
 */
function merge(arr, l, m, r) {
  // temp arrays
  const lLen = m - l + 1;
  const rLen = r - m;
  const lArr = new Array(lLen);
  const rArr = new Array(rLen);
  for (let i = 0; i < lLen; i++) {
    lArr[i] = arr[l + i];
  }
  for (let j = 0; j < rLen; j++) {
    rArr[j] = arr[m + 1 + j];
  }

  // Merge
  let lIdx = 0,
    rIdx = 0,
    vIdx = l;

  while (lIdx < lLen && rIdx < rLen) {
    if (lArr[lIdx] <= rArr[rIdx]) {
      arr[vIdx] = lArr[lIdx];
      lIdx++;
    } else {
      arr[vIdx] = rArr[rIdx];
      rIdx++;
    }
    vIdx++;
  }

  while (lIdx < lLen) {
    arr[vIdx] = lArr[lIdx];
    lIdx++;
    vIdx++;
  }
  while (rIdx < rLen) {
    arr[vIdx] = rArr[rIdx];
    rIdx++;
    vIdx++;
  }
}

function mergeSort(arr, l, r) {
  // Divide
  if (l >= r) return;
  const m = l + parseInt((r - l) / 2);

  // Conquer
  mergeSort(arr, l, m);
  mergeSort(arr, m + 1, r);

  // Combine
  merge(arr, l, m, r);
}
