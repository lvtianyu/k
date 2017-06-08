//
var EventUtil={
                addHandler : function(element,type,handler) {
                    
                    if(element.addEventListener){
                        
                        return element.addEventListener(type,handler)
                        
                    }else if(element.attachEvent){
                        
                        return element.attachEvent('on'+type,handler)
                    }else{
                        return element['on'+type]=handler
                    }

                },
                getEvent : function(event) {
                    return event ? event:window.event;
                },
                getTarget : function(event) {
                    return event.target || event.srcElement;
                },
                preventDefault : function(event) {
                    if(event.preventDefault){
                        event.preventDefault()
                    }else{
                        event.returnValue=false
                    }
                },
                removeHandler : function(element,type,handler) {

                },
                stopPropagation : function(event) {
                    if(event.stopPropagation){
                        event.stopPropagation()
                    }else{
                        event.cancelBubble=true
                    }
                }
                
                
            }
            EventUtil.addHandler(list,'click',function(event){
                event=EventUtil.getEvent(event);
                var target =EventUtil.getTarget(event)
                console.log(target)
                switch(target.id){
                    case 'doSomething':
                    console.log('l changed the document title');
                    break;
                    case 'goSomewhere':
                    location.href='http';
                    break;
                    case 'sayHi':
                    alert('hi')
                    break;
                }
            })