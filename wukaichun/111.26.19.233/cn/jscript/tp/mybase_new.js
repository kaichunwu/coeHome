var dataTypes = new Array('string', 'number', 'price', 'time', 'percent',
		'path', 'ip', 'email');
// 数据对象
function DataObj(type, flag, value, name) {
	this.type = type;
	this.flag = flag;
	this.value = value;
	this.name = name;
}

function isEmpty(s) {
	return (s === '' || s === null);
}

// ------- 正则表达式数据检测 -------
// 匹配中文
function isChinese(s) {
	var model = /^[^\u4E00-\u9FA5]+$/;
	return model.test(s);
}
// 匹配空格
function isSpecial(s) {
	var model = /^\S+$/;
	return model.test(s);
}
// 验证数字字符串
function isNumber(s) {
	var model = /^\d+$/;
	return model.test(s);
}
//验证以*开头，#结尾的字符串
function isWantedStr(s) {
	var model = /^[*]\w+[#$]$/;
	return model.test(s);
}
//验证以*开头，*结尾的字符串
function isWantedstr1(s) {
	var model = /^[*]\w+[*$]$/;
	return model.test(s);
}
function isNumberstr(s) {

	var model = /^(\d+)\|(\d+)\|(\d+)$/;
	var model1 = /^(\d+)\|(\d+)$/;
	var model2 = /^(\d+)$/;
	return model.test(s) || model1.test(s) || model2.test(s);
}
function islimitdialstr(s) {

	var model =/^(\_)?(\d+|\#+|\*+|\[(\d+|\d+\-\d+)\]|X+|x+)+(\.)?((\|)(\_)?(\d+|\#+|\*+|\[(\d+|\d+\-\d+)\]|X+|x+)+(\.)?)*$/;
	var model1 = /^(\_)?(\d+|\#+|\*+|\[(\d+|\d+\-\d+)\]|X+|x+)+(\.)?((\|)(\_)?(\d+|\#+|\*+|\[(\d+|\d+\-\d+)\]|X+|x+)+(\.)?)*$/;
	var model2 =/^(\_)?(\d+|\#+|\*+|\[(\d+|\d+\-\d+)\]|X+|x+)+(\.)?((\|)(\_)?(\d+|\#+|\*+|\[(\d+|\d+\-\d+)\]|X+|x+)+(\.)?)*$/;
	return model.test(s) || model1.test(s) || model2.test(s);
	
}
function islimitdial(s) {

	var model =/^(\_)?(\d+|\#+|\*+|\[(\d+|\d+\-\d+)\]|X+|x+)+(\.)?((\|)(\_)?(\d+|\#+|\*+|\[(\d+|\d+\-\d+)\]|X+|x+)+(\.)?)*$/;
	return model.test(s);
	
}
//轮选组，只能是数字和字母的组合
function isSelectiongrpNum(s) {
	var model = /^[a-zA-Z0-9]+$/;
	return model.test(s);
}
//校验license字符串：
function isLicense(s){
	var model = /^[a-zA-Z0-9]+(\-){1}[a-zA-Z0-9]+$/;
	return model.test(s);
}
/*
 * function isNumberstr1(s){ var model =
 * /^(\d+)|((\d+)\|(\d+))|(\d+)\|(\d+)\|(\d+)$/; return model.test(s); }
 */
// 验证字符串
function isString(s) {
	var model = /^\w+$/;
	return model.test(s);
}
// 验证IP
function isIp(s) {
//	var ip = '(25[0-5]|2[0-4]\\d|1\\d\\d|\\d\\d|\\d)';
//	var ipdot = ip + '\\.';
//	var model = new RegExp('^' + ipdot + ipdot + ipdot + ip + '$');
	var model= /^((?:(?:25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(?:25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d))))$/;	
	return model.test(s);
}
//校验是否网址，ftp等   // 2014-12-11
function IsURL(str_url){
	  var strRegex = "^((https|http|ftp|rtsp|mms)?://)" 
	  + "?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?" //ftp的user@ 
	        + "(([0-9]{1,3}\.){3}[0-9]{1,3}" // IP形式的URL- 199.194.52.184 
	        + "|" // 允许IP和DOMAIN（域名）
	        + "([0-9a-z_!~*'()-]+\.)*" // 域名- www. 
	        + "([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\." // 二级域名 
	        + "[a-z]{2,6})" // first level domain- .com or .museum 
	        + "(:[0-9]{1,4})?" // 端口- :80 
	        + "((/?)|" // a slash isn't required if there is no file name 
	        + "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$"; 
	        var re=new RegExp(strRegex); 
	        if (re.test(str_url)){
	            return (true); 
	        }else{ 
	            return (false); 
	        }
} 
// 验证文件或文件路径
function isPath(s) {
	var model = /^(\/[^\\\/:\*\?<>\|]+)*(\.\w+)*$/;
	return model.test(s);
}
// 价钱 0 | 0.10(小数点后必须带有2位)
function isPrice(s) {
	if (s == '0') {
		return true;
	}
	var model = /^\d+\.\d{2}$/;
	return model.test(s);
}
// 检测邮箱格式.
function isEmail(email_str) {
	var emailModel_1 = /^\w+([\.\-]\w+)*\@\w+([\.\-]\w+)*\.\w+$/;
	var emailModel_2 = /^.*@[^_]*$/;
	return (emailModel_1.test(email_str) && emailModel_2.test(email_str));
}
// 时间[10:01:10]
function isTime(s) {
	var model = /^\d{2}:\d{2}:\d{2}$/;
	var model1 = /^([0-1]{1}[0-9]{1}|2[0-3]{1})[0-5]{1}[0-9]{1}$/;
	return model.test(s) || model1.test(s);
}
//
function isPercent(s) {
	return isNumber(s) && parseInt(s) >= 0 && parseInt(s) <= 100;
}

function isTel(s) {
	var model_1 = /^(13|15|18)\d{9}$/;
	var model_2 = /^\*$/;
	var model_3 = /^\d+$/;
	var model_4 = /^(\^)*(\\\\|\+86)*(\d+)(\!(\.|\*|\[\d-\d\])*\!)*(\$)*$/;
	var model_5 = /^(\!\.\*\!)$/;
	return model_1.test(s) || model_2.test(s) || model_3.test(s)
			|| model_4.test(s) || model_5.test(s);
}

// 验证拨号规则
function isDial(s) {
	// var model =
	// /^((\d+|x+|(\[((\d+\-\d+)+|\d+)\]))+(\.)?|(X\.\[(T|\#)\])|(\d+\.)|\.|(x*\[((\d+\-\d+)+|\d+)\])+(\.)?)$/;
	var model = /^((\d+|x+|(\[((\d+\-\d+)+|\d+)\]))+(\.)?|(X\.\[(T|\#)\])|\.)$/;
	return model.test(s);
}
// 验证接入号
function isNo(s) {
	// var model = /^(\d+\|)*(\d+)$/;
	var model = /^((\+86)?\d+\|)*((\+86)?\d+)$/;
	var model1 = /^((\#|\*)\|)*(\#|\*)$/;
	return model.test(s) || model1.test(s);
}

// 验证rtp端口范围
function isRtpPort(s) {
	var model = /^(\d+\-\d+)$/;
	return model.test(s);
}

// 验证时隙号
function isOut(s) {
	var model = /^\[((\d|[1-2]\d|3[0-1]|((\d|[1-2]\d|3[0-1])\-(\d|[1-2]\d|3[0-1])))\|)*(\d|[1-2]\d|3[0-1]|((\d|[1-2]\d|3[0-1])\-(\d|[1-2]\d|3[0-1])))\]$/;
	return model.test(s);
}

// 验证MAC地址
function isMac(s) {
	var model = /^([0-9A-Fa-f]{2}\:[0-9A-Fa-f]{2}\:[0-9A-Fa-f]{2}\:[0-9A-Fa-f]{2}\:[0-9A-Fa-f]{2}\:[0-9A-Fa-f]{2})$/;
	return model.test(s);
}

/**
 * 校验验证有效日期  如：20131212-20131229<br>
 * 包括 格式是否正确，前后日期是否正确
 * @param s  输入的值
 * @returns boolen 日期是否校验通过
 */
function isValDate(s) {
	var model = /^(([2-9]{1}[0-9]{3})(((01|03|05|07|08|10|12)((0[1-9]{1})|([1-2]{1}[0-9]{1})|(3[0-1]{1})))|((04|06|09|11)((0[1-9]{1})|([1-2]{1}[0-9]{1})|30))|(02((0[1-9]{1})|([1-2]{1}[0-9]{1})))))\-(([2-9]{1}[0-9]{3})(((01|03|05|07|08|10|12)((0[1-9]{1})|([1-2]{1}[0-9]{1})|(3[0-1]{1})))|((04|06|09|11)((0[1-9]{1})|([1-2]{1}[0-9]{1})|30))|(02((0[1-9]{1})|([1-2]{1}[0-9]{1})))))$/;
	if (!model.test(s)) {
		// 先符合基本的格式
		return false;
	} 
	var arr = new Array();
	arr = s.split('-');
	// 判断结束日期比开始日期大
	if ((parseInt(arr[1], 10) - parseInt(arr[0], 10)) < 0) {
		// 结束日期比开始日期小
		return false;
	}
	// 闰年是否符合格式
	for ( var i = 0; i < arr.length; i++) {
		var year = arr[i].substr(0, 4);
		if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
			// 闰年
			if (parseInt(arr[i].substr(4, 2), 10) == 2
					&& parseInt(arr[i].substr(6), 10) > 29) {
				// 闰年二月
				return false;
			}
		} else {
			// 非闰年
			if (parseInt(arr[i].substr(4, 2), 10) == 2
					&& parseInt(arr[i].substr(6), 10) > 28) {
				// 普通二月
				return false;
			}
		}
	}
	return true;
}
/**
 * 校验密码是否过于简单，校验的是分机号码等纯数字密码
 * @param s  输入的值
 * @returns boolen 密码是否过于简单
 */
function isPasswodEasy(s)
{
	s = s.toString();
	var condition1 = true;					//初始化，是否所有的位一样
	var condition2 = true;					//初始化，是否密码是123456等纯数字连续
	var condition3 = true;					//初始化，是否密码是654321等纯数字连续
	var condition4 = true;					//初始化，是否密码是123123等纯数字间隔
	for(var i=1;i<s.length;i++)			//从第二位开始，第一位只有自己无法比较
		{
			if(s.substr(0,1)==s.substr(1,1))
			{
				condition1 = condition1 && ( s.substr(i,1) == s.substr(i-1,1));
			}else{
				condition1 = false;				//首2位已经不符合条件，则条件false
			}
			if(parseInt(s.substr(0,1),10) +1 ==  parseInt(s.substr(1,1),10))
			{
				condition2 = condition2 && (parseInt(s.substr(i-1,1),10) +1 ==  parseInt(s.substr(i,1),10));
			}else{
				condition2 = false;				//首2位已经不符合条件，则条件false
			}
			if(parseInt(s.substr(0,1),10) -1 ==  parseInt(s.substr(1,1),10))
			{
				condition3= condition3 && (parseInt(s.substr(i-1,1),10) -1 ==  parseInt(s.substr(i,1),10));
			}else{
				condition3 = false;				//首2位已经不符合条件，则条件false
			}
		}
	if(s.length%2==0)				//长度为偶数
	{
		condition4 = s.substr(0,s.length/2) ==  s.substr(s.length/2,s.length/2);
	}else{
		condition4 = s.substr(0,s.length/2) ==  s.substr(s.length/2+1,s.length/2);
	}	
	if(condition1 || condition2 || condition3 || condition4)				//有一项不通过则不通过
	{
		//密码过于简单
		return true;
	}
	return false;
}

// 验证有效时间
function isValTime(s) {
	var model = /^(([0-1]{1}[0-9]{1}|2[0-3]{1})[0-5]{1}[0-9]{1}\-([0-1]{1}[0-9]{1}|2[0-3]{1})[0-5]{1}[0-9]{1}\|){0,2}(([0-1]{1}[0-9]{1}|2[0-3]{1})[0-5]{1}[0-9]{1}\-([0-1]{1}[0-9]{1}|2[0-3]{1})[0-5]{1}[0-9]{1})$/;
	return model.test(s);
}
//验证最多三个的有效时间
function isValMultiTime(s) {
	var model = /^(([0-1]{1}[0-9]{1}|2[0-3]{1})[0-5]{1}[0-9]{1}\-([0-1]{1}[0-9]{1}|2[0-3]{1})[0-5]{1}[0-9]{1}\|){0,2}(([0-1]{1}[0-9]{1}|2[0-3]{1})[0-5]{1}[0-9]{1}\-([0-1]{1}[0-9]{1}|2[0-3]{1})[0-5]{1}[0-9]{1})$/;
	var model1 = /^(([0-1]{1}[0-9]{1}|2[0-3]{1})[0-5]{1}[0-9]{1}\-([0-1]{1}[0-9]{1}|2[0-3]{1})[0-5]{1}[0-9]{1}\|){0,2}(([0-1]{1}[0-9]{1}|2[0-3]{1})[0-5]{1}[0-9]{1}\-([0-1]{1}[0-9]{1}|2[0-3]{1})[0-5]{1}[0-9]{1})$/;
	var model2 = /^(([0-1]{1}[0-9]{1}|2[0-3]{1})[0-5]{1}[0-9]{1}\-([0-1]{1}[0-9]{1}|2[0-3]{1})[0-5]{1}[0-9]{1}\|){0,2}(([0-1]{1}[0-9]{1}|2[0-3]{1})[0-5]{1}[0-9]{1}\-([0-1]{1}[0-9]{1}|2[0-3]{1})[0-5]{1}[0-9]{1})$/;
	return model.test(s)||model1.test(s)||model2.test(s);
}
//验证多个有效时间点 如：1010|2202|2359
function isValTimeSingle(s){
	var model = /^(([0-1]{1}[0-9]{1}|2[0-3]{1})([0-5]{1}[0-9]{1})){1}((\|(([0-1]{1}[0-9]{1}|2[0-3]{1})([0-5]{1}[0-9]{1}))))*$/;
	return model.test(s);
}
//验证单个有效时间点 如：1010
function isValTimeOne(s){
	var model = /^(([0-1]{1}[0-9]{1})|(2[0-3]{1}))[0-5]{1}[0-9]{1}$/;
	return model.test(s);
}
// 验证有效周期
function isValWeek(s) {
	// var model =
	// /^(([0-7]{1}\-[0-7]{1}|[0-7]{1})\|)*([0-7]{1}\-[0-7]{1}|[0-7]{1})+$/;
	var model = /^(([1-7]{1}\-[1-7]{1}|[1-7]{1})\|)*([1-7]{1}\-[1-7]{1}|[1-7]{1})+$/;
	return model.test(s);
}

// 彩铃文件格式
function isRing(s) {
	var model = /(wav|au|dat)$/;
	return model.test(s);
}

// 前转号码
function isForwardTel(s) {
	var model = /^((t|T)\d+|\d+)$/;
	return model.test(s);
}

// 按周
function isWeek(s) {
	var model = /^([1-7]{1}\|)*[1-7]{1}$/;
	return model.test(s);
}
// 按月
function isMonth(s) {
	var model = /^(([1-9]{1}|[1-2]{1}[0-9]{1}|3[0-1]{1})\-([1-9]{1}|[1-2]{1}[0-9]{1}|3[0-1]{1})|([1-9]{1}|[1-2]{1}[0-9]{1}|3[0-1]{1})\|)*(([1-9]{1}|[1-2]{1}[0-9]{1}|3[0-1]{1})\-([1-9]{1}|[1-2]{1}[0-9]{1}|3[0-1]{1})|([1-9]{1}|[1-2]{1}[0-9]{1}|3[0-1]{1}))$/;
	return model.test(s);
}
function isTimeHM(s) {
	var model = /^([0-1]{1}[0-9]{1}|2[0-3]{1})[0-5]{1}[0-9]{1}$/;
	return model.test(s);
}
// 按时间段:如0600-1800
function isTimeRange(s) {
	var model = /^(([0-1]{1}[0-9]{1}|2[0-3]{1})[0-5]{1}[0-9]{1}\-([0-1]{1}[0-9]{1}|2[0-3]{1})[0-5]{1}[0-9]{1})$/;
	return model.test(s);
}
function isMultiTimeRange(s) {
	var model = /^(([0-1]{1}[0-9]{1}|2[0-3]{1})[0-5]{1}[0-9]{1}\-([0-1]{1}[0-9]{1}|2[0-3]{1})[0-5]{1}[0-9]{1})$/;
	var model1 = /^(([0-1]{1}[0-9]{1}|2[0-3]{1})[0-5]{1}[0-9]{1}\-([0-1]{1}[0-9]{1}|2[0-3]{1})[0-5]{1}[0-9]{1})$/;
	var model2 = /^(([0-1]{1}[0-9]{1}|2[0-3]{1})[0-5]{1}[0-9]{1}\-([0-1]{1}[0-9]{1}|2[0-3]{1})[0-5]{1}[0-9]{1})$/;
	return model.test(s)||model1.test(s)||model2.test(s);
}

// 按时间段:00-99
function isNumRange(s) {
	var model = /^[0-9]{1}[0-9]{1}$/;
	return model.test(s);
}
// 超时时长：10-60
function isTimeOut(s) {
	var model = /^[1-6]{1}[0-9]{1}$/;
	return model.test(s);
}
//一号通超时时长：15-40
function isOnePasstimeout(s){
	var model = /^1[5-9]|[2-3]{1}[0-9]|40$/;
	return model.test(s);
}
//代答组组号范围[0-255]
function isPickUpgrpRange(s)
{
	var model = /^([1-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])$/;
	return model.test(s);
}
function isTimePeriod(s) {
	var model = /^((0[6-9]{1}|1[0-8]{1})[0-5]{1}[0-9]{1}\-(0[6-9]{1}|1[0-8]{1})[0-5]{1}[0-9]{1})$/;
	return model.test(s);
}
function isDate(s) {
	var model = /^(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)\-(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)$/;
	return model.test(s);
}
/*
 * function isTime(s) { var model =
 * /^(([0-1]{1}[0-9]{1}|2[0-3]{1})[0-5]{1}[0-9]{1}$/; return model.test(s); }
 */

// 群号，支持+
function isCtxNo(s) {
	var model = /^(\+\d+|\d+)$/;
	return model.test(s);
}

// 主被叫匹配规则
function isModifyTel(s) {
	// var model = /^(\d+|\#+|\*+|\|+|\[(\d+|\d+\-\d+)\]|X+)+(\.)?$/;
	// var model = /^(\d+|\#+|\*+|\|+|\[(\d+|\d+\-\d+)\]|X+|x+)+(\.)?$/;
	var model = /^(\_)?(\d+|\#+|\*+|\[(\d+|\d+\-\d+)\]|X+|x+)+(\.)?((\|)(\_)?(\d+|\#+|\*+|\[(\d+|\d+\-\d+)\]|X+|x+)+(\.)?)*$/;
	// var model = /^(\_)?(\d+|\#+|\*+|\|+|\[(\d+|\d+\-\d+)\]|X+)+(\.)?$/;
	// var model = /^(\d+|\[(\d+|\d+\-\d+)\]|X+)+\.?$/;
	// var model = /^(\_{1}|\.{1}|\d+|\[(\d+|\d+\-\d+)\]|X+)+$/;
	// var model = /^(\.|\d+|\[(\d+|\d+\-\d+)\]|x+)+$/;
	return model.test(s);
}
function isModifyTel1(s) {
	// var model = /^(\d+|\#+|\*+|\|+|\[(\d+|\d+\-\d+)\]|X+)+(\.)?$/;
	// var model = /^(\d+|\#+|\*+|\|+|\[(\d+|\d+\-\d+)\]|X+|x+)+(\.)?$/;
	var model = /^(\_)?(\d+|\#+|\*+|\[(\d+|\d+\-\d+)\]|X+|x+)+(\.)?$/;
	// var model = /^(\_)?(\d+|\#+|\*+|\|+|\[(\d+|\d+\-\d+)\]|X+)+(\.)?$/;
	// var model = /^(\d+|\[(\d+|\d+\-\d+)\]|X+)+\.?$/;
	// var model = /^(\_{1}|\.{1}|\d+|\[(\d+|\d+\-\d+)\]|X+)+$/;
	// var model = /^(\.|\d+|\[(\d+|\d+\-\d+)\]|x+)+$/;
	return model.test(s);
}
// 呼叫限制模型
function isCallLimit(s) {
	// var model = /^(\d+|\#+|\*+|\|+|\[(\d+|\d+\-\d+)\]|X+)+(\.)?$/;
	// var model = /^(\d+|\#+|\*+|\|+|\[(\d+|\d+\-\d+)\]|X+|x+)+(\.)?$/;
	var model = /^(\_)?(\d+|\#+|\*+|\[(\d+|\d+\-\d+)\]|X+|x+)+(\.)?((\|)(\_)?(\d+|\#+|\*+|\[(\d+|\d+\-\d+)\]|X+|x+)+(\.)?)*$/;
	// var model = /^(\_)?(\d+|\#+|\*+|\|+|\[(\d+|\d+\-\d+)\]|X+)+(\.)?$/;
	// var model = /^(\d+|\[(\d+|\d+\-\d+)\]|X+)+\.?$/;
	// var model = /^(\_{1}|\.{1}|\d+|\[(\d+|\d+\-\d+)\]|X+)+$/;
	// var model = /^(\.|\d+|\[(\d+|\d+\-\d+)\]|x+)+$/;
	return model.test(s);
}

// 号码限呼
function isDlcTel(s) {
	var model = /^((\d+|\+86\d+)\|){0,2}(\d+|\+86\d+)$/;
	return model.test(s);
}
function isExtenNum(s) {
	// var model = /^((\\\\)?|\!?(\d|\+|\*|\.|\^|\$|\[(\d+|\d+\-\d+)\])\!?)*$/;
	var model = /^\^?(\\\\\+)?(\d+|\!(\*|\.|\[(\d+|\d+\-\d+)\])*\!)*\$?$/;
	return model.test(s);
}
// 功能键
function isKey(s) {
	var len = s.length;
	if (len > 5)
		return false;
	var str = s.substr(0, len - 1);
	var bool = str.search(/#/i);
	if (bool != -1) {
		if (s.charAt(len - 1) == '#') {
			return false;
		}
	}
	var model = /^(\d|\*|\#){0,5}$/;
	return model.test(s);
}

// 群内短号
function isShort(s) {
	var model = /^((\*)+|\d+)$/;
	return model.test(s);
}

// 路由时间索引
function isRouterId(s) {
	var model = /^((\d+\|)*\d+)$/;
	return model.test(s);
}
// ------- end -------

// 是否是有效值
function isValidValue(type, value) {
	switch (type) {
	case 'string':
		return isString(value);
	case 'number':
		return isNumber(value);
	case 'price':
		return isPrice(value);
	case 'time':
		return isTime(value);
	case 'percent':
		return isPercent(value);
	case 'path':
		return isPath(value) || isRing(value);
	case 'ip':
		return isIp(value);
	case 'email':
		return isEmail(value);
	case 'dial':
		return isDial(value);
	case 'no':
		return isNo(value);
	case 'port':
		return isRtpPort(value);
	case 'out_slot':
		return isOut(value);
	case 'tel':
		return isTel(value);
	case 'mac':
		return isMac(value);
	case 'valdate':
		return isValDate(value);
	case 'valtime':
		return isValTime(value);
	case 'valweek':
		return isValWeek(value);
	case 'ring':
		return isRing(value);
	case 'forward_tel':
		return isForwardTel(value);
	case 'week':
		return isWeek(value);
	case 'month':
		return isMonth(value);
	case 'timerange':
		return isTimeRange(value);
	case 'ctxno':
		return isCtxNo(value);
	case 'modifytel':
		return isModifyTel(value);
	case 'key':
		return isKey(value);
	case 'dlctel':
		return isDlcTel(value);
	case 'short':
		return isShort(value);
	case 'routerid':
		return isRouterId(value);
	case 'special':
		return isSpecial(value);
	case 'chinese':
		return isChinese(value);
	default:
		return false;
	}
}
// 是否是有效数据
function isValidData(type, value, name) {
	if (!isValidValue(type, value)) {
		window.alert(name + ' 格式错误');
		return false;
	}
	return true;
}
// 是否是空数据
function isEmptyData(value) {
	return isEmpty(value);
}
// 是否是非空数据
function isNotEmptyData(value, name) {
	if (isEmpty(value)) {
		window.alert('请输入 ' + name);
		return false;
	}
	return true;
}
// 是否是有效对象
function isValidObj(obj) {
	if (obj.flag === 0) {
		return isEmptyData(obj.value)
				|| isValidData(obj.type, obj.value, obj.name);
	} else {
		return isNotEmptyData(obj.value, obj.name)
				&& isValidData(obj.type, obj.value, obj.name);
	}
}
// 入参数一个对象数组
function dataChecker() {
	for ( var i = 0; i < arguments.length; i += 1) {
		if (!isValidObj(arguments[i])) {
			return false;
		}
	}
	return true;
}
// 页面跳转
function isValidPage(goPage, totalPage) {
	if (isEmpty(goPage)) {
		window.alert("请输入你想要跳转的页面数!");
		return false;
	}
	if (!isNumber(goPage)) {
		window.alert("跳转的页面数必须为数字");
		return false;
	}
	if (parseInt(goPage) < 1 || parseInt(goPage) > totalPage) {
		window.alert("你想要跳转的页面数不能超过总页面数或小于1");
		return false;
	}
	return true;
}

function ShowLoading(){
	$("#ajaxMask").show();
}
function HiddenLoading(){
	$("#ajaxMask").hide();
}