这里是代码练习的地方， 不计入git

> Declarative routing for React

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



## QA

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