//星星
//开关
var kg = 1;
//点击


$('.a1').bind({click:function(){if(kg){kg = 0;$('.xing1>span').html($(this).attr('title'));} else{kg = 1;}},mouseover:function(){if(kg){$(this).css('backgroundPosition','0 -28px').prevAll().css('backgroundPosition','0 -28px');} },mouseout:function(){if(!kg){return;}else{$(this).css('backgroundPosition','0 0').siblings().css('backgroundPosition','0 0');}}});
$('.a2').bind({click:function(){if(kg){kg = 0;$('.xing2>span').html($(this).attr('title'));} else{kg = 1;}},mouseover:function(){if(kg){$(this).css('backgroundPosition','0 -28px').prevAll().css('backgroundPosition','0 -28px');} },mouseout:function(){if(!kg){return;}else{$(this).css('backgroundPosition','0 0').siblings().css('backgroundPosition','0 0');}}});
$('.a3').bind({click:function(){if(kg){kg = 0;$('.xing3>span').html($(this).attr('title'));} else{kg = 1;}},mouseover:function(){if(kg){$(this).css('backgroundPosition','0 -28px').prevAll().css('backgroundPosition','0 -28px');} },mouseout:function(){if(!kg){return;}else{$(this).css('backgroundPosition','0 0').siblings().css('backgroundPosition','0 0');}}});
$('.a4').bind({click:function(){if(kg){kg = 0;$('.xing4>span').html($(this).attr('title'));} else{kg = 1;}},mouseover:function(){if(kg){$(this).css('backgroundPosition','0 -28px').prevAll().css('backgroundPosition','0 -28px');} },mouseout:function(){if(!kg){return;}else{$(this).css('backgroundPosition','0 0').siblings().css('backgroundPosition','0 0');}}});
$('.a5').bind({click:function(){if(kg){kg = 0;$('.xing5>span').html($(this).attr('title'));} else{kg = 1;}},mouseover:function(){if(kg){$(this).css('backgroundPosition','0 -28px').prevAll().css('backgroundPosition','0 -28px');} },mouseout:function(){if(!kg){return;}else{$(this).css('backgroundPosition','0 0').siblings().css('backgroundPosition','0 0');}}});
$('.a6').bind({click:function(){if(kg){kg = 0;$('.xing6>span').html($(this).attr('title'));} else{kg = 1;}},mouseover:function(){if(kg){$(this).css('backgroundPosition','0 -28px').prevAll().css('backgroundPosition','0 -28px');} },mouseout:function(){if(!kg){return;}else{$(this).css('backgroundPosition','0 0').siblings().css('backgroundPosition','0 0');}}});

//统计图
var tongjitu = document.querySelector('#main'),
	myChart = echarts.init(tongjitu);
	
var option = {
    title: {
        text: '成都最近1~2周各旅游景点人数',
        left: 'center',
        textStyle: {
            fontSize: '30',
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['03-01', '03-10', '03-20', '03-30', '04-01', '04-10', '04-20', '04-30', '05-01', '05-10', '05-20', '05-30']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '杜甫草堂',
            type: 'line',
          //  stack: '总量',
            data: [723, 642, 618, 745, 648, 649, 700, 745, 618, 765, 779, 600],
            markLine: {data: [{type: 'average', name: '平均值'}]}
        },
        {
            name: '都江堰',
            type: 'line',
          //  stack: '总量',
            data: [443, 352, 418, 345, 448, 349, 300, 352, 418, 445, 348, 449,300],
            markLine: {data: [{type: 'average', name: '平均值'}]}
        },
        {
            name: '黄龙溪古镇',
            type: 'line',
          //  stack: '总量',
            data: [143, 452, 718, 885, 848, 890, 900, 972, 998, 825, 888, 949,800],
            markLine: {data: [{type: 'average', name: '平均值'}]}
        }
    ]
};


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);


//固定定位判断

$('.methodDetail_guding>ul>li').mouseenter(function(){
	$(this).css('background','#1448ad')
	$(this).find('hr').css('background','white')
})
$('.methodDetail_guding>ul>li').click(function(){
	$(this).css('background','#1448ad')
	$(this).find('hr').css('background','white')
})
$('.methodDetail_guding>ul>li').mouseleave(function(){
	$('.methodDetail_guding>ul>li').css('background','gainsboro')
	$(this).find('hr').css('background','black')
})

$(function(){
	$(window).scroll(function(){
		console.log( $(document).scrollTop() );
		if($(document).scrollTop() >= 735 && $(document).scrollTop()<= 1565){
			$('.methodDetail_guding>ul>li:nth-of-type(1)').css('background','#1448ad')
			$('.methodDetail_guding>ul>li:nth-of-type(2)').css('background','gainsboro')
			$('.methodDetail_guding>ul>li:nth-of-type(3)').css('background','gainsboro')
			$('.methodDetail_guding>ul>li:nth-of-type(4)').css('background','gainsboro')
		}
		if($(document).scrollTop() >= 1565 && $(document).scrollTop() <= 2235){
			$('.methodDetail_guding>ul>li:nth-of-type(1)').css('background','gainsboro')
			$('.methodDetail_guding>ul>li:nth-of-type(2)').css('background','#1448ad')
			$('.methodDetail_guding>ul>li:nth-of-type(3)').css('background','gainsboro')
			$('.methodDetail_guding>ul>li:nth-of-type(4)').css('background','gainsboro')
		}
		if($(document).scrollTop() >= 2235 && $(document).scrollTop() <= 2935){
			$('.methodDetail_guding>ul>li:nth-of-type(1)').css('background','gainsboro')
			$('.methodDetail_guding>ul>li:nth-of-type(2)').css('background','gainsboro')
			$('.methodDetail_guding>ul>li:nth-of-type(3)').css('background','#1448ad')
			$('.methodDetail_guding>ul>li:nth-of-type(4)').css('background','gainsboro')
		}
		if($(document).scrollTop() >= 2935 && $(document).scrollTop() <= 3534){
			$('.methodDetail_guding>ul>li:nth-of-type(1)').css('background','gainsboro')
			$('.methodDetail_guding>ul>li:nth-of-type(2)').css('background','gainsboro')
			$('.methodDetail_guding>ul>li:nth-of-type(3)').css('background','gainsboro')
			$('.methodDetail_guding>ul>li:nth-of-type(4)').css('background','#1448ad')
		}
		if($(document).scrollTop() >3535){
			$('.methodDetail_guding').css('display','none')
		}
		if($(document).scrollTop() >= 735 && $(document).scrollTop()<= 3534){
			$('.methodDetail_guding').css('display','block')
		}
		if($(document).scrollTop() <735){
			$('.methodDetail_guding').css('display','none')
		}
	})
})


