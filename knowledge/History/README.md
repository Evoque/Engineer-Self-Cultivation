# history

A `history` object abstracts away the differences in various envs and provides a minimal API that lets you manage the history stack, navigate, and **persist state between sessions**.



#### BrowserHistory

```typescript
let history: BrowserHistory = {
    get action() { return action;  },
    get location() { return location; },
    createHref,
    push,
    replace,
    go,
    back() { go(-1); },
    forward() { go(1); },
    listen(listener) { return listeners.push(listener); },
    block(blocker) {
      let unblock = blockers.push(blocker);
      if (blockers.length === 1) {
        window.addEventListener(BeforeUnloadEventType, promptBeforeUnload);
      }
      return function () {
        unblock(); 
        if (!blockers.length) {
          window.removeEventListener(BeforeUnloadEventType, promptBeforeUnload);
        }
      };
    },
  };
```

- push:
  - **总结：** 1. 更新局部变量`action` `index` `location`; 2. 更新 url bar; 3. 触发`listeners`回调；-- 以上之前会先验证是否有`blockers`的存在。
  - **猜测：**因为`history.pushState`不触发任何事件，所以`react-router`可能是通过注册的`listen`事件进行监听 & 响应
- replace: 
  - **总结：**和`push`几乎相同，只是`index`不变， 因为并没有navigate
  - **测试：**`react-router`中，`push`与`replace`同时会触发组件的Nav, 所以再次验证`push`中的猜测(注册`listen`)
- blocker:
  - **注意：**注册多个`blocker`时要注意，每次触发`allowTx`时会变里当前所有的`blockers`，如果队列中第一个`blocker`执行回调并`unblock` & `retry`时，会再次触发第二个`blocker`的回调（第二个`blocker`已经再初始时触发过回调），即第二个会触发两次回调， 第三个会触发三次回调，以此类推。


**Get Done with version 5**















