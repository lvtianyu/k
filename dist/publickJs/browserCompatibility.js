var browser=navigator.appName ,
     b_version=navigator.appVersion,
     version=b_version.split(";"),
     baseUrl='http://10.0.1.10:3000/src/component/',
     trim_Version=version[1].replace(/[ ]/g,""),
     ie8=false,
     _go=( trim_Version=="MSIE6.0")||
     ( trim_Version=="MSIE7.0")?true:false; 

if( trim_Version=="MSIE6.0") { 

} 
else if( trim_Version=="MSIE7.0") { 

} 
else if( trim_Version=="MSIE8.0") { 
    ie8=true;
} 
else if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE9.0") { 
} 

function locationHref(){

    if(_go){
        window.location.href=baseUrl+"compatibilityNotice.html"
    }
}
locationHref()

