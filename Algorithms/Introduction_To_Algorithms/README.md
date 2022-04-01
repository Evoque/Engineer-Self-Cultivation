
# 算法导论

> 是否具有算法知识与技术的坚实基础是区分真正熟练的程序员与初学者的一个特征。

- 官网[https://mitpress.mit.edu/books/introduction-algorithms-third-edition](https://mitpress.mit.edu/books/introduction-algorithms-third-edition): 部分练习题和思考题的答案
- 习题答案解析：[https://atekihcan.github.io/CLRS/](https://atekihcan.github.io/CLRS/)
- Markdown中的数学公式：[https://zhuanlan.zhihu.com/p/95886235](https://zhuanlan.zhihu.com/p/95886235)
- Brilliant: [https://brilliant.org/](https://brilliant.org/) Brilliant replaces lecture videos with hands-on, interactive problem solving. It's a better (and more fun) way to learn.



## Unresolved
- [x] 1.1-1 Finding Convex Hull: Finding shortest path between two points with some solid obstacles between them
    - 地图(省份)面积: 不规则多边形的面积?
    - Solving a game maze
    - self-driving cars
    
- [x] 1.1-5 Come up with a real-world problem in which only the best solution will do. Then come up with one in which a solution that is "approximately" the best is good enough.
> Algorithms都是有前置条件的，如输入(数据量)的大小、时间要求、空间要求等等，如果条件允许，很多时候则不必选用最优解

- [x] 1.2-2 插入排序与归并排序的时间复杂度分析: $ 8n^2 < 64nlgn $ 时，n有哪些取值
    $$
    8n^2 < 64nlgn => 2^{\frac{n}{8}}<n
    $$
    
    > 解得 1 < n < 44, n取整

- [ ] 思考题
  1. Finding N for nlgn and n! are not so obvious. 
     - [ ] Use Lambert W functions
     - Python code
     ```python
     
     from math import *
     
     n = 1
     while n * log(n, 2) < 1000000:
       n += 1
       
     print("Minium value of n (nlgn) : ", n - 1)
     
     n1 = 1
     while factorial(n) < 1000000:
       n1 += 1
       
     print("Minium value of n (n!) : ", n - 1)
     
     ```
  - [x] 计算完1秒钟后，后面的的时间不能直接乘1秒钟的结果
  > But remember, N is an integer, so you should not just multiply N with conversion factor- the answer will be off by huge amount for higher time complexities. Instead you should multiply in the beginning of the calculation.
  - 总结：从结果的比较得出，$2^n$ 和 n! 是非常差的时间复杂度, lgn和根号n是比较好的时间复杂度


### Chapter Two
  - [ ] 2.1-4 考虑把两个n位二进制整数加起来的问题，这两个整数分别存储在两个n元数组A和B中。这两个整数的和应该按二进制形式存储在一个(n+1)元数组C中。请给出该问题的**形式化描述**, 并写出伪代码。
  > Consider the problem of adding two n-bit binary integers, stored in two n-element arrays A and B. The sum of the two integers should be stored in binary form in an (n+1)-element array C. State the problem formally and write pseudocode for adding the two integers.
  > 算法中涉及到二进制运算，详见[https://atekihcan.github.io/CLRS/02/E02.01-04/](https://atekihcan.github.io/CLRS/02/E02.01-04/)

- Θ(theta, 希腊字母第八字)
- Quick Tip: Every time we see lgn, we should think of divide-and conquer algorithms. It inherently means how many times `n` can be divided by 2, i.e. repeated division of `n` elements in two groups.
- [ ] 2-1 Insertion sort on small arrays in merge sort
    Although merge sort runs in O(nlgn) worst-case time and insertion sort runs in O(n2) worst-case time, the constant factors in insertion sort can make it faster in practice for small problem sizes on many machines. Thus, it makes sense to coarsen the leaves of the recursion by using insertion sort within merge sort when subproblems become sufficiently small. Consider a modification to merge sort in which n/k sublists of length k are sorted using insertion sort and then merged using the standard merging mechanism, where k is a value to be determined.
    a. Show that insertion sort can sort the n/k sublists, each of length k, in O(nk) worst-case time.
    b. Show how to merge the sublists in O(nlg(n/k)) worst-case time.
    c. Given that the modified algorithm runs in O(nk + nlg(n/k)) worst-case time, what is the largest value of k as a function of n for which the modified algorithm has the same running time as standard merge sort, in terms of O-notation?
    > Why assume k = O(lgn)
    d. How should we choose k in practice?
    > Implement this improved algorithm
- [ ] Chapter 2 Summary 
    1. Insertion Sort
    2. Merge Sort
    3. Selection Sort
    4. Bubble Sort



## Learning progress

|   Date    |  Page  | Chapter | Notes |
| :-------: | :----: | :-----: | :---: |
| 2022.3.22 | 51(30) |   2.3   |                                           |
| 2022.3.26 | 60(39) |   2     |                                           |
| 2022.3.30 | (40)   |   2     |                                           |
| 2022.3.31 | (41)   |   2-3   | Think hard! Understand every f*** detail! |
| 2022.4. 1 | (42)   |   2     | Only 2-2 was left                         |
|           |        |         |                                           |
|           |        |         |                                           |
|           |        |         |                                           |
|           |        |         |                                           |











