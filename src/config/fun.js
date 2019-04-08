var commonfun = {
	//写cookies
	setCookie: function(name, value) {
		var Days = 30;
		var exp = new Date();
		exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
		document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
	},

	//读取cookies
	getCookie: function(name) {
		var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

		if(arr = document.cookie.match(reg))

			return unescape(arr[2]);
		else
			return null;
	},

	//删除cookies
	delCookie: function(name) {
		var exp = new Date();
		exp.setTime(exp.getTime() - 1);
		var cval = commonfun.getCookie(name);
		if(cval != null)
			document.cookie = name + "=" + 'cval' + ";expires=" + exp.toGMTString();
	},

	finddName: function(id, arr) {
		console.log(id,arr);
		var name = '';
		arr.forEach(function(value, index) {
			if(value.value == id) {
				name = value.name;
			}
		});
		return name
	},
	getDate: function(time,flag) {
		if(time){
			var d = new Date(parseInt(time));
		}else{
			var d = new Date();
		}
		var month = d.getMonth() + 1;
		var day = d.getDate();
		var hour = d.getHours();
		var minute = d.getMinutes();
		var second = d.getSeconds();
		month = month < 10 ? '0' + month : month;
		day = day < 10 ? '0' + day : day;
		hour = hour < 10 ? '0' + hour : hour;
		minute = minute < 10 ? '0' + minute : minute;
		var result = '';
		if(flag){
			result = d.getFullYear() + '-' + month + '-' + day + ' ' + hour + ':' + minute;
		}else{
			result = d.getFullYear() + '-' + month + '-' + day ;
		}
		//		second = second < 10 ? '0' + second : second;
		return  result
	},
  getDate1: function(index){
    var date = new Date(); //当前日期
    var newDate = new Date();
    newDate.setDate(date.getDate() + index);
    var month = newDate.getMonth() + 1;
    var day = newDate.getDate();
    var hour = newDate.getHours();
    var minute = newDate.getMinutes();
    var second = newDate.getSeconds();
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;
    var time = newDate.getFullYear() + '-' + month + '-' + day;
    return time;
  },
  getDate2: function(index,date){
    var date = new Date(date); //当前日期
    var newDate = new Date(date);
    newDate.setDate(date.getDate() + index);//官方文档上虽然说setDate参数是1-31,其实是可以设置负数的
    var month = newDate.getMonth() + 1;
    var day = newDate.getDate();
    var hour = newDate.getHours();
    var minute = newDate.getMinutes();
    var second = newDate.getSeconds();
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;
    var time = newDate.getFullYear() + '-' + month + '-' + day;
    return time;
  },

  getDate3: function(date){
    var date = new Date(date); //当前日期
    var newDate = new Date(date);
    newDate.setMinutes (newDate.getMinutes () + 1);
    // newDate.setDate(date.getDate() + index);//官方文档上虽然说setDate参数是1-31,其实是可以设置负数的
    var month = newDate.getMonth() + 1;
    var day = newDate.getDate();
    var hour = newDate.getHours();
    var minute = newDate.getMinutes();
    var second = newDate.getSeconds();
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;
    var time = newDate.getFullYear() + '-' + month + '-' + day + 'T' + hour + ':' + minute;
    return time;
  },
  // 获取当前年月日
  getnewDate:function () {
    var date = new Date();//获取当前日期jz
    let nian=date.getFullYear();
    let yue=date.getMonth()+1;
    let ri=date.getDate();
    if (yue<10){
      yue="0"+yue
    }
    if (ri<10){
      ri="0"+ri
    }
    let newdate=nian+'-'+yue+'-'+ri
    return newdate
  },
  checkPhoneNum: function(phone) {
    //手机号正则
    var phoneReg = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/
    // var phoneReg = /(^1[3|4|5|6|7|8|9]\d{9}$)|(^09\d{8}$)/
    //电话
    if(!phoneReg.test(phone)) {
      return false;
    } else {
      return true;
    }
  },
  getNowFormatDate(time,flag) {
  var date = new Date(time);
  if ( flag ) {
    date.setMinutes(date.getMinutes()-30); //当前时间减30分钟
  }else {
    date.setMinutes(date.getMinutes()+30); //当前时间加30分钟
  }
  var seperator1 = "-";
  var seperator2 = ":";
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  if (hours >= 0 && hours <= 9) {
    hours = "0" + hours;
  }
  if (minutes >= 0 && minutes <= 9) {
    minutes = "0" + minutes;
  }
  if (seconds >= 0 && seconds <= 9) {
    seconds = "0" + seconds;
  }
  var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
    + " " + hours + seperator2 + minutes + seperator2 + seconds;
  return currentdate;
}
};

export default commonfun;
