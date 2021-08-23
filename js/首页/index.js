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
		$(this).next().css('display','block');
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
//	section部分
	
	$('.section-one-top>ul>span').on('mouseenter',function(){
		$('.section-one-top>ul>span>span').removeClass('glyphicon-chevron-down');
		$('.section-one-top>ul>span>span').addClass('glyphicon-chevron-up');
		$('.down').show();
	});
	$('.down>span').on('click',function(){
		$('.section-one-top>ul>span>span').removeClass('glyphicon-chevron-up');
		$('.section-one-top>ul>span>span').addClass('glyphicon-chevron-down');
		$('.down').hide();
	});
	$('.section-one-top .down>div>p>a').on('click',function(){
		$(this).parent().next().find('a').removeClass('section-one-top-chao-active');
		$(this).parent().prev().find('a').removeClass('section-one-top-chao-active');
		$(this).siblings().removeClass('section-one-top-chao-active');
		$(this).addClass('section-one-top-chao-active');
	});
	$('.section-one-tops>div>a').on('click',function(){
		$(this).siblings().removeClass('section-one-top-chao-active');
		$(this).addClass('section-one-top-chao-active');
	});
	$('.section-one-top>ul>li').on('click',function(){
		$(this).siblings().removeClass('section-one-top-active');
		$(this).addClass('section-one-top-active');
	});
	$('.section-one-top .down>div>ul>li').on('click',function(){
		$(this).siblings().removeClass('section-one-top-active');
		$(this).addClass('section-one-top-active');
	});
	$('.section-one-img dd>p>a').on('click',function(){
		console.log()
		$(this).parent().parent().parent().parent().find('a').removeClass('section-one-top-chao-active');
		$(this).parent().parent().parent().parent().find('a').removeClass('section-one-top-chao-active');
		$(this).siblings().removeClass('section-one-top-chao-active');
		$(this).addClass('section-one-top-chao-active');
	});
	$('.sec-one>ul>li').eq(0).click(function(){
		$(this).parent().parent().next().next().find('ul>li>img').attr('src','../img/首页/index/sy-taiwan.jpg');
		$(this).parent().parent().next().next().find('div li>div').show();
	});
	$('.sec-one>ul>li').eq(1).click(function(){
		$(this).parent().parent().next().next().find('ul>li>img').attr('src','../img/首页/index/sy-hainan.jpg');
		$(this).parent().parent().next().next().find('div li>div').hide();
	});
	
	$('.sec-two>ul>li').eq(0).click(function(){
		$(this).parent().parent().next().next().find('ul>li>img').attr('src','../img/首页/index/sy-hainan.jpg');
	});
	$('.sec-two>ul>li').eq(1).click(function(){
		$(this).parent().parent().next().next().find('ul>li>img').attr('src','../img/首页/index/sy-taiwan.jpg');
	});
	$('.sec-two>ul>li').eq(2).click(function(){
		$(this).parent().parent().next().next().find('ul>li>img').attr('src','../img/首页/index/sy-xsbn.jpg');
	});
	$('.sec-four>ul>li').eq(0).click(function(){
		$(this).parent().parent().next().find('ul>li>img').attr('src','../img/首页/index/sy-xsbn.jpg');
	});
	$('.sec-four>ul>li').eq(1).click(function(){
		$(this).parent().parent().next().find('ul>li>img').attr('src','../img/首页/index/sy-hainan.jpg');
	});
	$('.sec-four>ul>li').eq(2).click(function(){
		$(this).parent().parent().next().find('ul>li>img').attr('src','../img/首页/index/sy-taiwan.jpg');
	});
//	旅游合作
	$(function(){
		var index = 0;
		setInterval(function(){
			index-=100;
			if(500 <= -$(".lyhz-tubiao>div").position().top){
				index = 0;
			}
			$(".lyhz-tubiao>div").css('top',index);
		},2000);
	});
	
});

//滚条屏幕
$(function(){
	
	$(window).scroll(function(){
//		console.log($(document).scrollTop());
		if ($(document).scrollTop() >= 280 && $(document).scrollTop() <= 2948) {
			$(".jianting").show();
		}else{
			$(".jianting").hide();
		}
		if ($(document).scrollTop() >= 0 && $(document).scrollTop() <= 924) {
			$('.jianting>ul>li>div').removeClass('jianting-xian');
			$('.jianting>ul>li').eq(0).find('div').addClass('jianting-xian');
		}
		if ($(document).scrollTop() >= 924 && $(document).scrollTop() <= 1688) {
			$('.jianting>ul>li>div').removeClass('jianting-xian');
			$('.jianting>ul>li').eq(1).find('div').addClass('jianting-xian');
		}
		if ($(document).scrollTop() >= 1688 && $(document).scrollTop() <= 2400) {
			$('.jianting>ul>li>div').removeClass('jianting-xian');
			$('.jianting>ul>li').eq(2).find('div').addClass('jianting-xian');
		}
		if ($(document).scrollTop() >= 2400) {
			$('.jianting>ul>li>div').removeClass('jianting-xian');
			$('.jianting>ul>li').eq(3).find('div').addClass('jianting-xian');
		}
	});
});
