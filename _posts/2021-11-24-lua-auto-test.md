---
layout: post
title:  "lua自动化测试指南"
date:   2021-11-24 11:15:22
categories: 编程
tags: lua
excerpt: lua自动化测试指南
---

# lua自动化测试指南

## 安装过程

### 安装luarocks

* [安装指南](https://www.cnblogs.com/xulang/p/12535667.html)
* 安装完成后cmd运行`luarocks`看是否安装成功
  > 找不到luarocks命令 需要将图示四个文件copy放入`lua\5.1\`路径下
  > ![1637723091_1_.png](https://i.loli.net/2021/11/24/HaimyRg9jqLStwb.png)
* 安装busted `luarocks install busted`
  > * 如若出现 [Error: Parse error processing dependency 'lua_cliargs = 3.0'](https://github.com/Olivine-Labs/busted/issues/590)  
      >   请键入`where luarocks`查看路径是否为您的安装路径，此现象为您在设备上安装了多个版本的luarocks系统无法确定安装版本
  > * 如若出现 `mingw32-gcc` 您需要安装gcc
      >    ![gcc.png](https://i.loli.net/2021/11/24/AjSJhNkOZ4FwKLY.png)