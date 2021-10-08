---
layout: post
title:  "Computer Qualification Certification"
date:   2021-10-08 14:57:55
categories: 考试
tags: 软考 系统架构
---


软考——系统架构师资料收集

雨露均沾 需要标记吗🌟

# 计算机组成原理与体系结构

## Flynn分类法

<table>
<thead>
<tr>
<th>体系结构类型</th>
<th>结构</th>
<th>关键特性</th>
<th>代表</th>
</tr>
</thead>
<tbody>
<tr>
<td>SISD单指令流单数据流</td>
<td>控制部分：一个<br>处理器：一个<br>主存模块：一个</td>
<td></td>
<td>单处理器系统</td>
</tr>
<tr>
<td>SIMD单指令流多数据流</td>
<td>控制部分：一个<br>处理器：多个<br>主存模块：多个</td>
<td></td>
<td>并行处理机、<strong>阵列处理机</strong>、超级向量处理机</td>
</tr>
<tr>
<td>MISD多指令流多数据流</td>
<td>控制部分：多个<br>处理器：一个<br>主存模块：多个</td>
<td>不实际</td>
<td>目前没有，文献中有</td>
</tr>
<tr>
<td>MIMD多指令多数据流</td>
<td>控制部分：多个<br>处理器：多个<br>主存模块：多个</td>
<td></td>
<td>多处理机系统、多计算机</td>
</tr>
</tbody>
</table>

## CISC与RISC

CISC与RISC

* CISC：复杂指令集计算机 Complex Instrcution Set Computers
* RISC：精简指令集计算机 Reduced Instruction Set Computers

|指令系统类型    |指令    |寻址方式    |实现方式    |其他
|:---: |:---: |:---: |:---: |:---: |
|CISC-复杂    |数量多，使用频率差别大，可变长格式    |支持多种    |微程序控制技术    |研制周期长
|RISC-精简    |数量少，使用频率接近，定长格式，大部分为单周期指令，操作寄存器，只有Load/Store操作内存    |支持方式少    |增加了通用寄存器；应不限逻辑控制为主；适合采用流水线    |优化编译，有效支持多种语言

## 存储系统

> 重点为磁盘调度算法，存储单元

### 冯·诺依曼结构

一种将程序指令存储器和数据存储器合并在一起的存储器结构。

* 一般用于PC处理器，如i3、i5、i7处理器
* 指令与数据存储器合并在一起
* 指令与数据都通过相同的数据总线传输

### 哈佛结构

一种将程序指令存储和数据存储分开的存储器结构。

* 一般用于嵌入式系统处理器DSP(数据信号处理)
* 指令与数据分开存储，可以并行读取，有较高数据的吞吐率
* 有4条总线：指令和数据的数据总线与地址总线

### 层次化存储结构

* 快->慢：CPU寄存器、Cache、内存(主存)、外存(辅存)
* 局部性原理：访问数据有局部性原理，故可以使用层次化存储结构。

### 存储器分类

* 随机存取存储器RAM-Random Access Memory:    DRAM-动态存储器 SRAM-静态存储器
* 只读存储器ROM-Read-Only Memory:    MROM PROM EPRROM 闪速存储器

* 存储单元指的一行的小单元格
* 编址地址可以按字，也可以按字节8bit
* 存储单元个数=大地址-小地址+1
* 总容量=存储单元个数*编址内容
* 总容量=单元芯片容量*芯片个数

### 磁盘结构与参数

存取时间=寻道时间+等待时间(平均定位时间+转动延迟)

### 磁盘调度算法

* FCFS
* SSTF最短寻道时间优先/最短移臂

## 流水线技术

> 相关计算：流水线执行时间计算、流水线吞吐率、流水线加速比、流水线效率

### 流水线

流水线是指在程序执行时多条指令重叠进行操作的一种准并行处理实现技术。各种部件同时处理是针对不同指令而言的，它们可以同时为多条指令的不同部分进行工作，以提高各部件的利用率和指令的平均执行速度。

-->取指-->分析-->执行

* 流水线的吞吐率是指单位时间内流水线所完成的任务数量或输出的结果数量。最大吞吐量是极限值。

* 加速比=不使用流水线执行时间/使用流水线执行时间

### 总线

一条总线同一时刻仅允许一个设备发送，单允许多个设备接受。

* 数据总线
* 地址总线
* 控制总线

## 嵌入式系统

### 芯片

- DSP：数字信号处理器，是一种特别适用于进行数字信号处理运算的微处理器。
- Soc：片上系统，是一种有专用目标的集成电路。
- MPU：微机中的中央处理器。构成微机的核心部件。
- MCU：微控制单元，又称单片机/

### 嵌入式系统初始化过程

- 片级初始化：完成嵌入式微处理器的初始化。
- 板级初始化：完成嵌入式微处理器以外的其他硬件设备的初始化。
- 系统初始化：以软件初始化为主，主要进行操作系统的初始化。

## 校验码

校验方法

- 奇偶校验码：奇偶校验，可检查1位的错误，不可纠错
- 循环冗余校验：在k位信息码之后拼接r位校验码
- 海明校验码：可检错，也可纠错。记住位数即可。

## 性能指标

- 字长与数据通路宽度
- 主存容量与存取速度
- 运算速度
- 吞吐量与吞吐率
- 响应时间
- 与完成时间
- 兼容性

## 阿姆达尔解决方案

可使用估算法，将整个系统时间设置为10s。

## 性能评价方法

- 时钟频率法
- 指令执行速度法
- 等效指令速度法
- 数据处理速率法
- 综合理论性能法
- 基准程序法

# 操作系统

## 进程管理

> PV操作

进程的状态

- 就绪-运行-阻塞。阻塞态不能直接到运行态。运行态不能直接到就绪态
- 首先考虑非CPU资源

前趋图

- TODO

信号量与PV操作

- 互斥：会存在一个共享使用的资源，但是某一时刻只能一个进程使用，临界资源的互斥访问
- 同步：速度有差异，在一定情况停下等待。

生产者和消费者就是典型的协同现象。

银行家算法

- 当一个进程对资源的最大需求量不超过系统中的资源数时可以接纳该进程。
- 进程可以分期请求资源，但请求的总数不能超过最大需求量
- 当系统现有的资源不能满足进程尚需资源数时，对进程的请求可以推迟分配，但总能使进程在有限的时间里得到资源

## 存储管理

> - CPU->Cache->内存->外存
> - 用的时候通过局部性原理支撑，将外存内容调到内存，统称虚拟化存储
> - 页式存储/段式存储/段页式存储

页式存储组织

- 优点：利用率高，碎片小，分配及管理简单
- 缺点：增加了系统开销；可能产生抖动现象
- 逻辑地址=页号+页内地址
- 物理地址=页帧号+页内地址（物理块号又称为页帧块）
- 优先淘汰访问位为0，其次考虑修改位为0

段式存储组织

- 按用户作业中的自然段来划分逻辑空间，然后调入内存，段段长度可以不一样。
- 优点：多道程序共享内存，各段程序修改互不影响。
- 缺点：内存利用率低，内存碎片浪费大。
- 逻辑地址：（段号，段内偏移量）

段页式存储组织

- 段式与页式的综合体，先分段，再分页。
- 优点：空间浪费小、存储共享容易、存储保护容易、能动态连接
- 缺点：由于管理软件的增加，复杂性和开销也随之增加，需要的硬件以及占用的内容也有所增加，使得执行速度大大下降

快表

- 将页表存于Cache上叫快表
- 将页表存于内存上叫慢表

## 文件管理

> 文件管理的是外存里的文件。

索引文件

- 索引可以理解为指针、地址、盘块号

文件和树型目录结构

- 文件属性：R只读文件属性 / A存档属性 / S系统文件 / H隐藏文件
- 文件名的组成：驱动器号+路径+主文件名+扩展名
- 绝对路径：是从盘符开始的路径
- 相对路径：是从当前目录开始的路径

空闲存储空间的管理

- 文件管理：空闲区表法、空闲链表法、位示图法 成组链接法

## 作业管理

> 试卷中从未出现过

## 设备管理

数据传输控制方式

- 程序控制方式：严重影响CPU。分为无条件传送和程序查询方式。
- 程序中断方式：CPU无需等待而提高了传输请求的响应速度。
- DMA方式：DMA方式比程序控制方式与中断方式都高效。
- 通道方式
- I/O处理机

虚设备与SPOOLING技术

- 假脱机技术，没有真正实现脱机打印

## 微内核操作系统

单体内核——将图形、设备驱动及文件系统等功能全部在内核中实现，运行在内核状态和统一地址空间。

微内核——是实现基本功能，将图形系统、文件系统、设备驱动及通信功能放在内核之外。

## 嵌入式操作系统

嵌入式操作系统特点

- 1.微型化 2.代码质量高 3.专业化 4.实时性强 5.可裁剪、可配置
- 实时嵌入式操作系统的内核服务有：异常和中断、计时器、I/O管理
- 常见的嵌入式RTOS：VxWorks、RT-Linux、QNX、pSOS

# 数据库

# 计算机网络



