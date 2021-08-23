$(function(){
//	banner部分
	$('.banner-nav-s>li').on('click',function(){
		$(this).siblings().removeClass('banner-active');
		$(this).addClass('banner-active');
	});
	$('.banner-active-one>.banner-box-right>ul>li').click(function(){
		$(this).siblings().removeClass('banner-nav-h-active');
		$(this).addClass('banner-nav-h-active');
	});
	$('.banner-active-two>.banner-box-right>ul>li').click(function(){
		$(this).siblings().removeClass('banner-nav-h-active');
		$(this).addClass('banner-nav-h-active');
	});
	$('.banner-active-three>.banner-box-right>ul>li').click(function(){
		$(this).siblings().removeClass('banner-nav-h-active');
		$(this).addClass('banner-nav-h-active');
	});
	$('.banner-active-four>.banner-box-right>ul>li').click(function(){
		$(this).siblings().removeClass('banner-nav-h-active');
		$(this).addClass('banner-nav-h-active');
	});
	$('.banner-active-five>.banner-box-right>ul>li').click(function(){
		$(this).siblings().removeClass('banner-nav-h-active');
		$(this).addClass('banner-nav-h-active');
	});
	
//	下拉
	$('.jibie>ul>li>a').on('click',function(){
		$('.jibie>input').val($(this).text())
	});
//	目的地
	$('.mudi').find('input').focus(function(){
		$(this).next().show();
	});
	$('.tab-txt>div>a').on('click',function(){
		$('.tab-txt>div>a').removeClass('tab-txt-active');
		$(this).addClass('tab-txt-active');
		$(this).parent().parent().parent().parent().prev().val($(this).text());
		$(this).parent().parent().parent().parent().hide();
	});
	$('.mudi').siblings().click(function(){
		$('.mudi>div').hide();
	});
})
