//为了以后拓展将方法都抽离出来了，应变准备

  window.onload=function(){

    var img = document.getElementById("img");

    setTimeout(function() {
      img.setAttribute("class", "imgactive");
    }, 1500)

//招聘启事部分的点击功能，事件委派
      $('#jionUs').delegate('.jion-us-title','click',function(event){
      var _btn = $(this).children().last(),
          _isActive = _btn.attr('class'),
          _brother = $(this).next();

          if(!_isActive){
            _btn.attr({'class':'unActive'})
            _brother.attr({"style":"display:block"});
          }else{
            _btn.removeClass()
            _brother.attr({"style": "display:none"});

          }
    })

//轮播部分方法

   var 
      oldSign,//记录就的值
      sign=0,
      open,//鼠标移入将不轮播
      timei=0,//调整轮播时间上的碰撞
      carouselTiem=$('.carousel-inner>div'),
      sumSign=carouselTiem.length-1;//记录轮播便签的个数
      // headerBackGroud=$('#headerBackGroud');


      for(var j=0;j<carouselTiem.length;j++){
        carouselTiem[j].onmouseenter=function(){
          open=true
        }
        carouselTiem[j].onmouseleave=function(){
            timei=0;
          open=false
        }

        var i='#i',oldi;
         i+=j
        clickSign(i,j)
      };

    //圆点标签点击事件
      function clickSign(i,j){

            $(i).on('mouseenter',function(){

              if(sign!=j){
                 timei=0;

                if(sign<j){
                  ShowOrHide(j,sign);
                  sign++;
                }else{                  
                  ShowOrHide(j,sign);
                  sign--
                }
        
              }
          })
      }
    //animate方法，

      function ShowOrHide(newId,oldId,Text1,Text2,speed,easing) {
                  var i='#i'+newId,oldi='#i'+oldId;
                      $(i).addClass('active');
                      $(oldi).removeClass('active');

                  carouselTiem.eq(newId).animate({opacity:1,dispaly:'show'},1000);
                  carouselTiem.eq(oldId).animate({opacity:0,display:'hide'},1000)
      }

    // turn left

      function turnLeft(){
          if(sign!=0){
           
          oldSign=sign;
          sign--;

          ShowOrHide(sign,oldSign)

        }
      }

      //turn right

      function turnRight(){
        if(sign!=sumSign){
            oldSign=sign;
            sign++;

            ShowOrHide(sign,oldSign)

          }
      }
      
      var timesum;
      var time=setInterval(function(){
        if(timei!=0){
          timesum=timei % 18
        }
        timei++;
        
        if(!open && timesum==0 ){
          
          if(sign!=sumSign ){
                    turnRight()
                  }else{
                    turnLeft()
                  }
          }
       
        },300)

    //
    if(ie8){
      $('.headerImg').addClass('compatibilityIe8-Op');
      $('.is-hover').removeClass('is-hover')
    }
 
};
