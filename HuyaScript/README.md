## 写在开头

在 [Greasy Fork](https://greasyfork.org/zh-CN/scripts/405989-h2p-%E8%99%8E%E7%89%99%E8%87%AA%E5%8A%A8%E7%A6%81%E8%A8%80/feedback) 反馈。

截图可能和最新脚本不太一样，但没什么问题。

快捷键
- Shift + j : 显示控制面板

更新日志
- 2020.09.13
    - 修复虎牙禁言（禁言记录可查看控制台输出）
- 2020.07.09
    - 识别弹幕忽略空格，自动关闭个人信息
- 2020.06.25
    - 修复字母直播间无法使用的 BUG
- 2020.06.24
    - 虎牙自动禁言，修复手动禁言不显示的 BUG

<hr>

## 脚本介绍

1. 本脚本不会自动启动，需手动开启禁言检测
2. 本脚本不会自动显示控制面板，如需使用，可使用 `shift + j` 调出
3. 本脚本目前支持三种禁言理由，不支持 `其他`
4. 本脚本目前支持文本匹配，不支持正则表达式
5. 使用本脚本需有直播间房管，并且不能禁言主播和其他房管

<img src="https://github.com/WaterH2P/Tampermonkey-Script/raw/master/HuyaScript/images/main.png" width="50%">

## 存在问题

1. 非宽屏模式或者网页全屏下使用，在禁言时，顶部导航栏会闪一下，这是因为虎牙在禁言过程中添加了一层灰色层。
2. 在宽屏模式或者网页全屏下使用，不存在上述问题。