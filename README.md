# touchScroll.js 帮助文档

- jQuery移动端滑动插件
- touchScroll.js v1.1.1
- copyright-BenjaVan
- 2017.7.22


### 结构模板
```html
<div class="box">
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    ...
  </ul>
</div>
```


### li浮动后 ul长度的设置
```javascript
$(function () {
  // 横向滑动
  // 需要设置ul长度
  var width = 0;
  $(".ul1 li").each(function () {
    width += $(this).outerWidth(true);
  })
  $(".ul1").width(Math.ceil(width));

  jQuery.touchScroll({
    swipeJQDom: '.box1', //父容器
    swipeDistance: '80', //缓冲距离
    // swipeType: 'x' //移动方向 此项不填写 默认为x
  })
})
```


## 使用插件
```javascript
(function () {
  jQuery.touchScroll({
    swipeJQDom: '.box', //父容器的选择器
    swipeDistance: '150', //缓冲距离
    swipeType: 'x' //移动方向 此项不填写 默认为x
  })
}());
```

## [查看效果](https://heroor.github.io/touchScroll/)
