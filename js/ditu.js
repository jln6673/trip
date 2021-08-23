var myChart = echarts.init(document.getElementById('main'));
		var option = {
			baseOption: {
				tooltip: {
					trigger: 'item',
					formatter : function (params) {
//						console.log(params)
						var mapVal = {
							'5': '拥堵',
							'10': '缓慢',
							'20': '缓慢',
							'50': '畅通',
							'80': '拥堵',
							'70': '拥堵',
						}
						if (params.seriesType) {							
							return params.name + ': ' + mapVal[params.value];
						} else {
							return params.name;
						}
					}
				},
				visualMap: [{
					type: 'piecewise',
					splitNumber: 3,
					min: 0,
					max: 100,
					left: 'right',
					top: 'middle',
					calculable: true,
					show: true,
					seriesIndex: 0,
					inRange: {
						color: ["blue", "pink", "red"],
						symbolSize: [1, 100]
					},
					formatter: function (value) {
//						console.log(value)
						if (value < 10) {
							return '旅游人数<10w';
						} else if (value > 10 && value < 35) {
							return '10w<旅游人数<35w';
						} else {
							return '旅游人数>50w';
						}
					}
				}],
				timeline: {
					axisType: 'category',
					// label: {
					// 	formatter: function (s) {
					// 		return (new Date(s)).getFullYear();
					// 	}
					// },
					autoPlay: true,
					playInterval: 4000,
					data: [
						'2016/11/19', '2016/11/20', '2016/11/21'
					]
				}
			},
			options: [{
				title: {
					text: '预计三天内全国旅游景点旅游人数图',
					left: 'center'
				},
				series: [{
					type: 'map',
					map: 'china',
					data: [{
						name: '重庆',
						value: 1
					}, {
						name: '云南',
						value: 50
					}, {
						name: '辽宁',
						value: 50
					}, {
						name: '黑龙江',
						value: 50
					}, {
						name: '广西',
						value: 50
					}, {
						name: '甘肃',
						value: 50
					}, {
						name: '山西',
						value: 50
					}, {
						name: '陕西',
						value: 50
					}, {
						name: '吉林',
						value: 80
					}, {
						name: '贵州',
						value: 50
					}, {
						name: '新疆',
						value: 50
					}, {
						name: '青海',
						value: 50
					}, {
						name: '西藏',
						value: 50
					}, {
						name: '四川',
						value: 50
					}, {
						name: '宁夏',
						value: 70
					}, {
						name: '海南',
						value: 50
					}, {
						name: '台湾',
						value: 50
					}, {
						name: '香港',
						value: 80
					}, {
						name: '澳门',
						value: 50
					}, {
						name: '上海',
						value: 20
					}, {
						name: '安徽',
						value: 20
					}, {
						name: '江苏',
						value: 20
					}, {
						name: '浙江',
						value: 90
					}, {
						name: '北京',
						value: 10
					}, {
						name: '天津',
						value: 10
					}, {
						name: '河北',
						value: 10
					}, {
						name: '河南',
						value: 10
					}, {
						name: '内蒙古',
						value: 10
					}, {
						name: '湖南',
						value: 10
					}, {
						name: '山东',
						value: 10
					}, {
						name: '江西',
						value: 10
					}, {
						name: '湖北',
						value: 10
					}, {
						name: '福建',
						value: 10
					}, {
						name: '广东',
						value: 10
					}]
				}],

			},
			{
				title: {
					text: '预计三天内全国旅游景点旅游人数图',
					left: 'center'
				},
				series: [{
					type: 'map',
					map: 'china',
					data: [{
						name: '重庆',
						value: 50
					}, {
						name: '云南',
						value: 50
					}, {
						name: '辽宁',
						value: 50
					}, {
						name: '黑龙江',
						value: 50
					}, {
						name: '广西',
						value: 70
					}, {
						name: '甘肃',
						value: 50
					}, {
						name: '山西',
						value: 50
					}, {
						name: '陕西',
						value: 50
					}, {
						name: '吉林',
						value: 50
					}, {
						name: '贵州',
						value: 50
					}, {
						name: '新疆',
						value: 50
					}, {
						name: '青海',
						value: 50
					}, {
						name: '西藏',
						value: 50
					}, {
						name: '四川',
						value: 80
					}, {
						name: '宁夏',
						value: 50
					}, {
						name: '海南',
						value: 50
					}, {
						name: '台湾',
						value: 50
					}, {
						name: '香港',
						value: 50
					}, {
						name: '澳门',
						value: 80
					}, {
						name: '上海',
						value: 20
					}, {
						name: '安徽',
						value: 20
					}, {
						name: '江苏',
						value: 20
					}, {
						name: '浙江',
						value: 20
					}, {
						name: '北京',
						value: 10
					}, {
						name: '天津',
						value: 10
					}, {
						name: '河北',
						value: 10
					}, {
						name: '河南',
						value: 10
					}, {
						name: '内蒙古',
						value: 10
					}, {
						name: '湖南',
						value: 10
					}, {
						name: '山东',
						value: 10
					}, {
						name: '江西',
						value: 10
					}, {
						name: '湖北',
						value: 10
					}, {
						name: '福建',
						value: 10
					}, {
						name: '广东',
						value: 10
					}]
				}],

			},
			{
				title: {
					text: '预计三天内全国旅游景点旅游人数图',
					left: 'center'
				},
				series: [{
					type: 'map',
					map: 'china',
					data: [{
						name: '重庆',
						value: 50
					}, {
						name: '云南',
						value: 50
					}, {
						name: '辽宁',
						value: 50
					}, {
						name: '黑龙江',
						value: 50
					}, {
						name: '广西',
						value: 10
					}, {
						name: '甘肃',
						value: 50
					}, {
						name: '山西',
						value: 50
					}, {
						name: '陕西',
						value: 50
					}, {
						name: '吉林',
						value: 50
					}, {
						name: '贵州',
						value: 80
					}, {
						name: '新疆',
						value: 50
					}, {
						name: '青海',
						value: 50
					}, {
						name: '西藏',
						value: 50
					}, {
						name: '四川',
						value: 50
					}, {
						name: '宁夏',
						value: 50
					}, {
						name: '海南',
						value: 50
					}, {
						name: '台湾',
						value: 80
					}, {
						name: '香港',
						value: 80
					}, {
						name: '澳门',
						value: 50
					}, {
						name: '上海',
						value: 20
					}, {
						name: '安徽',
						value: 20
					}, {
						name: '江苏',
						value: 20
					}, {
						name: '浙江',
						value: 20
					}, {
						name: '北京',
						value: 10
					}, {
						name: '天津',
						value: 10
					}, {
						name: '河北',
						value: 10
					}, {
						name: '河南',
						value: 10
					}, {
						name: '内蒙古',
						value: 10
					}, {
						name: '湖南',
						value: 10
					}, {
						name: '山东',
						value: 10
					}, {
						name: '江西',
						value: 10
					}, {
						name: '湖北',
						value: 10
					}, {
						name: '福建',
						value: 10
					}, {
						name: '广东',
						value: 10
					}]
				}],

			}
			]
		}
		myChart.setOption(option);
		

		

//星星
//开关
var kg = 1;
//点击
$('.a').bind({
	click:function(){
	if (kg) {
		kg = 0;
		//文字输出
		$('.xing>span').html($(this).attr('title'));
	} else{
		kg = 1;
	}
},
//移入			
	mouseover:function(){
	//开关打开时
	if (kg) {
		//选中自己
		$(this).css('backgroundPosition','0 -28px')
		//选中自己以上的所有
		.prevAll().css('backgroundPosition','0 -28px');
	} 
},
//移出
	mouseout:function(){
	//开关关闭时
	if (!kg) {
		return ;
	} else{
	//开关打开时
		//选中自己
		$(this).css('backgroundPosition','0 0')
		//选中除自己以外的所有
		.siblings().css('backgroundPosition','0 0');
	}
	}
});
