

$('#btn').delegate('li','click',function(){
    var id = $(this).attr('id')
        if(id == 'backMainPage'){
        var appType = navigator.userAgent;
        //判断是否是移动终端
        if (appType.indexOf('Mobile') > -1) {
            var goTo = location.search.indexOf("camp.liver-cloud.com/my_plan")>0?"http://liver-cloud.com/my_plan/dist/index.html":"http://camp.liver-cloud.com/platform/dist/index.html"
            location.href=goTo
        }
        else if (appType.indexOf('iPad') > -1) {

        }
        else {
            location.href="http://liver-cloud.com/index.html"
        }

    }else {
        location.href
    }
});