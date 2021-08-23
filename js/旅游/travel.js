$(function(){
	
//	banner部分

	$('.banner-left>div').on('mouseenter',function(){
		$('.banner-left>div>dl').removeClass('banner-left-active');
		$(this).find('.dls').addClass('banner-left-active');
	});
	$('.banner-left').on('mouseleave',function(){
		$('.banner-left>div>dl').removeClass('banner-left-active');
		
	});
	
	$('.didian').find('input').focus(function(){
		$(this).next().next().show();
	});
	$('.tab-txt>div>a').on('click',function(){
		$('.tab-txt>div>a').removeClass('tab-txt-active');
		$(this).addClass('tab-txt-active');
		$(this).parent().parent().parent().parent().prev().prev().val($(this).text());
		$(this).parent().parent().parent().parent().hide();
	});
	$('.didian').siblings().click(function(){
		$('.didian>div').hide();
	});
	
//	滚动监听
	$(window).scroll(function(){
		console.log($(document).scrollTop());
		if ($(document).scrollTop() >= 353 && $(document).scrollTop() <= 2948) {
			$(".jianting").show();
		}else{
			$(".jianting").hide();
		}
		if ($(document).scrollTop() >= 0 && $(document).scrollTop() <= 1036) {
			$('.jianting>ul>li>a').removeClass('active');
			$('.jianting>ul>li').eq(1).find('a').addClass('active');
		}
		if ($(document).scrollTop() >= 1036 && $(document).scrollTop() <= 1808) {
			$('.jianting>ul>li>a').removeClass('active');
			$('.jianting>ul>li').eq(2).find('a').addClass('active');
		}
		if ($(document).scrollTop() >= 1808 && $(document).scrollTop() <= 2509) {
			$('.jianting>ul>li>a').removeClass('active');
			$('.jianting>ul>li').eq(3).find('a').addClass('active');
		}
		if ($(document).scrollTop() >= 2509) {
			$('.jianting>ul>li>a').removeClass('active');
			$('.jianting>ul>li').eq(4).find('a').addClass('active');
		}
	});
})
