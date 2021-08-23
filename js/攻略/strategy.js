//strategy_body_1

//strategy_body_1left_yc
$('.strategy_body_1left>ul>li>span').css('display','none')
$('.strategy_body_1left>ul').children('li').mouseenter(function(){
	$(this).children('.strategy_body_1left_yc').css('display','block')
	$(this).children('li>span').css('display','block')
})
$('.strategy_body_1left>ul').children('li').mouseleave(function(){
	$(this).children('.strategy_body_1left_yc').css('display','none')
	$(this).children('li>span').css('display','none')
})




//console.log($('.strategy_body_1left>ul').children('li'))







//月度推荐tabs

var ind = 1;
//点击
$('.strategy_body_3>ul>li').bind({
	click:function(){
	if (ind) {
		ind = 0;
		$(this).children('span:first').css({
		'background':'#1ab2db',
		'color':'white',
		'border-radius':'5px 5px 5px 5px'
		})
		$(this).children('span').eq(1).css('display','block')
	} else{
		ind = 1;
	}
},
//移入			
	mouseover:function(){
	//开关打开时
	if (ind) {
		//选中自己
		$(this).children('span:first').css({
		'background':'#1ab2db',
		'color':'white',
		'border-radius':'2px 2px 2px 2px'
		})
		$(this).children('span').eq(1).css('display','block')
	} 
},
//移出
	mouseout:function(){
	//开关关闭时
	if (!ind) {
		return ;
	} else{
	$(this).children('span:first').css({
		'background':'',
		'color':'',
		'border-radius':'0px'
		})
	$(this).children('span').eq(1).css('display','none')
	}
	}
});

//点击
$('.strategy_body_4>ul>li').bind({
	click:function(){
	if (ind) {
		ind = 0;
		$(this).css({
		'background':'#1ab2db',
		'border-radius':'2px 2px 2px 2px'
		})
		$(this).children('a').css('color','white')
	} else{
		ind = 1;
	}
},
//移入			
	mouseover:function(){
	//开关打开时
	if (ind) {
		//选中自己
		$(this).css({
		'background':'#1ab2db',
		'border-radius':'2px 2px 2px 2px'
		})
		$(this).children('a').css('color','white')
	} 
},
//移出
	mouseout:function(){
	//开关关闭时
	if (!ind) {
		return ;
	} else{
	$(this).css({
		'background':'',
		'border-radius':'0px'
		})
	$(this).children('a').css('color','black')
	}
	}
});
