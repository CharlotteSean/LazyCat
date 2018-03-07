LazyCat
=======

> 基于React-Native的轻社交App

技术栈
------

React Native + React Navigation + Mobx + AntDesign Mobile

项目安装
--------

```
    <!-- 克隆项目 -->
    git clone https://github.com/hicoldcat/LazyCat.git

    <!-- 打开项目文件夹 -->
    cd LazyCat

    <!-- 安装依赖 -->
    npm install

```

项目运行
--------

```
    <!-- android -->
    react-native run-android

    <!-- ios -->
    react-native run-ios
    <!-- ios 运行特定设备如 iPhone X-->
    react-native run-ios --simulator 'iPhone X'

```

```
说明：运行android时，必须保证android模拟器处于运行状态才能成功启动。运行ios必须在mac上。
```

项目结构
--------

```
|-- android                         // android原生的一些配置文件
|
|-- ios                             // ios原生的一些配置文件
|
|-- screenshots                      // 项目截图
|
|-- app                              // 源码目录
|   |-- assets                       // 项目公共资源
|   |-- components                   // 公共组件库
|   |-- config                       // 一些配置文件
|   |-- modules                      // 业务模块
|   |-- screen                       // screen级别的页面组件
|   |-- store                        // app仓库
|   |-- utils                        // 工具函数
|   |-- App.js                       // 项目根组件
|
|-- index.js                          //入口文件
|-- app.json                         // 关于项目的定义
|-- .babelrc                         // ES6语法编译配置
|-- .gitignore                       // 忽略的文件
|-- package.json                     // 项目及工具的依赖配置文件
|-- README.md                        // 说明

```

项目说明
--------

```
本项目主要是作为学习React Native的Demo项目。
```

项目截图
--------

项目贡献
--------

```
有任何的疑问或错误，欢迎提issue。
如有帮助请随手star。
```
