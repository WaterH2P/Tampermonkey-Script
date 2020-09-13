
## 1. 引入脚本

根据 greasyFork 指引，到脚本开头 require 本脚本

## 2. 传入 $notifyMgr

```js
  (($notifyMgr) => {
    ...
  })($notifyMgr)
```

## 3. 使用脚本

```js
  // 会返回创建的弹窗的 id
  $notifyMgr.createNotify({ msg = '', type = notifyType.default, autoClose = true });

  $notifyMgr.closeNotify(id = '');
```