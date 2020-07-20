## 批量取关

- 在 https://www.douyu.com/directory/myFollow 网页中会添加一个取消关注的按钮

#### 操作步骤

1. 点击斗鱼自带的 `批量操作` 
2. 勾选想要取消关注的主播的右上角
3. 点击 `取消关注` 
4. 控制台会输出是否取消成功

## 暴露接口

#### cancelFollow

- 可以通过 `h2pScript_Func.cancelFollow(anchorId)` 在浏览器控制台或者自己的脚本中对 anchorId 取消关注

#### sleep

- 可以通过 `h2pScript_Func.sleep(sec)` 实现程序睡 sec 秒