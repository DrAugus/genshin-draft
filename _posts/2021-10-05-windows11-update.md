---
layout: post
title:  "windows11更新纪要"
date:   2021-10-05 13:16:44
categories: windows
tags: windows 更新
---



本文介绍更新路上的绊脚石

如果需要跨过这些绊脚石，进PE直接安装win11镜像即可。
[附官方更新地址](https://www.microsoft.com/zh-cn/software-download/windows11)

## TMP2.0 开启

> 启用 TPM 的选项可能标记为"安全设备、安全设备支持、TPM 状态、AMD fTPM开关、AMD PSP fTPM、IntelPTT或Intel平台信任技术"。

## 安全启动 开启

可以直接在bios里搜索`security`或`安全`，找到`安全启动`选项，此时点击开启，可能会提示

> System in Setup Mode!Secure Boot can be enabled when System in User Mode. Repeat operation after enrolling Platform Key(PK)

解决办法

* 启动模式改为`UEFI`模式 （如果是`LEGACY+UEFI`模式 可能切换了导致系统无法进入 需要重装系统 设置为`UEFI`模式[或者使用分区助手](#dg_op)）
* 关闭csm 在bios搜索csm将csm模式改为`UEFI`
* 解决以上两步，重新去启用`安全启动`，则可成功启动


<span id="dg_op">使用分区助手修改为UEFI</span>
* 前置操作，在磁盘管理中分一个>200MB的区
* 进入pe桌面后打开DG硬盘分区工具，选中自己的硬盘右键单击选择转换分区表类型为GUID格式，点确定然后点左上方保存更改。此时我们的硬盘已经从MBR变为GPT
* 右键单击前置操作的分区，选择建立ESP/MSR分区

  ![set_esp.png](https://i.loli.net/2021/10/07/xmoZ9JuesbIWTgN.png)
* 完成之后DiskGenius工具会自动为ESP分区设置一个盘符，如果没有，请手动设置。至此，ESP分区创建完成。
* 最后，打开pe上的修复工具，修复下引导即可