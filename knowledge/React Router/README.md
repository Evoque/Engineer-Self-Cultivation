

> Declarative routing for React



The `react-router` provides all core functionality. 

If you're using React Router, you should never `import` anything directly from the `react-router` package, but you should have everything you need in either `react-router-dom` or `react-router-native`. Both of those packages re-export everything from `react-router`.

If you'd like to extend React Router and you know what you're doing, you should add `react-router` **as a peer dependency, not a regular dependency** in your package.



## Learning path
- [ ] 架构图

  > - E-R图：实体关系图
  > - UML(用例图、流程图、时序图、架构图)：立足于对事物的实体、性质、关系、结构、状态和动态变化过程的全程描述和反映。
  >   - Use Case View
  >   - Process View: Activity Diagram、泳道图
  >   - Logical View:  Class Diagram、Object Diagram、Sequence Diagram、State Machine Diagrams
  >   - Physical View:  Deployment Diagrams
  >   - Development View: Component, Packages
  > - BPMN：业务流程建模与标注，包括图元如何组合成一个业务流程图
  >
  > 说明：UML参考《OReilly.Learning.UML.2.0》

  - [ ] 架构图(?)：描述其代码架构
  - [ ] 流程图(用例图)：描述其流转的生命周期

- [ ] 最新版源码
  - [ ] react-router
  - [ ] react-router-dom
  - [ ] react-router-native
  
- [ ] 不同版本差异对比学习

- [ ] 所有Router相关的知识及其它框架的路由策略(Vue, Angular)

- [ ] 业界最佳实践

- [ ] 评估是否达到提PR的程度: 如通过React-Router后续规划检验



##  Source

- [git: react-router](https://github.com/remix-run/react-router)
- [getting started guide](https://github.com/remix-run/react-router/blob/main/docs/getting-started/installation.md)
- [migration guide](https://github.com/remix-run/react-router/blob/main/docs/guides/migrating-5-to-6.md): like v5(v4) to v6
- [migrate from Reach Router](https://github.com/remix-run/react-router/blob/main/docs/guides/migrating-reach-to-6.md)
- [Contributing to React Router](https://github.com/remix-run/react-router/blob/main/docs/contributing.md)
- [financial support for router via Open Collective](https://opencollective.com/react-router)





# history

### 一、history in `react-router`

```tsx
import type { History, InitialEntry, Location, MemoryHistory, Path, To } from "history";
import { Action as NavigationType, createMemoryHistory, parsePath } from "history";
```

### 二、history in `react-router-dom`

```tsx
// index.tsx
import type { BrowserHistory, HashHistory } from "history";
import { createBrowserHistory, createHashHistory, createPath } from "history";

// server.tsx
import { Action, Location, To, createPath, parsePath } from "history";
```

### 三、history in `react-router-native`

> `RN`中暂不考虑





- [ ] route ranking algorithm
- [ ] `useRouteMatch() => match`中`match.path`与`match.url`的区别
- [ ] v5 版的Document怎么生成的(导航 - 描述 - 代码)
- [ ] `location`在`Switch`中的作用，[Trick Demo](https://v5.reactrouter.com/web/example/modal-gallery)



### Master all APIs

`Link` 和 `Route` 在代码上并没有任何耦合，`Link`只是处理`to`然后生成`a`链接

Nesting Route中，子Route的path可以和父Route的path相同，会同时渲染父&子Route







## TO-DO

1. React Router runs everywhere that React runs: web, server(node.js), React Native
2. Difference between every versions: V1 - V5, V6 on the way.
3. `react-router` vs. `react-router-dom` vs. `react-router-native` ， 分别解决了什么问题，为什么这么分？
4. `yarn.lock` vs `package-lock.json`
5. How is [browserslist](https://github.com/browserslist/browserslist)(or .browserslistrc) works.
6. How is [eslint](https://github.com/eslint/eslint)(or .eslintrc) works.
7. How is [git](https://github.com/git/git)(or .gitignore) works.
8. Go into [Reactiflux](https://www.reactiflux.com/)
9. [rollup](https://github.com/rollup/rollup)
10. [jest](https://github.com/facebook/jest): 应该聚焦在`Test`主题下，如：前端Test是如何玩的
11. `peerDependencies`
12. `Code Splitting`:  [inline code-splitting](https://reactjs.org/docs/code-splitting.html)  vs [Route-based code-splitting](https://reactjs.org/docs/code-splitting.html#route-based-code-splitting) vs [webpack v4 code-splitting](https://v4.webpack.js.org/guides/code-splitting/) vs [react-router code-splitting](https://v5.reactrouter.com/web/guides/code-splitting) 
