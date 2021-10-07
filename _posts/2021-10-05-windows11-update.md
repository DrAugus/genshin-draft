---
layout: post
title:  "windows11更新纪要"
date:   2021-10-05 13:16:44
categories: windows
tags: windows 更新
---

## TMP2.0 开启

> 启用 TPM 的选项可能标记为"安全设备、安全设备支持、TPM 状态、AMD fTPM开关、AMD PSP fTPM、IntelPTT或Intel平台信任技术"。

## 安全启动 开启

可以直接在bios里搜索`security`或`安全`，找到`安全启动`选项，此时点击开启，可能会提示

> System in Setup Mode!Secure Boot can be enabled when System in User Mode. Repeat operation after enrolling Platform Key(PK)

解决办法将

* 启动模式改为`UEFI`模式 （如果是`LEGACY+UEFI`模式 可能切换了导致系统无法进入 需要重装系统 设置为`UEFI`模式）
* 关闭csm 在bios搜索csm将csm模式改为`UEFI`
* 解决以上两步，重新去启用`安全启动`，则可成功启动