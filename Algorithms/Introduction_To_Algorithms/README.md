
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
    
- [ ] 1.1-5 提供一个现实生活的问题，其中只有最佳解才行。然后提供一个问题，其中近似最佳的一个解也足够好。

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
  - [ ] 计算完1秒钟后，后面的的时间不能直接乘1秒钟的结果
  > But remember, N is an integer, so you should not just multiply N with conversion factor- the answer will be off by huge amount for higher time complexities. Instead you should multiply in the beginning of the calculation.
  - 总结：从结果的比较得出，$2^n$ 和 n! 是非常差的时间复杂度, lgn和根号n是比较好的时间复杂度
