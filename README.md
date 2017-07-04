# jQuery-Flod-Grid
一个全屏网格折叠动画效果的jQuery插件

该插件适合在页面内容较多时，能够引导用户操作或者展示网站概要信息的作用。

ps:由于本插件使用了大量CSS3属性，对于低版本浏览器（如ie9以下版本等不支持CSS3属性的浏览器）不兼容。

**demo**：[线上地址](https://yangyunhe369.github.io/jQuery-Flod-Grid/)

## 下载源码

```
git clone https://github.com/yangyunhe369/jQuery-Flod-Grid.git
```

## 使用方法

``` javascript
调用轮播插件：
Html：
<div class="loading_btns">
  <div class="btn_logo"></div>
</div>
<div class="loading_zzc"></div>
<div class="preloader">
  <div class="square_box"></div>
</div>
Javascript：
$('body').FlodGrid({
  shadeTime: 1000, //遮罩层遮挡网格时长
  flodTime: 1000, //初始化页面执行网格折叠动画的延迟时长
  showBtnTime: 4500 //折叠动画开始至显示按钮的延迟时长
});
```

## 说明

如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^

或者您可以 "follow" 一下，我会不断开源更多的有趣的项目

## 个人简介
作者：弦云孤赫(David Yang)

职业：web前端开发工程师

爱好：网游、音乐（吉他）

## 联系方式
QQ：314786482

微信：yangyunhe_yyh

坐标：四川成都
