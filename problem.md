## <span id = "content">题目汇总</span>

* [C++](#content1)
* [算法](#content2)
* [操作系统](#content3)
* [网络协议](#content4)
* [数据库](#content5)
* [Java](#content6)
* [前端](#content7)
* [系统设计](#content8)
* [非技术问题](#content9)

## <span id = "content1">C++</span> <button style="text-transform: none; margin: 15px; display: inline-block; font-weight: 400; text-align: center; vertical-align: middle; user-select: none; border: 1px solid #17a2b8; padding: 8px 8px; font-size: 16px; line-height: 16px; border-radius: 2.5px; color: #17a2b8; background-color: transparent; background-image: none; border-color: #17a2b8;">[back to content](#content)</button>

- C 和 C++ 的区别
  <a href="javascript;" title="悬停的文字">将鼠标移到这个标签上，就会显示"悬停的文字"</a>

[comment]: <> (<div @mouseenter="enter&#40;&#41;" @mouseleave="leave&#40;&#41;" id="div1" is="method.ts">)

[comment]: <> (	<p>待确认</p>)

[comment]: <> (<script type="text/typescript" src="method.ts"></script>)

[comment]: <> (</div>  )

- 简述 C++ 右值引用与转移语义
- 左值和右值
- 简述 new 与 malloc 的区别
- malloc 和 new，free 和 delete 的区别
- 变量的声明和定义有什么区别？
- C++ 11 有什么新特性
- C++ 20 有什么新特性
- 深拷贝与浅拷贝区别是什么？
- 编译时链接有几种方式？静态链接和动态链接的区别是什么？
- 简述 C++ 从代码到可执行二进制文件的过程
- 简述 C++ 编译的过程
- 什么是字节对齐，为什么要采用这种机制？
- const、static 关键字有什么区别
- 简述 C++ 的内联函数
- lambda 函数的特点，和普通函数相比有什么优点？
- extern C 的作用
- volatile 关键字的作用
- 有哪几种强制类型转换以及使用场景
- 如何避免循环依赖
- unique_ptr 中 std::move() 作用
- static 关键字的使用
- const 关键字的使用
- define 和 online 的区别
- 面向对象的设计原则
- C++ 编译过程
- 函数调用的具体实现

#### 指针

- 简述 C++ 中智能指针的特点

```markdown
C++程序设计中使用堆内存是非常频繁的操作。C++11中引入了智能指针的概念，方便管理堆内存。   
使用普通指针，容易造成堆内存泄露（忘记释放），二次释放，程序发生异常时内存泄露等问题等，使用智能指针能更好的管理堆内存。    
从较浅的层面看，智能指针是利用了一种叫做RAII（资源获取即初始化）的技术对普通的指针进行封装，这使得智能指针实质是一个对象，行为表现的却像一个指针。     
智能指针的作用是防止忘记调用delete释放内存和程序异常的进入catch块忘记释放内存。       
另外指针的释放时机也是非常有考究的，多次释放同一个指针会造成程序崩溃，这些都可以通过智能指针来解决。     
智能指针还有一个作用是把值语义转换成引用语义
```

> 关于语义不同 C++和Java有一处最大的区别在于语义不同   
> Java 只生成了一个对象 a和b仅仅是把持对象的引用而已

```Java
    Animal a = new Animal();  
    Animal b = a;
```

> 而C++生成了两个对象

```C++
    Animal a;
    Animal b = a;
```

<p><span style="color: red; "> 在实际的 C++ 开发中，我们经常会遇到诸如程序运行中突然崩溃、程序运行所用内存越来越多最终不得不重启等问题，这些问题往往都是内存资源管理不当造成的。比如：</span>
<li><span style="color: green; ">有些内存资源已经被释放，但指向它的指针并没有改变指向（成为了野指针），并且后续还在使用；</span></li>
<li><span style="color: green; ">有些内存资源已经被释放，后期又试图再释放一次（重复释放同一块内存会导致程序运行崩溃）；</span></li>
<li><span style="color: green; ">没有及时释放不再使用的内存资源，造成内存泄漏，程序占用的内存资源越来越多。</span></li></p>

- C++ 中智能指针和指针的区别是什么？
- 指针和引用的区别是什么？

#### 特性 多态 继承 封装 抽象

- C++ 中虚函数与纯虚函数的区别
- C++ 的重载和重写是如何实现的？
- C++ 中什么是菱形继承问题？
- 父类和子类是不是在同一个虚函数表
- C++ 中多态是怎么实现的
- 虚表指针的大小
- 虚函数表的存放内容
- 构造函数可以是虚函数吗
- 析构函数可以是虚函数吗

```markdown
在基类的函数前加上virtual关键字，在派生类中重写该函数，运行时将会根据对象的实际类型来调用相应的函数。       
如果对象类型是派生类，就调用派生类的函数；如果对象类型是基类，就调用基类的函数  
用virtual关键字申明的函数叫做虚函数，虚函数肯定是类的成员函数。   
存在虚函数的类都有一个一维的虚函数表叫做虚表，类的对象有一个指向虚表开始的虚指针。       
虚表是和类对应的，虚表指针是和对象对应的。       
多态性是一个接口多种实现，是面向对象的核心，分为类的多态性和函数的多态性。       
多态用虚函数来实现，结合动态绑定。       
纯虚函数是虚函数再加上 = 0； 抽象类是指包括至少一个纯虚函数的类。         
纯虚函数:virtual void fun()=0;即抽象类！必须在子类实现这个函数，即先有名称，没有内容，在派生类实现内容。
```

#### STL

- 常用的容器有哪些
- 简述 vector 的实现原理
- STL 中 vector 与 list 具体是怎么实现的？常见操作的时间复杂度是多少？
- C++ 的 vector 和 list中，如果删除末尾的元素，其指针和迭代器如何变化？若删除的是中间的元素呢？
- 简述 STL 中的 map 的实现原理

#### 类

- 一个空类会生成哪些函数
- 类默认的构造函数是什么？
- 只定义析构函数，会自动生成哪些构造函数？

#### 内存管理

- 简述 C++ 的内存分区
- 简述 C++ 中内存对齐的使用场景
- C++ 是如何进行内存管理的？
- C/C++内存存储区有哪几种类型？
- 内存中堆与栈的区别是什么？

## <span id = "content2">算法</span> <button style="text-transform: none; margin: 15px; display: inline-block; font-weight: 400; text-align: center; vertical-align: middle; user-select: none; border: 1px solid #17a2b8; padding: 8px 8px; font-size: 16px; line-height: 16px; border-radius: 2.5px; color: #17a2b8; background-color: transparent; background-image: none; border-color: #17a2b8;">[back to content](#content)</button>

#### LeetCode

- 多数元素 (Leetcode)
- 按序打印 (Leetcode)
- 爬楼梯 (Leetcode)
- 路径总和 (Leetcode)
- 用 Rand7() 实现 Rand10() (Leetcode)
- 字符串解码 (Leetcode)
- 不同路径 (Leetcode)
- 对角线遍历 (Leetcode)
- 有效的括号 (Leetcode)
- 剑指 Offer 10- II. 青蛙跳台阶问题
- x 的平方根 (Leetcode 69)
- 旋转图像 (Leetcode)

#### 子序列

- 最长公共子序列 (Leetcode)
- 最长上升子序列 (Leetcode)
- 最大子序和 (Leetcode)
- 最长和谐子序列 (Leetcode)
- 最小覆盖子串 (Leetcode)

#### 二叉树

- 二叉树的最近公共祖先 (Leetcode 236)
- 从前序与中序遍历序列构造二叉树 (Leetcode)
- 二叉树的锯齿形层次遍历 (Leetcode)
- 二叉树的后序遍历 (Leetcode)
- 二叉树的中序遍历 (Leetcode)
- 翻转二叉树 (Leetcode)
- 二叉树的层序遍历
- AVL 树和红黑树有什么区别？
- 红黑树是怎么实现平衡的？它的优点是什么？
- 二叉搜索树的第k大节点（剑指 Offer 54）

#### 栈和队列

- 用栈实现队列 (Leetcode)
- 用队列实现栈 (Leetcode)
- 手写无锁队列
- 最大栈 (Leetcode)

#### 数组

- 旋转数组 (Leetcode)
- 数组中的第 K 个最大元素 (Leetcode)
- 合并两个有序数组 (Leetcode)
- 如何从一个数组输出随机数组（洗牌算法）
- 数组中的第 K 个最大元素 (Leetcode)

#### 链表

- 链表倒数第K个数 (Leetcode)
- 删除排序链表中的重复元素 (Leetcode)
- 删除链表的倒数第N个节点 (Leetcode)
- 环形链表 (Leetcode)
- 合并两个有序链表 (Leetcode)
- 反转链表 (Leetcode)
- 反转链表 II
- 有序链表插入的时间复杂度是多少？

#### 排序

- 常用的排序方式有哪些，时间复杂度是多少？
- 什么是排序算法中的稳定性？
- 实现快速排序
    + 使用递归及非递归两种方式实现快速排序
    + 快速排序的空间复杂度是多少？时间复杂度的最好最坏的情况是多少，有哪些优化方案？

#### LRU 算法

- 实现 LRU 算法，实现带有过期时间的 LRU 算法
- 简述 LRU 算法及其实现方式

#### OTHERS

- 如何实现大数运算
- 给定一个包含 40亿 个无符号整数的大型文件，使用最多 1G 内存，对此文件进行排序
- 10亿个数中如何高效地找到最大的一个数以及最大的第 K 个数
- 两个 10G 大小包含 URL 数据的文件，最多使用 1G 内存，将这两个文件合并，并找到相同的 URL
- 给定 100G 的 URL 磁盘数据，使用最多 1G 内存，统计出现频率最高的 Top K 个 URL
- 10亿条数据包括 id，上线时间，下线时间，请绘制每一秒在线人数的曲线图
- 两个文件包含无序的数字，数字的大小范围是0-500w左右。如何求两个文件中的重复的数据？
- 1000 台机器，每台机器 1000个 文件，每个文件存储了 10亿个 整数，如何找到其中最小的 1000个 值？
- 如何随机生成不重复的 10个100 以内的数字？
- 如何通过一个不均匀的硬币得到公平的结果？
- 常用的限流算法有哪些？简述令牌桶算法原理
- 简述布隆过滤器原理及其使用场景
- Hash 表常见操作的时间复杂度是多少？遇到 Hash 冲突是如何解决的？

- 什么是跳表
- 一个两层的跳表查询时可以降低倒多大的复杂度
- vector 和 list 的区别
- vector 的扩容原理
- map 底层实现
- map 和 unordered_map 的区别
- 如何计算循环链表的长度
- 二叉搜索树和平衡二叉树，红黑树的区别
- 红黑树删除数据是怎么调整的
- stl sort 函数的实现

## <span id = "content3">操作系统</span> <button style="text-transform: none; margin: 15px; display: inline-block; font-weight: 400; text-align: center; vertical-align: middle; user-select: none; border: 1px solid #17a2b8; padding: 8px 8px; font-size: 16px; line-height: 16px; border-radius: 2.5px; color: #17a2b8; background-color: transparent; background-image: none; border-color: #17a2b8;">[back to content](#content)</button>

#### 线程 进程

- 进程和线程之间有什么区别？
- 进程间有哪些通信方式？
- 线程间有哪些通信方式？
- 简述同步与异步的区别，阻塞与非阻塞的区别
- 线程有多少种状态，状态之间如何转换
- 进程有多少种状态？
- 进程空间从高位到低位都有些什么？
- Linux 进程调度中有哪些常见算法以及策略？

#### 锁

- 简述自旋锁与互斥锁的使用场景
- 简述 socket 中 select 与 epoll 的使用场景以及区别，epoll 中水平触发以及边缘触发有什么不同？


- 操作系统如何申请以及管理内存的？
- 进程通信中的管道实现原理是什么？
- 简单介绍进程调度的算法
- 简述 Linux 系统态与用户态，什么时候会进入系统态？
- 简述 LRU 算法及其实现方式
- 简述操作系统如何进行内存管理
- 什么时候会由用户态陷入内核态？
- 简述操作系统中的缺页中断
- 简述几个常用的 Linux 命令以及他们的功能
- 简述操作系统中 malloc 的实现原理
- Linux 中虚拟内存和物理内存有什么区别？有什么优点？
- Linux 下如何查看端口被哪个进程占用？
- Linux 下如何排查 CPU 以及 内存占用过多？
- Linux 下如何查看 CPU 荷载，正在运行的进程，某个端口对应的进程？
- 如何调试服务器内存占用过高的问题？
- Linux 如何查看实时的滚动日志？
- BIO、NIO 有什么区别？怎么判断写文件时 Buffer 已经写满？简述 Linux 的 IO模型

## <span id = "content4">网络协议</span> <button style="text-transform: none; margin: 15px; display: inline-block; font-weight: 400; text-align: center; vertical-align: middle; user-select: none; border: 1px solid #17a2b8; padding: 8px 8px; font-size: 16px; line-height: 16px; border-radius: 2.5px; color: #17a2b8; background-color: transparent; background-image: none; border-color: #17a2b8;">[back to content](#content)</button>

#### TCP

- 简述 TCP 三次握手以及四次挥手的流程。为什么需要三次握手以及四次挥手？
- TCP 四次挥手的时候 CLOSE_WAIT 的话怎么处理？
- 简述 TCP 的 TIME_WAIT
- TCP 的 keepalive 了解吗？说一说它和 HTTP 的 keepalive 的区别？
- TCP 怎么保证可靠传输？
- 如何解决 TCP 传输丢包问题？
- TCP 如何实现数据有序性？
- TCP 中常见的拥塞控制算法有哪些？
- 简述 TCP 滑动窗口以及重传机制
- 简述 TCP 中的拥塞控制与滑动窗口机制
- 简述 TCP 协议的延迟 ACK 和累计应答
- 简述 TCP 的报文头部结构
- 什么是 TCP 粘包和拆包？
- TCP 中 SYN 攻击是什么？如何防止？
- TCP 与 UDP 在网络协议中的哪一层，他们之间有什么区别？

#### HTTP

- HTTP 与 HTTPS 有哪些区别？
- 简述 HTTP 1.0，1.1，2.0 的主要区别
- HTTP 是无状态的吗？需要保持状态的场景应该怎么做？
- 简述 HTTPS 的加密与认证过程
- 简述对称与非对称加密的概念
- HTTP 的方法有哪些？


- 从系统层面上，UDP如何保证尽量可靠？
- RestFul 与 RPC 的区别是什么？RestFul 的优点在哪里？
- RestFul 是什么？RestFul 请求的 URL 有什么特点？
- 简述 RPC 的调用过程
- 什么是 ARP 协议？简述其使用场景


- DNS 查询服务器的基本流程是什么？DNS 劫持是什么？
- 什么是中间人攻击？如何防止攻击？
- 如何防止传输内容被篡改？

- 从输入 URL 到展现页面的全过程

- 什么是跨域，什么情况下会发生跨域请求？
- 简述 WebSocket 是如何进行传输的


- Cookie 和 Session 的关系和区别是什么？

## <span id = "content5">数据库</span> <button style="text-transform: none; margin: 15px; display: inline-block; font-weight: 400; text-align: center; vertical-align: middle; user-select: none; border: 1px solid #17a2b8; padding: 8px 8px; font-size: 16px; line-height: 16px; border-radius: 2.5px; color: #17a2b8; background-color: transparent; background-image: none; border-color: #17a2b8;">[back to content](#content)</button>

- MySQL 有什么调优的方式？
- 简述 MySQL 的主从同步机制，如果同步失败会怎么样？
- 什么是 SQL 注入攻击？如何防止这类攻击？
- 简述数据库中的 ACID 分别是什么？
- Kafka 发送消息是如何保证可靠性的？
- 如何解决缓存与数据库不一致的问题？
- 数据库的读写分离的作用是什么？如何实现？
- MySQL 为什么使用 B+ 树来作索引，对比 B 树它的优点和缺点是什么？
- 数据库的事务隔离级别有哪些？各有哪些优缺点？
- 什么是数据库事务，MySQL 为什么会使用 InnoDB 作为默认选项
- 简述脏读和幻读的发生场景，InnoDB 是如何解决幻读的？
- 简述一致性哈希算法的实现方式及原理

#### 锁

- 什么情况下会发生死锁，如何解决死锁？
- 简述乐观锁以及悲观锁的区别以及使用场景
- 简述 MySQL 的间隙锁

#### Redis

- Redis 有几种数据结构？Zset 是如何实现的？
- 简述 Redis 持久化中 rdb 以及 aof 方案的优缺点
- Redis 如何实现延时队列，分布式锁的实现原理
- 简述 Redis 中如何防止缓存雪崩和缓存击穿
- 简述 Redis 中跳表的应用以及优缺点
- Redis的缓存淘汰策略有哪些？
- 为什么 Redis 在单线程下能如此快？

#### 索引

- 数据库索引的实现原理是什么？
- 聚簇索引和非聚簇索引有什么区别？什么情况用聚集索引？
- 唯一索引与普通索引的区别是什么？使用索引会有哪些优缺点？
- MySQL 的索引什么情况下会失效？
- 数据库索引的叶子结点为什么是有序链表？

## <span id = "content6">Java</span> <button style="text-transform: none; margin: 15px; display: inline-block; font-weight: 400; text-align: center; vertical-align: middle; user-select: none; border: 1px solid #17a2b8; padding: 8px 8px; font-size: 16px; line-height: 16px; border-radius: 2.5px; color: #17a2b8; background-color: transparent; background-image: none; border-color: #17a2b8;">[back to content](#content)</button>

#### 线程

- HashMap 与 ConcurrentHashMap 的实现原理是怎样的？ConcurrentHashMap 是如何保证线程安全的？
- 集合类中的 List 和 Map 的线程安全版本是什么，如何保证线程安全的？
- ThreadLocal 实现原理是什么？
- 线程池是如何实现的？简述线程池的任务策略
- 如何设计一个线程池
- Java 线程和操作系统的线程是怎么对应的？Java线程是怎样进行调度的?
- Java 线程池里的 arrayblockingqueue 与 linkedblockingqueue 的使用场景和区别
- Java 是如何实现线程安全的，哪些数据结构是线程安全的？
- Java 中 sleep() 与 wait() 的区别

#### 垃圾回收

- Java 中垃圾回收机制中如何判断对象需要回收？常见的 GC 回收算法有哪些？

#### 设计模式

- 实现单例设计模式（懒汉，饿汉）
- 简述常见的工厂模式以及单例模式的使用场景
- 手写生产者消费者模型
- 如何设计 Java 的异常体系？

#### 锁

- synchronized 关键字底层是如何实现的？它与 Lock 相比优缺点分别是什么？
- 简述 Synchronized，Volatile，可重入锁的不同使用场景及优缺点
- Java 常见锁有哪些？ReetrantLock 是怎么实现的？
- 简述 Synchronized，Volatile，可重入锁的不同使用场景及优缺点

#### JVM

- 简述 JVM 的内存模型 JVM 内存是如何对应到操作系统内存的？
- JVM 中内存模型是怎样的，简述新生代与老年代的区别？
- JVM 是怎么去调优的？简述过程和调优的结果


- 什么是内存泄漏，怎么确定内存泄漏？
- Java 异常有哪些类型？


- volatile 关键字解决了什么问题，它的实现原理是什么？


- String 类能不能被继承？为什么？
- == 和 equals() 的区别？
- 简述 BIO, NIO, AIO 的区别
- 简述 Spring AOP 的原理
- 简述 Java 的反射机制及其应用场景
- 简述动态代理与静态代理
- 简述 Java 的 happen before 原则
- 简述 ArrayList 与 LinkedList 的底层实现以及常见操作的时间复杂度
- Java 类的加载流程是怎样的？什么是双亲委派机制？
- Java 中接口和抽象类的区别
- hashcode 和 equals 方法的联系
- Spring MVC 的原理和流程

## <span id = "content7">前端</span> <button style="text-transform: none; margin: 15px; display: inline-block; font-weight: 400; text-align: center; vertical-align: middle; user-select: none; border: 1px solid #17a2b8; padding: 8px 8px; font-size: 16px; line-height: 16px; border-radius: 2.5px; color: #17a2b8; background-color: transparent; background-image: none; border-color: #17a2b8;">[back to content](#content)</button>

#### VUE

- Vue 中双向数据绑定的实现原理是怎样的？
- 简述 Vue 的生命周期
- 简述 Vue 和 React 的区别
- Vuex 有哪些常用属性？

#### REACT

- 简述 React 的生命周期

#### JS

- 简述 Javascript 原型以及原型链
- 简述 Javascript 中的防抖与节流的原理并尝试实现
- 简述 Javascript 中 this 的指向有哪些
- 什么是闭包，什么是立即执行函数，它的作用是什么？简单说一下闭包的使用场景
- 简述 ES6 的新特性
- 箭头函数和普通函数的区别是什么？
- const, let, var 关键字有什么区别？
- 简述 Javascript 的数据类型

#### CSS

- CSS 实现三列布局
- 简述 CSS 盒模型
- 简述 CSS 预编译的方式
- CSS 的选择器优先级是怎样？


- 简述浏览器的缓存机制
- 简述 diff 算法的实现机制和使用场景
- readyState 的不同返回值有什么区别？
- 简述虚拟 dom 实现原理
- 简述 Dom 节点的不同操作方式
- 了解 XSS 攻击吗？如何防止 XSS 攻击？
- promise 有哪些状态？简述 promise.all 的实现原理
- HTTP 中 GET 和 POST 区别
- 什么是替换元素与非替换元素
- 正则表达式 /w 是什么意思？
- 什么是可继承元素和不可继承元素？
- 简述图片的懒加载原理
- 简述强缓存与协商缓存的区别和使用场景
- 简述 Flex 布局的原理和使用场景
- localstorage 与 cookie 的区别是什么？
- async 和 defer 有什么区别？
- 前端如何解决线程安全和进程安全的问题？
- 简述常见异步编程方案 (promise, generator, async) 的原理
- computed 和 watch 的区别是什么？

## <span id = "content8">系统设计</span> <button style="text-transform: none; margin: 15px; display: inline-block; font-weight: 400; text-align: center; vertical-align: middle; user-select: none; border: 1px solid #17a2b8; padding: 8px 8px; font-size: 16px; line-height: 16px; border-radius: 2.5px; color: #17a2b8; background-color: transparent; background-image: none; border-color: #17a2b8;">[back to content](#content)</button>

电商系统中，如何实现秒杀功能？如何解决商品的超卖问题？

简述 Zookeeper 基础原理以及使用场景

简述什么是两阶段提交？

如何设计一个消息队列

如何设计一个线程池

简述一致性哈希算法的实现方式及原理

简述 CAP 理论

项目上有什么技术难点？

了解高并发的解决方案吗？例如动静分离，缓存，负载均衡

有哪些实现服务发现的方法？

如何阅读大型项目的源码？

假如明天是活动高峰？QPS 预计会翻10倍，你要怎么做？

## <span id = "content9">非技术问题</span> <button style="text-transform: none; margin: 15px; display: inline-block; font-weight: 400; text-align: center; vertical-align: middle; user-select: none; border: 1px solid #17a2b8; padding: 8px 8px; font-size: 16px; line-height: 16px; border-radius: 2.5px; color: #17a2b8; background-color: transparent; background-image: none; border-color: #17a2b8;">[back to content](#content)</button>

#### 自我评价

- 你的优势和劣势是什么？
- 最近在看什么书吗，有没有接触过什么新技术？
- 最有成就感的项目是什么？
- 未来的职业规划是什么？
- 最近一年内遇到的最有挑战的事情是什么？ 对下一家入职的公司主要看重哪些方面？
- 自己有哪些不足之处，准备如何提升？
- 项目中最难的地方是哪里？你学习到了什么？
- 简单描述一下自己是怎么样的人？
- 你的性格和技能上有什么缺点

#### 看法

- 与同事沟通的时候，如果遇到冲突了如何解决？
- 对加班有什么看法？
- 你用过...吗？说说对对...的看法，使用上有哪些优缺点
