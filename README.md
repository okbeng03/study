# study

## 准备
----
1. 代码规范
[google html/css style guide](https://google.github.io/styleguide/htmlcssguide.xml)
[google javascript style guide](https://google.github.io/styleguide/javascriptguide.xml)
2. 编辑器
	* emmet
	* fommat(代码格式化)
	* 代码检查
	* doc 文档（注释格式）
	* 代码片段
	
[参照sublime的一些插件](http://www.oschina.net/translate/20-powerful-sublimetext-plugins)

### 计划学习时间：1~2天

## html、css
----
1. 了解html标签，语义化
[w3school html参考手册](http://www.w3school.com.cn/tags/index.asp)
[MDN html参考手册](https://developer.mozilla.org/zh-CN/docs/Web/html)

	任务：在一个页面demo上使用所有标签
	* 了解每个标签的语义
	* 了解在各个浏览器中的默认样式，重置各个浏览器中默认样式不一样的地方（reset.css）
	* 区分块状元素、行内元素
2. 选择器优先级
3. 盒模型
4. 文档流

	任务：水平垂直居中
	多尝试几种居中方式
	* 文本水平居中
	* 列表水平居中
	* div水平居中
	* 文本垂直居中
	* div垂直居中
	* 图片水平垂直居中

### 计划学习时间：2~3天

5. 布局
	* 浮动布局
		* 两列、三列布局
	* 定位布局
	* 栅格布局
	
	[学习css布局](http://zh.learnlayout.com/no-layout.html)

	**书籍-【css禅意花园】尝试去实现里面自己喜欢的一两个例子。**
	
	相关知识点：
	
		* box-sizing
		* 清浮动
	
	进阶：

	    * 媒体查询
	    * 响应式布局
	    * flexbox
	    * grid
	
	任务：
	
		1. 完成一个两列布局，左边固定、右边自适应，页面宽度990居中
		2. 完成一个三列布局，左右固定，中间自适应，全屏
		3. 完成一个上中下布局，上下各50px，中间铺满
	
### 计划学习时间：4天

6. css sprite(图片精灵)
7. ps切图
8. html5/css3
9. sass/less css pre-processor
10. 浏览器兼容性问题
练习过程中兼容IE6、7、8、9、10，chrome、firefox
记录遇到的兼容性问题以及解决方法
11.  [bootstrap](http://www.bootcss.com/)

### 计划学习时间：6天

任务：完成【运营服务平台首页】开发，详见视觉稿

要求：

	1. 头可以不实现，占位置即可
	2. 兼容ie6、7、8、9、10，chrome、firefox
	3. icon使用图片精灵
	4. html模块化，各个模块互相不影响
	5. 图片可以使用占位图
	6. 只需要完成demo，暂不需要js
	7. 页面还原度高
	8. 可以考虑在一些地方添加动效
	
### 计划学习时间：10天

### 第一部分计划学习时间：25天 截止日期：12月30日

## javascript
----
1. 原型链、作用域链
1. DOM
2. BOM
3. AMD/CMD 学习require.js

任务：
* 尝试去实现一套表单结构和表单校验逻辑，可以参考bootstrap
* 封装swipe组件，学习
https://github.com/thebird/swipe

### 计划学习时间：15天 截止日期：1月20日

## jquery
----
1. jquery API熟悉
[jquery API中文](http://www.css88.com/jqapi-1.9/)

任务：
* 使用jquery继续【运营服务平台首页】的js部分
	1. 焦点图轮播
	2. 楼层tab切换
	3. 公告轮播marqueen
	
### 计划学习时间：10天 截止日期：2月13日

## 模板
----
1. handlebar

任务：
【运营服务平台首页】-基础服务楼层

要求：
为了提高页面性能，页面非初始化展示的地方不渲染，直到tab切换展示的时候才从后台读取接口渲染模板插入到页面中。

	1. 定义数据接口模型
	2. 数据本地mock，不需要服务器读取
	3. 使用handlebar模板

### 计划学习时间：7天 截止日期：2月25日

## 参考
----
* [w3cfuns前端教程](http://www.w3cfuns.com/course.php)
* [w3cfuns前端入门教程](http://www.w3cfuns.com/topic-64.html)
* [慕课网前端学习计划](http://www.imooc.com/course/programdetail/pid/32)
