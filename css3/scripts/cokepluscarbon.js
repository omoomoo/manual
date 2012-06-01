// JavaScript Document
var EventUtil = {
	addHander:function(element, type, handler){
		if(element.addEventListener){
			element.addEventListener(type, handler, false);
		} else if(element.attachEvent){
			element.attachEvent("on"+type, handler);
		} else {
			element["on"+type]=handler;
		}
	},
	removeHandler:function(element, type, handler){
		if(element.removeEventListener){
			element.removeEventListener(type, handler, false);
		} else if(element.detachEvent){
			element.detachEvent("on"+type, handler);
		} else {
			element["on"+type]=null;
		}
	}
};

//由radio控制样式，radio的value值为array数组，以style-property:value值的形式保存
var MyUtil = {
	radioChangeCss:function(radioList, target, cssProperty){
		for(var i=0,len=radioList.length;i<len;i++) {
			EventUtil.addHander(radioList.item(i), "click", function(){
				var value = this.value;
				target.style[cssProperty]=value+"";
			});
		}
	}
};

