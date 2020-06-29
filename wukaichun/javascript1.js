/**
 * 
 */
function ot(num){
	if(num==0){
		document.getElementById("text").style.display="block";
	}
	else{
		document.getElementById("text").style.display="none";
	}
}
function addHandler(element, type, handler){
    if (element.addEventListener){
        element.addEventListener(type, handler, false);
    } else if (element.attachEvent){
        element.attachEvent("on" + type, handler);
    } else {
        element["on" + type] = handler;
    }
}
function displayDate(){
	if(document.getElementById("demo").innerHTML==="You can see the system time by click the button below."){
		document.getElementById("demo").innerHTML=new Date();
		document.getElementById("btn").innerHTML="Click to recover";
	}
	else{
		document.getElementById("demo").innerHTML="You can see the system time by click the button below.";
		document.getElementById("btn").innerHTML="Date";
	}
}
function cal(){
	var cal=document.getElementById("cal").value;
	var mon=document.getElementById("mon").innerHTML;
	var mon1=mon.split(/[$,.]/);
	//alert(mon1);
	//document.getElementById("mon").style.display="block";
	var res;
	if(cal!=""){
		res=Number(mon1[1])+Number(cal);
		document.getElementById("mon").innerHTML="Thank you for $"+res+".(Just joking)";
		document.getElementById("mon").style.display="block";
	}
	else if((Number(mon1[1]))>0){
		res=Number(mon1[1]);
		document.getElementById("mon").innerHTML="Thank you for $"+res+".(Just joking)";
		document.getElementById("mon").style.display="block";
	}
	else{
		document.getElementById("mon").style.display="none";
	}
}
function keypress(){
	if (event.keyCode<48 || event.keyCode>57) {event.returnValue=false;}
}


