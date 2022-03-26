/** Insertion sort */

/**
 *
 * @description In CLRS, the input array starts with '1', but in programming we start with '0', so in while use '>= 0'
 * @param {*} arr number[]
 * @returns number[]
 * @todo 
 * 1. need to use temporary array instead of 'input array'?
 * 2. time complexity
 */
function insertionSort(arr) {               // cost   times
  for (let i = 1; i < arr.length; i++) {    //  c1      n
    const target = arr[i];                  //  c2      n-1
    let j = i - 1;                          //  c3      n-1
    while (j >= 0 && arr[j] > target) {     //  c5      ∑(j=2, n)tj
      arr[j + 1] = arr[j];                  //  c6      ∑(j=2, n)(tj-1)
      j--;                                  //  c7      ∑(j=2, n)(tj-1)
    }
    arr[j + 1] = target;                    //  c8      n-1
  }
  return arr;
}
