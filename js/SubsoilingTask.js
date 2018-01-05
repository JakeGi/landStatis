	mui.init({
		swipeBack: true //启用右滑关闭功能
		
		});
		var listArr = [];
		//请求列表数据
		var url = "http://hit.huidatech.cn/hdPrecisionAgri/action/work?handler=queryWorkinfoDetail&regionCode=17020115&beginDate=2017-01-01&endDate=2018-01-04&key=&beginDepth=&endDepth=&beginRate=&endRate=&workType=13%2C56&deptNameList=&begin=1&end=20&carId=&deviceId=&acrossDistrict=";
		mui.ajax(url,{
		data:{
		},
		dataType:'jsonp',//服务器返回json格式数据
		type:'post',//HTTP请求类型
		timeout:10000,//超时时间设置为10秒；
		headers:{'Content-Type':'application/json'},	              
		success:function(data){
			//服务器返回响应，根据响应结果，分析是否登录成功；
			console.log("data="+type);
			mui.each(data,function(key,value){
				console.log("value=",value.success);
			})
		},
		
		error:function(xhr,type,errorThrown){
			//异常处理；
			console.log("type="+type);
		}
	})
