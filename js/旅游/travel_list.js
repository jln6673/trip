$(function(){
	
//	路线选择
	var kaiguan1 = 0;
	var kaiguan2 = 0;
	var kaiguan3 = 0;
	var kaiguan4 = 0;
//	出发城市
	$('.lvyou>div>.xuan1>span').click(function(){
		if (kaiguan1 == 0) {
		$(this).addClass('shouqi').html('收起<span class="iconfont icon-shouqi"></span>').parent().find('a').css('margin-left','35px').prepend('<input type="checkbox"/>');
		kaiguan1++;
		}else{
			$(this).removeClass('shouqi').html('多选+').parent().find('a').css('margin-left','15px').find('input').remove();
			kaiguan1 = 0;
		}
	});
	$('.lvyou>div>.xuan1>a').click(function(){
		var city = '';
		$('.lvyou>div>.xuan1>a>input').each(function(){
			if ($(this).is(':checked')) {
				city +=$(this).parent().text()+' ';
			}
		});
		if(city.length == 0){
			$('.lvyou>div>p:nth-of-type(1)>span:nth-of-type(1)').hide();
		}else{
			$('.lvyou>div>p:nth-of-type(1)>span:nth-of-type(1)').show();
		}
		$('.lvyou>div>p:nth-of-type(1)>span:nth-of-type(1)>span:nth-of-type(1)').text(city+' ');
	});
	$('.lvyou>div>p:nth-of-type(1)>span:nth-of-type(1)>span:nth-of-type(2)').on('click',function(){
		$(this).parent().hide();
	});
//	游玩路线
	$('.lvyou>div>.xuan2>span').click(function(){
		if (kaiguan2 == 0) {
		$(this).addClass('shouqi').html('收起<span class="iconfont icon-shouqi"></span>').parent().find('a').css('margin-left','35px').prepend('<input type="checkbox"/>');
		kaiguan2++;
		}else{
			$(this).removeClass('shouqi').html('多选+').parent().find('a').css('margin-left','15px').find('input').remove();
			kaiguan2 = 0;
		}
	});
	$('.lvyou>div>.xuan2>a').click(function(){
		var city = '';
		$('.lvyou>div>.xuan2>a>input').each(function(){
			if ($(this).is(':checked')) {
				city +=$(this).parent().text()+' ';
			}
		});
		if(city.length == 0){
			$('.lvyou>div>p:nth-of-type(1)>span:nth-of-type(2)').hide();
		}else{
			$('.lvyou>div>p:nth-of-type(1)>span:nth-of-type(2)').show();
		}
		$('.lvyou>div>p:nth-of-type(1)>span:nth-of-type(2)>span:nth-of-type(1)').text(city+' ');
	});
	$('.lvyou>div>p:nth-of-type(1)>span:nth-of-type(2)>span:nth-of-type(2)').on('click',function(){
		$(this).parent().hide();
	});
//	出发日期
	$('.lvyou>div>.xuan3>span').click(function(){
		if (kaiguan3 == 0) {
		$(this).addClass('shouqi').html('收起<span class="iconfont icon-shouqi"></span>').parent().find('a').css('margin-left','35px').prepend('<input type="checkbox"/>');
		kaiguan3++;
		}else{
			$(this).removeClass('shouqi').html('多选+').parent().find('a').css('margin-left','15px').find('input').remove();
			kaiguan3 = 0;
		}
	});
	$('.lvyou>div>.xuan3>a').click(function(){
		var city = '';
		$('.lvyou>div>.xuan3>a>input').each(function(){
			if ($(this).is(':checked')) {
				city +=$(this).parent().text()+' ';
			}
		});
		if(city.length == 0){
			$('.lvyou>div>p:nth-of-type(1)>span:nth-of-type(3)').hide();
		}else{
			$('.lvyou>div>p:nth-of-type(1)>span:nth-of-type(3)').show();
		}
		$('.lvyou>div>p:nth-of-type(1)>span:nth-of-type(3)>span:nth-of-type(1)').text(city+' ');
	});
	$('.lvyou>div>p:nth-of-type(1)>span:nth-of-type(3)>span:nth-of-type(2)').on('click',function(){
		$(this).parent().hide();
	});
//	行程天数
	$('.lvyou>div>.xuan4>span').click(function(){
		if (kaiguan4 == 0) {
		$(this).addClass('shouqi').html('收起<span class="iconfont icon-shouqi"></span>').parent().find('a').css('margin-left','35px').prepend('<input type="checkbox"/>');
		kaiguan4++;
		}else{
			$(this).removeClass('shouqi').html('多选+').parent().find('a').css('margin-left','15px').find('input').remove();
			kaiguan4 = 0;
		}
	});
	$('.lvyou>div>.xuan4>a').click(function(){
		var city = '';
		$('.lvyou>div>.xuan4>a>input').each(function(){
			if ($(this).is(':checked')) {
				city +=$(this).parent().text()+' ';
			}
		});
		if(city.length == 0){
			$('.lvyou>div>p:nth-of-type(1)>span:nth-of-type(4)').hide();
		}else{
			$('.lvyou>div>p:nth-of-type(1)>span:nth-of-type(4)').show();
		}
		$('.lvyou>div>p:nth-of-type(1)>span:nth-of-type(4)>span:nth-of-type(1)').text(city+' ');
	});
	$('.lvyou>div>p:nth-of-type(1)>span:nth-of-type(4)>span:nth-of-type(2)').on('click',function(){
		$(this).parent().hide();
	});
});
