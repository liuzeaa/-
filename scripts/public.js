~(function(){
	//->初始化内容区域高度
	function initContaniner(){
		var winHeight = $(window).height();
		var footerHeight = $('#footer').height();
		var headerHeight = $('#top').outerHeight();
		if(footerHeight&&headerHeight){
			$('#container').css('minHeight',(winHeight-footerHeight-headerHeight)+'px');
		}
	}
	$(function(){
		initContaniner();
		$(window).resize(function(){
			initContaniner();
		})
	})
})();
//表格操作
function tableSlide(){
	$('.table table tbody tr td').find('.operate').hover(function(){
		$(this).find('.operate_none').slideDown();
	},function(){
		$(this).find('.operate_none').stop().slideUp();
	})
}
//分类导航分配
function navTab(tabobj,tarobj){
	$(tabobj).children().click(function(){
		var n = $(this).index();
		$(this).addClass('selected').siblings().removeClass('selected');
		$(tarobj).children().eq(n).show().siblings().hide();
	})
}
//返回顶部
function backTop(backObj,speed){
	$(backObj).click(function(){
		$('html,body').animate({scrollTop:0},speed);
	})
}
/*************************************IFrame弹框方法***********************************************************/
var curWinindex;
function OpenIFrameWindow(title, url, width, height) {
    //iframe层
    var index = layer.open({
        type: 2,
        title: title,
        shadeClose: false,
        shade: 0.2,
        area: [width, height],
        content: url //iframe的url
    });
    curWinindex = index;
}
function CloseIFrameWindow() {
    layer.close(curWinindex);
}
function layerMsg(title) { //msg信息框
    layer.msg(title, {
        time: 0 //不自动关闭
        , btn: ['确定']
        , yes: function (index) {
            layer.close(index);
        }
    });
}
/****************************************结束********************************************************/
~function (pro) {
    //->地址栏参数/hash值
    function queryURLParameter() {
        var reg = /([^?=&#]+)=([^?=&#]+)/g,
            obj = {};
        this.replace(reg, function () {
            obj[arguments[1]] = arguments[2];
        });

        //->HASH
        reg = /#([^?=&#]+)/g;
        this.replace(reg, function () {
            obj['HASH'] = arguments[1];
        });
        return obj;
    }

    //->时间转换
    function formatTime(template) {
        template = template || '{0}年{1}月{2}日 {3}时{4}分{5}秒';
        var reg = /\d+/g,
            ary = this.match(reg);
        template = template.replace(/\{(\d+)\}/g, function () {
            var index = arguments[1],
                res = ary[index] || '00';
            res.length < 2 ? res = '0' + res : null;
            return res;
        });
        return template;
    }

    pro.formatTime = formatTime;
    pro.queryURLParameter = queryURLParameter;
}(String.prototype);