function Creg(){ 
	emailaddress="[^@]+@[^.]+\\.[^,;@ ]+"; 
	this.regNull=new RegExp("\\S+"); 
	this.regIpv4=new RegExp("^\\d{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}$"); 
	this.regDomain=new RegExp("^[^.]+\\.([^.]+\\.)*[^.]+$"); 
	//this.regDate=new RegExp("^\\d{4}-((0[1-9])|(1[0-2]))-(([0-2][1-9])|(3[0-1]))$"); 
	this.regDate=new RegExp("^200\\d-((0[1-9])|(1[0-2]))-(([0-2][1-9])|(3[0-1]))$"); 
	this.regInt=new RegExp("^\\d+$"); 
	this.regFloat=new RegExp("^((\\d+(\\.\\d*)?)|((\\d*\\.)?\\d+))$"); 
	this.regEmail=new RegExp("^"+emailaddress+"$"); 
	this.regSipaddr=new RegExp("^[Ss][Ii][Pp]:"+emailaddress+"$"); 
	this.regMp3=new RegExp(".mp3$"); 
}
function chkReg(tagReg,strTest){ 
	switch(tagReg){ 
		case "regIpv4":
			if(!this.regIpv4.test(strTest)){
				alert("Invalid Ipv4 addr!"); 
				return(false); 
			}else{ return(true); } 
			break;
		case "regDomain":
			if(!this.regDomain.test(strTest)){ 
				alert("Invalid Domain!"); 
				return(false); 
			}else{ return(true); }
			break;
		case "regDate": 
			if(!this.regDate.test(strTest)){
				alert("Invalid Date!");
				return(false); 
			}else{ return(true); } 
			break;
		case "regInt": 
			if(!this.regInt.test(strTest)){
				alert("Invalid Int!"); 
				return(false);
			}else{ return(true); } 
			break;
		case "regPort": 
			if(!this.regInt.test(strTest)){ 
				alert("Invalid Port!"); 
				return(false); 
			}else{ 
				if(strTest < 1 || strTest > 65535){ 
					alert("Invalid port!"); 
					return(false); 
				}
				return(true); 
			} 
			break;
		case "regFloat": 
			if(!this.regFloat.test(strTest)){ 
				alert("Invalid float!"); 
				return false;
			}else{ return true; } 
			break;
		case "regEmail": 
			if(!this.regEmail.test(strTest)){ 
				alert("Invalid E-Mail!"); 
				return false;
			}else{ return true; } 
			break; 
		case "regSipaddr":
			if(!this.regSipaddr.test(strTest)){ 
				alert("Invalid SIP addr!"); 
				return false; 
			}else{ return true; } 
			break; 
		case "regMp3":
			if(!this.regMp3.test(strTest)){
				alert("Invalid mp3!");
				return false; 
			}else{ return true; } 
			break;
		default: 
		// not allow null 
			if(!this.regNull.test(strTest)){
				alert("Not Allow NULL!"); 
				return false; 
			}else{ return true; } 
			break;
	}
}
function elementChk(tagReg,element){
	if(!this.chkReg(tagReg,element.value)){ 
		element.focus(); 
		return(false); 
	}else{ return(true); }
}
function form_Validator(f) { 
	var elArr =f.elements;
	for(var i = 0; i < elArr.length; i++){ // ���ڱ?�е�ÿһ��Ԫ��... ��
		var v = elArr[i].validator; 
		// ��ȡ��validator���ԡ� 
		if(!v) continue; 
		// �������Բ�����,���Ե�ǰԪ�� 
		if(!this.elementChk(v, elArr[i]))
			return(false);
	}
	return(true);
}
function testReg(){ 
	/*document.write("That is a regInt test." );
	document.write(this.regInt.test ("That is a nice hat.") + "");
	document.write(this.regInt.test ("5261244") + "");
	document.write("That is a regFloat test." ); 
	document.write(this.regFloat.test ("That is a nice hat.") + "");
	document.write(this.regFloat.test ("5261244") + "");
	document.write("That is a regIpv4 test." );
	document.write(this.regIpv4.test ("That is a nice hat.") + "");
	document.write(this.regIpv4.test ("192.168.139.57") + "");
	document.write("That is a regDomain test." );
	document.write(this.regDomain.test ("That is a nice hat.") + "");
	document.write(this.regDomain.test ("www.51sip.com") + "");
	document.write("That is a regDate test." );
	document.write(this.regDate.test ("That is a nice hat.") + "");
	document.write(this.regDate.test ("2001-12-26") + "");
	document.write("That is a regEmail test." );
	document.write(this.regEmail.test ("That is a nice hat.") + "");
	document.write(this.regEmail.test ("2001@26.13") + "");*/
}
Creg.prototype.chkReg = chkReg; 
Creg.prototype.elementChk = elementChk;
Creg.prototype.form_Validator = form_Validator; 
Creg.prototype.testReg = testReg; 
function selectOption(obj, val) { 
	for (var i = 0; i < obj.options.length; i++) {
		if (obj.options[i].value == val) { 
			obj.options[i].selected = true; 
			break;
		}
	}
}
function selectRadio(obj, val) { 
	if (obj.length) { 
		for (var i = 0; i < obj.length; i++) { 
			if (obj[i].value == val) { 
				obj[i].checked = true; 
				break;
			}
		}
	} else { 
		if (obj.value == val) {
			obj.checked = true; 
			return;
		}
	}
} 
function selectCheckbox(obj,val){
	for(var i=0;i<obj.length;i++){
		if(val.indexOf(obj[i].value+",")!=-1){
			obj[i].checked=true;
		}
	}
}
//var key="123124123";//密钥序列   (最简单的情况，密钥只需要一个字符,密钥长度越长，异或次数越多。)
    /*背景
     ^: 两个操作数。 必须都是整数数值。
      unicode: unicode将地球上所有文字编码成0~0x10fffff。
      *结论：(1)任意数^ 数值a^数值a=任意数
             (2)任意数^数值a^数值b^数值c...^数值a^数值b^数值c...=任意数
    */
    
 /*info:原文
   mY:密钥序列,字符串。  
    原理：-加密 字符与密钥序列mY['1','2','3','1','2','4','1','2','3']  异或9次，得到加密后的unicode码
          String.fromCharCode(unicode码)得密文。
          -解密 密文中逐个字符取unicode码
                  与密钥序列中逐字符的 unicode码，异或，再转成String.fromCharCode(字符)得到明文
 */
 function codeAndCrack(info,mY){
   var afterInfo="";
    for(var i=0;i<=info.length-1;i++){//遍历文中字符，逐个取unicode编码
        var tempChar=info.charCodeAt(i);
        var charAfter="";
        for(var j=0;j<=mY.length-1;j++){//info中的字符 与密钥序列逐字符 ^
            var tempKey=mY.charCodeAt(j);
            charAfter=tempChar^tempKey;//unicode编码与 密钥中所有字符的unicode编码异或 (结果是unicode数值)
        }
        afterInfo+=String.fromCharCode(charAfter);//异或后的数值转成字符
        //afterInfo +=charAfter;//输出的数值
    }
    return afterInfo;
 }