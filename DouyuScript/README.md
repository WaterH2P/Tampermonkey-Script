## 写在开头

在 [Greasy Fork](https://greasyfork.org/zh-CN/scripts/380546-%E6%96%97%E9%B1%BC%E8%87%AA%E5%8A%A8%E5%8F%91%E5%BC%B9%E5%B9%95-%E9%A2%86%E5%8F%96%E8%A7%82%E7%9C%8B%E9%B1%BC%E4%B8%B8-%E6%B8%85%E7%88%BD%E6%A8%A1%E5%BC%8F/feedback) 反馈。

截图可能和最新脚本不太一样，但没什么问题。

快捷键
- Shift + z : 黑暗模式
- Shift + x : 清爽模式
- Shift + a : 打开发送弹幕界面
- Shift + s : 打开自动设置界面
- Shift + w : 锁定弹幕
- Shift + e : 清除弹幕
- Shift + o : 宽屏模式
- Shift + p : 网页全屏
- ESC : 退出清爽模式

更新日志
- 2020.07.20
  - 自动发弹幕修改分为本房间和所有房间
- 2020.07.19
  - 修复虎牙最高画质暂停 BUG，修复 B 站宽屏模式BUG，优化 B 站控制板大小
  - 修复 topic 为 lol 的房间的清爽模式白屏 BUG
- 2020.07.08
  - 修复虎牙自动化 BUG
- 2020.07.05
  - B 站直播间自动领取舰长辣条，B 站清爽模式隐藏更多元素
- 2020.06.30
  - 斗鱼签到（只签到已关注房间）
- 2020.06.17
  - B 站自动化配置，清爽模式优化


<hr>

## 黑暗模式

- 点击按钮 <img src="https://github.com/WaterH2P/Tampermonkey-Script/raw/master/DouyuScript/images/icon_blackMode.png" width="5%">
- 可以选择纯黑色、灰色以及自定义颜色

### 斗鱼

- 点击网页右上角
  - <img src="https://github.com/WaterH2P/Tampermonkey-Script/raw/master/DouyuScript/images/icon_blackMode1.png" width="100%">
- 效果图（配合清爽模式）
  - <img src="https://github.com/WaterH2P/Tampermonkey-Script/raw/master/DouyuScript/images/douyu_view_blackMode2.png" width="100%">

### B 站

- 点击导航栏搜索框左边的
  - <img src="https://github.com/WaterH2P/Tampermonkey-Script/raw/master/DouyuScript/images/icon_blackMode2.png" width="100%">
- 效果图（配合清爽模式）
  - <img src="https://github.com/WaterH2P/Tampermonkey-Script/raw/master/DouyuScript/images/bilibili_view_blackMode1.png" width="100%"> 
  - <img src="https://github.com/WaterH2P/Tampermonkey-Script/raw/master/DouyuScript/images/bilibili_view_blackMode2.png" width="100%"> 

### 虎牙

- 点击网页右上角
  - <img src="https://github.com/WaterH2P/Tampermonkey-Script/raw/master/DouyuScript/images/icon_blackMode3.png" width="100%">
- 效果图（配合清爽模式）
  - <img src="https://github.com/WaterH2P/Tampermonkey-Script/raw/master/DouyuScript/images/huya_view_blackMode1.png" width="100%"> 

<hr>

## 清爽模式

- 点击按钮 <img src="https://github.com/WaterH2P/Tampermonkey-Script/raw/master/DouyuScript/images/icon_clearMode.png" width="5%">

### 斗鱼

导航栏

- <img src="https://github.com/WaterH2P/Tampermonkey-Script/raw/master/DouyuScript/images/clear_header_1.png" width="100%">
- <img src="https://github.com/WaterH2P/Tampermonkey-Script/raw/master/DouyuScript/images/clear_header_2.png" width="100%">

信息栏

- <img src="https://github.com/WaterH2P/Tampermonkey-Script/raw/master/DouyuScript/images/clear_info_1.png" width="100%">
- <img src="https://github.com/WaterH2P/Tampermonkey-Script/raw/master/DouyuScript/images/clear_info_2.png" width="100%">

礼物栏

- <img src="https://github.com/WaterH2P/Tampermonkey-Script/raw/master/DouyuScript/images/clear_gift_1.png" width="100%">
- <img src="https://github.com/WaterH2P/Tampermonkey-Script/raw/master/DouyuScript/images/clear_gift_2.png" width="100%">

弹幕栏

- <img src="https://github.com/WaterH2P/Tampermonkey-Script/raw/master/DouyuScript/images/clear_bar_1.png" width="30%">      <img src="https://github.com/WaterH2P/Tampermonkey-Script/raw/master/DouyuScript/images/clear_bar_2.png" width="30%">
  - 显示直播热度、真实人数、直播时长

播放器

- <img src="https://github.com/WaterH2P/Tampermonkey-Script/raw/master/DouyuScript/images/clear_play_1.png" width="80%">
- <img src="https://github.com/WaterH2P/Tampermonkey-Script/raw/master/DouyuScript/images/clear_play_2.png" width="80%">

### B 站

- 点击导航栏搜索框左边的
  - <img src="https://github.com/WaterH2P/Tampermonkey-Script/raw/master/DouyuScript/images/icon_clearMode2.png" width="100%">

### 虎牙

- 点击网页右上角
  - <img src="https://github.com/WaterH2P/Tampermonkey-Script/raw/master/DouyuScript/images/icon_clearMode3.png" width="100%">

<hr>

## 初始化

如果发送弹幕上出现 🐯

<img src="https://github.com/WaterH2P/Tampermonkey-Script/raw/master/DouyuScript/images/sign_tab.png" width="40%">

- 表示【脚本】初始化成功。

- 点击 🐯 出现 📢，表示【自动发弹幕】组件初始化成功。

- 点击 🐯 出现 ⏲️，表示【自动化设置】组件初始化成功。

<hr>

## 使用

### 自动发弹幕

<img src="https://github.com/WaterH2P/Tampermonkey-Script/raw/master/DouyuScript/images/view_bar.png" width="40%"> 

- 修改自动保存

间隔时间

- 弹幕间隔，取值范围 [3, 999] 秒。
- 间隔时间修改时自动保存。
- 每次弹幕发送时间都是根据间隔时间随机生成的。



抽奖弹幕

- 抽奖弹幕发送次数。
- 可以参加 发弹幕、发弹幕+关注主播、发弹幕+成为粉丝（已有粉丝牌）。



关键词回复

- 关键词回复搜索最近的弹幕，如果匹配到关键词，则以弹幕的形式回复。
- 点击 + 可以添加。
- 点击 - 可以删除当前选中的关键词回复。
- 关键词回复修改时自动保存。



抄袭弹幕

- 抄袭弹幕列表的弹幕。
- 抄袭间隔是抄袭的弹幕和最新弹幕之间的弹幕数目。
- 如果需要屏蔽关键词，可以配合斗鱼官方给的屏蔽。



循环弹幕

- 循环弹幕可以设置多条弹幕，以回车键隔开，随机发送。
- 循环弹幕修改时自动保存。



弹幕优先级

- 抽奖弹幕 > 关键词回复 > 抄袭弹幕 > 循环弹幕

<br>

### 配置

<img src="https://github.com/WaterH2P/Tampermonkey-Script/raw/master/DouyuScript/images/view_config.png" width="40%">

- 蓝色表示设置成功，刷新页面即可实现

<hr>

## 批量取关

- 在 https://www.douyu.com/directory/myFollow 网页中会添加一个取消关注的按钮

#### 操作步骤

1. 点击斗鱼自带的 `批量操作` 
2. 勾选想要取消关注的主播的右上角
3. 点击 `取消关注` 
4. 控制台会输出是否取消成功

<hr>

## 随缘救济作者

### 捐赠者

**\*長**

### 救济二维码

本脚本**无**付费完整版，一切随缘。过于复杂的需求拒绝实现！

<img src="https://github.com/WaterH2P/Tampermonkey-Script/raw/master/images/pay_ali.png" width="30%"><img src="https://github.com/WaterH2P/Tampermonkey-Script/raw/master/images/pay_wx.png" width="30%">
