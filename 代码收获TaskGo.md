# 微信小程序TaskGo

笔记均在侧栏中写出

## 背景介绍

TaskGo任务行，我看行！一个专门为校内六号楼宿舍送水小哥量身设计的软件，有三个界面“发布订单”“接受订单”“订单详情”，可以帮送水小哥一键接收所有订单，还可以分别统计当天已完成和未完成的订单，还有用户下单时间和完成订单时间的记录，以便日后查询。

## 前提须知

### 如果是用别人的模型，那么自己需要手动更改一些参数

+ uiils/app.js中更改data中的数据
+ ![](http://oz3rf0wt0.bkt.clouddn.com/18-1-1/85076351.jpg)
+ ![](http://oz3rf0wt0.bkt.clouddn.com/18-1-1/98129041.jpg)

### 凡写一个界面(新建一个目录)，都必须在app.json中先声明

![](http://oz3rf0wt0.bkt.clouddn.com/18-1-1/74752419.jpg)

### 点击按钮实现跳转 很简单 两行

![](http://oz3rf0wt0.bkt.clouddn.com/18-1-1/22014622.jpg)

### 后端接口

![](http://leaf.marklux.cn/api/doc/38)

## 主页

![](http://oz3rf0wt0.bkt.clouddn.com/18-1-1/80897542.jpg)

# receive部分

## receive.js

![](http://oz3rf0wt0.bkt.clouddn.com/18-1-1/16544842.jpg)

![](http://oz3rf0wt0.bkt.clouddn.com/18-1-1/65893149.jpg)

![](http://oz3rf0wt0.bkt.clouddn.com/18-1-1/79357868.jpg)

![](http://oz3rf0wt0.bkt.clouddn.com/18-1-1/1441934.jpg)

![](http://oz3rf0wt0.bkt.clouddn.com/18-1-1/67349566.jpg)

## receive.wxml

![](http://oz3rf0wt0.bkt.clouddn.com/18-1-1/15520609.jpg)

## receive.json

设置顶部的内容

## receive.wxss

设置字体大小、间距、颜色之类的

# order部分

![](http://oz3rf0wt0.bkt.clouddn.com/18-1-2/55540192.jpg)

![](http://oz3rf0wt0.bkt.clouddn.com/18-1-2/62294354.jpg)

## order.wxml

+ 条件渲染 wx:if
	+ 在框架中，我们用wx:if="{{condition}}"来判断是否需要渲染该代码块
```
<view wx:if="{{condition}}"> True </view>
```
	+ 也可以用wx:elif和wx:else来添加一个else块：
```
<view wx:if="{{length > 5}}"> 1 </view>
<view wx:elif="{{length > 2}}"> 2 </view>
<view wx:else> 3 </view>
```

代码：
![](http://oz3rf0wt0.bkt.clouddn.com/18-1-2/35107690.jpg)


![](http://oz3rf0wt0.bkt.clouddn.com/18-1-2/63004418.jpg)

从上到写 分别对应
![](http://oz3rf0wt0.bkt.clouddn.com/18-1-2/56900710.jpg)

## order.js

![](http://oz3rf0wt0.bkt.clouddn.com/18-1-2/55658059.jpg)

![](http://oz3rf0wt0.bkt.clouddn.com/18-1-2/78127052.jpg)

![](http://oz3rf0wt0.bkt.clouddn.com/18-1-2/56398708.jpg)


![](http://oz3rf0wt0.bkt.clouddn.com/18-1-2/75951170.jpg)

![](http://oz3rf0wt0.bkt.clouddn.com/18-1-2/6654953.jpg)