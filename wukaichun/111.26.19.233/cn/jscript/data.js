var strVar = "";
    strVar += "<div class=\"bootstrap-dialog-body\"><div class=\"bootstrap-dialog-message\"><div><div class=\"row-fluid\">";
    strVar += "<div class=\"span12\">";
    strVar += "<div class=\"tabbable custom-tab\">";
    strVar += "<ul class=\"nav nav-tabs\">";
    strVar += "<li class=\"active\"><a href=\"#tab_1_1\" data-toggle=\"tab\">基本信息<\/a><\/li>";
    strVar += "<li><a href=\"#tab_1_2\" data-toggle=\"tab\">S/O端口配置<\/a><\/li>";
    strVar += "<li><a href=\"#tab_1_3\" data-toggle=\"tab\">常用功能<\/a><\/li>";
    strVar += "<\/ul>";
    strVar += "<div class=\"tab-content\">";
    strVar += "<div class=\"tab-pane active\" id=\"tab_1_1\">";
    strVar += "<table width=\"100%\">";
    strVar += "<tbody><tr height=\"45px\">";
    strVar += "<td>用户号码:<\/td>";
    strVar += "<td>8001<\/td>";
    strVar += "<td>用户名:<\/td>";
    strVar += "<td>8001<\/td>";
    strVar += "<td>密码:<\/td>";
    strVar += "<td>******<\/td>";
    strVar += "<\/tr>";
    strVar += "<tr height=\"45px\">";
    strVar += "<td>使用状态:<\/td>";
    strVar += "<td>启用<\/td>";
    strVar += "<td>本机权限:<\/td>";
    strVar += "<td>国内长途<\/td>";
    strVar += "<td>号码变换索引:<\/td>";
    strVar += "<td>0<\/td>";
    strVar += " <\/tr>";
    strVar += "<tr height=\"45px\">";
    strVar += "<td>鉴权:<\/td>";
    strVar += "<td>是<\/td>";
    strVar += "<td>开通权限:<\/td>";
    strVar += "<td>本地呼叫<\/td>";
    strVar += "<td>限时限呼<font color=\"green\">(分钟)<\/font>:<\/td>";
    strVar += "<td>0<\/td>";
    strVar += "<\/tr>";
    strVar += "<tr height=\"45px\">";
    strVar += "<td>本地分机:<\/td>";
    strVar += "<td>是<\/td>";
    strVar += "<td>代理注册模式:<\/td>";
    strVar += "<td>0<\/td>";
    strVar += "<td>代理注册号码:<\/td>";
    strVar += "<td><\/td>";
    strVar += "<\/tr>";
    strVar += "<tr height=\"45px\">";
    strVar += "<td>IMS认证账号:<\/td>";
    strVar += "<td><\/td>";
    strVar += "<td>IMS认证密码:<\/td>";
    strVar += "<td>******<\/td>";
    strVar += "<td>地址绑定状态:<\/td>";
    strVar += "<td>0<\/td>";
    strVar += "<\/tr>";
    strVar += "<tr height=\"45px\">";
    strVar += "<td>绑定IP:<\/td>";
    strVar += "<td><\/td>";
    strVar += "<\/tr>";
    strVar += "<\/tbody><\/table>";
    strVar += "<\/div>";
    strVar += "<div class=\"tab-pane\" id=\"tab_1_2\">";
    strVar += "<table width=\"100%\">";
    strVar += "<tbody><tr height=\"45px\">";
    strVar += "<td>位置:<\/td>";
    strVar += "<td><\/td>";
    strVar += "<td>端口类型:<\/td>";
    strVar += "<td><\/td>";
    strVar += "<td>端口:<\/td>";
    strVar += "<td><\/td>";
    strVar += "<\/tr>";
    strVar += "<tr height=\"45px\">";
    strVar += "<td>组ID:<\/td>";
    strVar += "<td><\/td>";
    strVar += "<td>热线模式:<\/td>";
    strVar += "<td><\/td>";
    strVar += "<td>热线送号延时(s):<\/td>";
    strVar += "<td><font color=\"green\">(秒)<\/font><\/td>";
    strVar += "<\/tr>";
    strVar += "<tr height=\"45px\">";
    strVar += "<td>热线号码:<\/td>";
    strVar += "<td><\/td>";
    strVar += "<\/tr>";
    strVar += "<\/tbody><\/table>";
    strVar += "<\/div>";
    strVar += "<div class=\"tab-pane\" id=\"tab_1_3\">";
    strVar += "<table width=\"100%\">";
    strVar += " <tbody><tr height=\"45px\" style=\"display:none;\">";
    strVar += "<td align=\"left\" bgcolor=\"#ffffff\" colspan=\"5\">权限&nbsp;<select id=\"authorityBut\" name=\"authorityBut\" value=\" \"><option value=\"0\">关闭<\/option><option value=\"1\" selected=\"\">开启<\/option><\/select>";
    strVar += "<span style=\"display:inline;color:green;\">&nbsp;注：只有总开关开启，才代表每个功能权限生效！<\/span>";
    strVar += "<\/td>";
    strVar += "<\/tr>";
    strVar += "<tr style=\"display:none;\"> ";
    strVar += "<td align=\"left\" bgcolor=\"#ffffff\" colspan=\"5\">权限类型<\/td>   ";
    strVar += "<\/tr>";
    strVar += "<tr>";
    strVar += "<td align=\"left\" bgcolor=\"#ffffff\" colspan=\"5\">";
    strVar += " <input type=\"checkbox\" id=\"chk_all\" name=\"chk_all\" value=\"0\" onclick=\"chkall()\"><font face=\"Tahoma\">&nbsp;全部权限<\/font>";
    strVar += "<\/td>";
    strVar += "<\/tr>";
    strVar += "<tr height=\"30px\">";
    strVar += "<td><label for=\"chk_one0\" style=\"display: inline;\"><input type=\"checkbox\" id=\"chk_one0\" name=\"chk_one0\" value=\"0\" onclick=\"chkone()\">&nbsp;闹钟<\/label>&nbsp;<\/td>   ";
    strVar += "<td><label for=\"chk_one1\" style=\"display: inline;\"><input type=\"checkbox\" id=\"chk_one1\" name=\"chk_one1\" value=\"1\" onclick=\"chkone()\">&nbsp;三方通话<\/label>&nbsp;<\/td>   ";
    strVar += "<td><label for=\"chk_one2\" style=\"display: inline;\"><input type=\"checkbox\" id=\"chk_one2\" name=\"chk_one2\" value=\"2\" onclick=\"chkone()\">&nbsp;免打扰<\/label>&nbsp;<\/td>   ";
    strVar += "<td><label for=\"chk_one3\" style=\"display: inline;\"><input type=\"checkbox\" id=\"chk_one3\" name=\"chk_one3\" value=\"3\" onclick=\"chkone()\">&nbsp;无条件前转<\/label>&nbsp;<\/td>   ";
    strVar += "<td><label for=\"chk_one4\" style=\"display: inline;\"><input type=\"checkbox\" id=\"chk_one4\" name=\"chk_one4\" value=\"4\" onclick=\"chkone()\">&nbsp;遇忙前转<\/label>&nbsp;<\/td>   ";
    strVar += "<td><label for=\"chk_one5\" style=\"display: inline;\"><input type=\"checkbox\" id=\"chk_one5\" name=\"chk_one5\" value=\"5\" onclick=\"chkone()\">&nbsp;无应答前转<\/label>&nbsp;<\/td>   ";
    strVar += "<\/tr><tr height=\"30px\">";
    strVar += "<td><label for=\"chk_one8\" style=\"display: inline;\"><input type=\"checkbox\" id=\"chk_one8\" name=\"chk_one8\" value=\"8\" onclick=\"chkone()\">&nbsp;主叫线识别限制<\/label>&nbsp;<\/td>   ";
    strVar += "<td><label for=\"chk_one9\" style=\"display: inline;\"><input type=\"checkbox\" id=\"chk_one9\" name=\"chk_one9\" value=\"9\" onclick=\"chkone()\">&nbsp;主叫线识别限制逾越<\/label>&nbsp;<\/td>   ";
    strVar += "<td><label for=\"chk_one12\" style=\"display: inline;\"><input type=\"checkbox\" id=\"chk_one12\" name=\"chk_one12\" value=\"12\" onclick=\"chkone()\">&nbsp;秘书业务<\/label>&nbsp;<\/td>   ";
    strVar += "<td><label for=\"chk_one13\" style=\"display: inline;\"><input type=\"checkbox\" id=\"chk_one13\" name=\"chk_one13\" value=\"13\" onclick=\"chkone()\">&nbsp;呼叫限制<\/label>&nbsp;<\/td>   ";
    strVar += "<td><label for=\"chk_one14\" style=\"display: inline;\"><input type=\"checkbox\" id=\"chk_one14\" name=\"chk_one14\" value=\"14\" onclick=\"chkone()\">&nbsp;密码限呼<\/label>&nbsp;<\/td>   ";
    strVar += "<td><label for=\"chk_one17\" style=\"display: inline;\"><input type=\"checkbox\" id=\"chk_one17\" name=\"chk_one17\" value=\"17\" onclick=\"chkone()\">&nbsp;遇忙回叫<\/label>&nbsp;<\/td>   ";
    strVar += "<\/tr><tr height=\"30px\">";
    strVar += "<td><label for=\"chk_one18\" style=\"display: inline;\"><input type=\"checkbox\" id=\"chk_one18\" name=\"chk_one18\" value=\"18\" onclick=\"chkone()\">&nbsp;代答<\/label>&nbsp;<\/td>   ";
    strVar += "<td><label for=\"chk_one19\" style=\"display: inline;\"><input type=\"checkbox\" id=\"chk_one19\" name=\"chk_one19\" value=\"19\" onclick=\"chkone()\">&nbsp;呼叫转接<\/label>&nbsp;<\/td>   ";
    strVar += "<td><label for=\"chk_one20\" style=\"display: inline;\"><input type=\"checkbox\" id=\"chk_one20\" name=\"chk_one20\" value=\"20\" onclick=\"chkone()\">&nbsp;录音<\/label>&nbsp;<\/td>   ";
    strVar += "<td><label for=\"chk_one21\" style=\"display: inline;\"><input type=\"checkbox\" id=\"chk_one21\" name=\"chk_one21\" value=\"21\" onclick=\"chkone()\">&nbsp;强插/拆/监听<\/label>&nbsp;<\/td>   ";
    strVar += "<td><label for=\"chk_one22\" style=\"display: inline;\"><input type=\"checkbox\" id=\"chk_one22\" name=\"chk_one22\" value=\"22\" onclick=\"chkone()\">&nbsp;话务员<\/label>&nbsp;<\/td>   ";
    strVar += "<td><label for=\"chk_one23\" style=\"display: inline;\"><input type=\"checkbox\" id=\"chk_one23\" name=\"chk_one23\" value=\"23\" onclick=\"chkone()\">&nbsp;缩位拨号<\/label>&nbsp;<\/td>   ";
    strVar += "<\/tr><tr height=\"30px\">";
    strVar += "<td><label for=\"chk_one24\" style=\"display: inline;\"><input type=\"checkbox\" id=\"chk_one24\" name=\"chk_one24\" value=\"24\" onclick=\"chkone()\">&nbsp;彩铃设置<\/label>&nbsp;<\/td>   ";
    strVar += "<td><label for=\"chk_one25\" style=\"display: inline;\"><input type=\"checkbox\" id=\"chk_one25\" name=\"chk_one25\" value=\"25\" onclick=\"chkone()\">&nbsp;黑名单呼出设置<\/label>&nbsp;<\/td>   ";
    strVar += "<td><label for=\"chk_one26\" style=\"display: inline;\"><input type=\"checkbox\" id=\"chk_one26\" name=\"chk_one26\" value=\"26\" onclick=\"chkone()\">&nbsp;黑名单呼入设置<\/label>&nbsp;<\/td>   ";
    strVar += "<td><label for=\"chk_one27\" style=\"display: inline;\"><input type=\"checkbox\" id=\"chk_one27\" name=\"chk_one27\" value=\"27\" onclick=\"chkone()\">&nbsp;白名单呼出设置<\/label>&nbsp;<\/td>   ";
    strVar += "<td><label for=\"chk_one28\" style=\"display: inline;\"><input type=\"checkbox\" id=\"chk_one28\" name=\"chk_one28\" value=\"28\" onclick=\"chkone()\">&nbsp;白名单呼入设置<\/label>&nbsp;<\/td>   ";
    strVar += "<td><label for=\"chk_one29\" style=\"display: inline;\"><input type=\"checkbox\" id=\"chk_one29\" name=\"chk_one29\" value=\"29\" onclick=\"chkone()\">&nbsp;呼叫预留<\/label>&nbsp;<\/td>   ";
    strVar += "<\/tr><tr height=\"30px\">";
    strVar += "<td><label for=\"chk_one33\" style=\"display: inline;\"><input type=\"checkbox\" id=\"chk_one33\" name=\"chk_one33\" value=\"33\" onclick=\"chkone()\">&nbsp;语音邮箱<\/label>&nbsp;<\/td>   ";
    strVar += "<td><label for=\"chk_one34\" style=\"display: inline;\"><input type=\"checkbox\" id=\"chk_one34\" name=\"chk_one34\" value=\"34\" onclick=\"chkone()\">&nbsp;一号通<\/label>&nbsp;<\/td>   ";
    strVar += "<\/tr>";
    strVar += "<input type=\"hidden\" id=\"authorityList\" name=\"authorityList\" value=\"\">";
    strVar += "<\/tbody><\/table>";
    strVar += "<\/div>";
    strVar += "<\/div>";
    strVar += "<\/div>";
    strVar += "<\/div>";
    strVar += "<\/div>";
    strVar += "<\/div><\/div><\/div><\/div><div class=\"modal-footer\" style=\"display: none;\"><div class=\"bootstrap-dialog-footer\"><\/div><\/div><\/div><\/div>";

function rettttttt(){
	return strVar;
}