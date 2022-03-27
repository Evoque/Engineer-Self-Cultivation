/**
 * 2.3-7
 *    Describe a O(nlgn)-tiem algorithm that, given a set S of n integers and another integer x, determins whether
 * or not there exist two elements in S whose sum is exactly x.
 */

function findSumItems(arr, x) {
  // 1. 先对arr进行 Merge-Sort 得到arr-sorted nlg(n)
  // 2. 遍历arr-sorted: 得到item1, 然后用binary search搜索item2  nlg(n)
  // sum: 总的时间复杂度就是  2nlg(n)
  // 遍历找到第一个小于x的item
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= x) {
      const left = x - arr[i];
      //Binary Search是否存在等于left的数
      let low = 0,
        high = arr.length - 1;
      while (low <= high) {
        const mid = parseInt((low + high) / 2);
        if (mid !== i && arr[mid] === left) return [i, arr[i], mid, arr[mid]];
        else if (arr[mid] < left) low = mid + 1;
        else high = mid - 1;
      }
    }
  }
}

// 查询时除了用二分查找， 也可以用 `two-way search`, 伪代码如下
/**
 * Merge-Sort(S, 1, S.length)
 * left = 1
 * right = S.length
 * while(left < right)
 *    if S[left] + s[right] == x  return true;
 *    else if S[left] + S[right] < x  left += 1;
 *    else right -= 1;
 */

 