// JavaScript Document
EventUtil.addHander(window,"resize",function(event) {
	autoHeight();
});
autoHeight();
//auto height
function autoHeight(){
	var pageHeight = window.innerHeight
	if(typeof pageHeight!="number") {
		if(document.compatMode=="CSS1Compat") {
			pageHeight = document.documentElement.clientHeight;
		} else {
			pageHeight = document.body.clientHeight;
		}
	}
	
	pageHeight = pageHeight - 100;
	document.getElementById("nav").style.height = pageHeight-30+"px";//nav的padding=30
	document.getElementById("content").style.height = pageHeight+"px";
}
//侧边导航条的展开收缩
$(function(){
	//将侧边栏目录收缩
	$(".folder").parent().children("ul").hide();
	//点击收缩展开目录
	$(".folder").toggle(function(){
		$(this).parent().children("ul").show();
	},function(){
		$(this).parent().children("ul").hide();
	});
})