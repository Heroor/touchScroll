/* !
 * jQuery扩展滑动插件
 * touchScroll.js v1.1.1
 * copyright-BenjaVan
 * 2017.4.23
 */

(function () {
	//返回构造函数
	jQuery.touchScroll = function (config) {
		return new jQuery.touchScroll.init(config);
	};

	//构造实例
	jQuery.touchScroll.init = function (config) {
		this.swipeDistance	= +config.swipeDistance; //缓冲距离
		this.swipeJQDom 	= jQuery(config.swipeJQDom); //操作的元素
		this.swipeType 		= (config.swipeType || 'X').toUpperCase(); //滑动方向
		this.type 			= this.parseType(this.swipeType); //转换宽高类型
		this.innerHW 		= this.swipeJQDom.children()[this.type](); //内部元素的宽或高
		this.posi 			= 0;//记录位置
		this.swipe();
	};

	// 添加原型
	scrollInit = jQuery.touchScroll.init;
	scrollInit.prototype = {
		constructor: jQuery.touchScroll.init,

		//移动元素
		moveSonDom: function (dis) {
			this.swipeJQDom.children()
				.css({
					'transform': 'translate'+ this.swipeType +'('+ dis +'px)',
					'transition': 'none'
				});
		},

		//恢复元素位置
		resetDom: function () {
			var type = this.type;
			var len = null;

			if ( this.posi > 0 ) {
				len = 0;
			}else if ( this.posi < (this.swipeJQDom[type]() - this.innerHW) ) {
				len = this.swipeJQDom[type]() - this.innerHW;
			}
			if ( len !== null ) {
				this.swipeJQDom.children()
					.css({
						'transform': 'translate'+ this.swipeType +'('+ len +'px)',
						'transition': 'all .2s'
					});
				this.posi = len;
			}
		},

		//滑动事件
		swipe: function () {
			var JQDom 		= this.swipeJQDom; //操作的元素
			var swipeType 	= this.swipeType; //滑动方向
			
			var start,
				move,
				distance,
				newDis  = 0,
				that = this;

			//父容器比元素大则不设置拖动
			if (this.swipeJQDom[this.type]() > this.innerHW) {
				return;
			}

			JQDom.on('touchstart', function (e) {
				start = e.originalEvent.touches[0]['client' + swipeType];
			});

			JQDom.on('touchmove', function (e) {
				move 		= e.originalEvent.touches[0]['client' + swipeType];
				distance 	= move - start;
				newDis 		= distance + that.posi;
				if (newDis > that.swipeDistance) {
					newDis = that.swipeDistance;
				}
				if (newDis < (that.swipeJQDom[that.type]() - that.innerHW) - that.swipeDistance) {
					newDis = (that.swipeJQDom[that.type]() - that.innerHW) - that.swipeDistance;
				}
				that.moveSonDom(newDis);
			});

			JQDom.on('touchend', function () {
				that.posi 	= newDis;
				that.resetDom();
				newDis = that.posi;
			});
		},

		//方向转换
		parseType: function (str) {
			return str === 'X'? 'outerWidth': 'outerHeight';
		}
	};
}());