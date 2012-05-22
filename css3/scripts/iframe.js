// JavaScript Document
$(function(){
	$("aside span").toggle(
		function(){
			$(this).parent().children("ul").show();
		},function(){
			$(this).parent().children("ul").hide();
		}
	);
})