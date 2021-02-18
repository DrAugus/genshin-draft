# 个人信息

- 别盟尧/男/1996
- 本科/沈阳农业大学/计算机科学与技术
- 工作年限/经验：2年
- 期望职位：C++后端程序员/工程师
- 期望薪资：税前月薪12k-16k
- 期望城市：成都

# 联系方式

- 手机：`13309815331`
- 微信号：`13309815331`
- Email：`bramlye@outlook.com`
- QQ：`980652196`

# 专业技能

- 熟练使用`C++` `Javascript`
- 熟练使用`lambda`表达式及函数式编程
- 熟练使用`Cocos Creator`开发工具
- 熟练使用[`IntelliJ IDEA`](https://www.jetbrains.com/idea/?from=augus) [`WebStorm`](https://www.jetbrains.com/webstorm/?from=augus) [`CLion`](https://www.jetbrains.com/clion/?from=augus) [`DataGrip`](https://www.jetbrains.com/datagrip/?from=augus)
等开发环境
- 了解`php` `python` `java` `kotlin`等编程语言

# 工作经历

## 辽宁创胜网络科技有限公司

- 2020年8月 ~ 至今 **成都**分公司  
- 2019年5月 ~ 2020年7月 **沈阳**总公司

### 技术部-软件开发工程师

### 十三水游戏(扑克)

> 游戏介绍：每位玩家需将手上的十三张牌分成三副牌，互相比大小

- 从头开发全功能的十三水游戏。负责公司所有十三水项目的开发，入职至今迭代更新了近三十款具有地方特色、功能各不相同的十三水游戏。
- 全套逻辑设计有良好的代码风格，注重代码的健壮性与扩展性。独立的服务器逻辑设计能够方便测试进行全面覆盖的单元测试。
- 所有逻辑功能函数均支持多副扑克、多张百变牌实现。在百变玩法的设计中，采用逐个牌型按权值大小过滤，分块设计可转化的潜质函数，便于逻辑维护、扩展。
- 相关技术 `C++` `JavaScript` `Cocos Creator` `SQL server`

### 510K游戏(扑克)

> 游戏介绍：座位相对的玩家相配合，拿更多的分数和争取先将自己手中的牌打完。

- 负责510K所有服务器逻辑及游戏流程设计。
- 践行了客户端界面与服务器逻辑分离。所有逻辑功能均在服务器实现，客户端只负责消息的请求、接收与转发，不参与任何数据处理操作。得以良好控制玩家离线、断线重连之后的数据同步，更能防止非法玩家恶意修改游戏数据。
- 相关技术 `C++` `JavaScript` `Cocos Creator` `SQL server`

#### 引领新人

- 负责公司游戏环境搭建文档的编写以及维护，定期 Review 新人的代码，与其共同学习、成⻓。
- 入职至今先后培养了6位新员工。负责新员工的服务器、客户端逻辑及游戏流程的熟悉，引导新员工熟悉、掌握cocos的控件使用、脚本控制。

#### 第三方登录接入（安卓）

- [`Cocos Creator`默往登录接入](https://www.jianshu.com/p/558209ce40bb)
    + 登录入口使用`MConfigure.isMOAppInstalled()`方法优先检测app安装状态
    + 回调采用creator静态方法回调方法```jsb.reflection.callStaticMethod```

- [`Cocos Creator`LINE登录接入](https://www.jianshu.com/p/eb7ceb42e263)
    + 重写了适合`LINE`回调接收的`onActivityResult()`方法，以不同的`REQUEST_CODE`标识区分微信及其他第三方登录方法