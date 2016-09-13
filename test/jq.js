/**
 * Created by ARKIN on 4/26/16.
 */
    //判断是是pc端
function IsPC() {
    //用户设备信息
    var userAgentInfo = navigator.userAgent;
    //允许访问的设备
    var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
if(IsPC()){
    //跳转地址
    window.location.href = 'index_pc.html';
}