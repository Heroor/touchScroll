# touchScroll.js 帮助文档

- jQuery移动端滑动插件
- touchScroll.js v1.1.1
- copyright-BenjaVan
- 2017.4.23


### 结构模板
	<div class="box">
		<ul>
			<li>1</li>
			<li>2</li>
			<li>3</li>
			...
		</ul>
	</div>


### li浮动后 ul长度的设置
	(function () {
		var width = 0;
			$("ul li").each(function () {
				width += $(this).outerWidth(true);
			})
		$("ul").width(width);
	}());


## 使用插件
	(function () {
		jQuery.touchScroll({
			swipeJQDom: '.box', //父容器的选择器
			swipeDistance: '150', //缓冲距离
			swipeType: 'x' //移动方向 此项不填写 默认为x
		})
	}());
## [查看效果](https://heroor.github.io/touchScroll/)
