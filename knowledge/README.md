
### UMD
UMD没有自己的专有规范，集合了CommonJS, CMD, AMD的规范。
```javascript
((root, factory) => {
    if (typeof define === 'function' && define.amd) {
        //AMD
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        //CommonJS
        var $ = requie('jquery');
        module.exports = factory($);
    } else {
        root.testModule = factory(root.jQuery);
    }
})(this, ($) => {
    //todo
});
```



# TODO
- [ ] 什么是CommonJS、CMD、AMD
