
## 1. 引入脚本

根据 greasyFork 指引，到脚本开头 require 本脚本

## 2. 传入 $util

```js
  (($util, $H2P) => {
    ...
  })($util, $H2P)
```

## 3. API

```js
  // 键盘点击事件 code
  $util.keyCode.[a-z];

  // localStorage 操作
  $util.LS.init(itemKey = '', itemPre = {});
  $util.LS.set(itemKey = '', item = {});
  $util.LS.get(itemKey = '');
  $util.LS.remove(itemKey = '');

  // 根据毫秒获取 小时、分钟、秒
  // 返回 { h: '', m: '', s: '' }，通过解耦获取
  $util.HMS(time = 0);

  // Date 格式化
  new Date().$formatTime(); // format time: yyyy-MM-dd hh-mm-ss
  new Date().$formatDate(); // format date: yyyy-MM-dd

  // document.querySelector
  $H2P(xpath);
  // document.querySelectorAll
  $H2P(xpath, false);
```