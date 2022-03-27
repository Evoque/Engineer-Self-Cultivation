/** Insertion sort */

/**
 * 普通插入排序 O(n2)
 * @param {*} arr number[]
 * @returns number[]
 * @description In CLRS, the input array starts with '1', but in programming we start with '0', so in while use '>= 0'
 * @todo
 * 1. need to use temporary array instead of 'input array'?
 * 2. time complexity
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
/**
 * 用Binary Search辅助插入排序, O(n2)
 * @param {*} arr
 * Think: why the time is still O(n2);
 *  -> After we find the 'loc'(O(lgn)), but the movements takes O(n) time, 
 * So, we can't improve the overall worst-case running time of insertion sort to O(nlgn)
 */
function insertionSortWithBinarySearch(arr) {
  for (let i = 1; i < arr.length; i++) {
    const target = arr[i];

    // 得到插入位置
    let low = 0,
      high = i - 1,
      loc = -1;

    while (low <= high && loc === -1) {
      if (arr[low] > target) loc = low;
      else if (arr[high] < target) loc = high + 1;
      else {
        const mid = parseInt((low + high) / 2);
        if (target >= arr[mid] && target < arr[mid + 1]) loc = mid + 1;
        else if (target < arr[mid]) high = mid - 1;
        else low = mid + 1;
      }
    }
    // 插入(平移)
    if (loc !== i) {
      for (let x = i - 1; x >= loc; x--) {
        arr[x + 1] = arr[x];
      }

      arr[loc] = target;
    }
  }
  return arr;
}

console.log("insertion sort11");
var arr1 = [
  34, 56, 467, 1, 1, 1, 1, 1, 1, 43, 78, 345, 7, 3, 2, 2134, 2, 25, 235, 1, 43,
  56, 7456, 2, 23, 4546,
];
// var arr1 = [34, 56, 467, 1, 43];
// console.log(arr1);
console.log(insertionSortWithBinarySearch(arr1));
